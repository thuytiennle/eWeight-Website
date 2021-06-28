import { SIGN_IN } from "./constant";

export const actSignIn = (user, history) => {
  return {
    type: SIGN_IN,
    user,
    history
  };
};
