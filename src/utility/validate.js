export const validateData = (email, passwords) => {
  const emailValid = /^\w+([-.+']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(
    email,
  );
  const passwordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(
    passwords,
  );

  if (!emailValid) return "Invalid Email";
  else if (!passwordValid) return "Invalid passwor";
  else return null;
};
