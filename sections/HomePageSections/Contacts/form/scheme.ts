import * as yup from "yup";

type Props = {
  translations: (key: string) => string;
};

export const getValidationSchema = ({ translations }: Props) =>
  yup.object().shape({
    name: yup.string().required(translations("fieldRequired")),
    companyName: yup.string().required(translations("fieldRequired")),
    email: yup
      .string()
      .email(translations("invalidEmail"))
      .required(translations("fieldRequired")),
    phone: yup
      .string()
      .required(translations("fieldRequired"))
      .matches(/^(?=.*\d)[0-9+()\- ]+$/, translations("invalidPhone")),
    message: yup.string().required(translations("fieldRequired")),
  });
