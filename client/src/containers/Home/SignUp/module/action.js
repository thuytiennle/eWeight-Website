import { OPEN_REGISTER_FORM } from "./constant";

export const actOpenRegisterForm = (isOpen) => {
  return {
    type: OPEN_REGISTER_FORM,
    data: isOpen,
  };
};
