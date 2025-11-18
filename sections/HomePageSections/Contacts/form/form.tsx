import {SubmitHandler, useForm} from "react-hook-form";
import {FormValues} from "@/sections/HomePageSections/Contacts/form/types";
import {yupResolver} from "@hookform/resolvers/yup";
import {useTranslations} from "next-intl";
import {getValidationSchema} from "@/sections/HomePageSections/Contacts/form/scheme";

export const useContactsForm = () => {
  const translations = useTranslations('contacts')

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(getValidationSchema({ translations })),
    defaultValues: {
      name: "",
      companyName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form submitted:", data);
    reset();
  };

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
  }
}