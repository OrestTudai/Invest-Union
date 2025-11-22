import { FormValues } from "@/sections/HomePageSections/Contacts/form/types";
import axiosInstance from "@/configs/axiosInstance";

export const sendEmail = async (data: FormValues) => {
  return axiosInstance.post("/email", data);
};
