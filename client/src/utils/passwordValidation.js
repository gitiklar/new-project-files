export const isPasswordCorrect = (password) =>
  /[A-Za-z]/.test(password) &&
  /[0-9]/.test(password) &&
  /[!@#$%^&*(){}[\]<>?/|.:;_-]/.test(password);
