function validate(fullname, email, password) {
  const errors = {};

  if (!fullname || !fullname.trim()) {
    errors.fullname = "Fullname is required";
  } else if (!isValidFullname(fullname)) {
    errors.fullname = "Invalid fullname";
  }

  if (!email || !email.trim()) {
    errors.email = "Email is required";
  } else if (!isValidEmail(email)) {
    errors.email = "Invalid email";
  }

  if (!password || !password.trim()) {
    errors.password = "Password is required";
  } else if (!(password.length >= 6)) {
    errors.password = "Password must be at least 6 characters";
  }
  // Return errors object if there are any, otherwise return null
  return Object.keys(errors).length ? errors : null;
}

function isValidFullname(fullname) {
  const fullnameRegex = /^[a-zA-Z]+(?:[.\s]?[a-zA-Z]+)*[.]?$/;
  return fullnameRegex.test(fullname);
}
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export default validate;
