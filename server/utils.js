const isPasswordCorrect = (password) =>
  /[A-Za-z]/.test(password) &&
  /[0-9]/.test(password) &&
  /[!@#$%^&*(){}[\]<>?/|.:;_-]/.test(password);

const isEmailCorrect = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

module.exports = {
  isPasswordCorrect,
  isEmailCorrect,
};
