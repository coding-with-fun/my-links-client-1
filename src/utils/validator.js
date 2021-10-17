import validator from "validator";

export const validateEmail = (text) => {
    return validator.isEmail(text);
};
