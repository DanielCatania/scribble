function verifyPassword(password, confirmPassword = null) {
  if (confirmPassword && confirmPassword !== password) {
    throw new Error('The password and confirmation are different');
  }

  const containsNumbers = password.match(/([0-9])/);
  if (!containsNumbers) {
    throw new Error('The password must contain numbers');
  }

  const containsUpperCaseLetters = password.match(/([A-Z])/);
  const containsLowerCaseLetters = password.match(/([a-z])/);

  if (!containsLowerCaseLetters || !containsUpperCaseLetters) {
    throw new Error('The password must contain uppercase and lowercase letters');
  }

  const containsSpecials = password.match(/([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/);
  if (!containsSpecials) {
    throw new Error('The password must contain special key');
  }
}

export default verifyPassword;
