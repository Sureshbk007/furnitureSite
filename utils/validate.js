function validate(type, { fullName, email, contact, password } = {}) {
  const error = {};
  if (type === "signup") {
    isValidFullname(fullName, error);
    isValidEmail(email, error);
    isValidContact(contact, error);
    isValidPassword(password, error);
  } else if (type === "login") {
    isValidEmail(email, error);
    isValidPassword(password, error);
  }
  return Object.keys(error).length ? error : null;
}

function isValidFullname(fullName, error) {
  const fullNameRegex = /^[A-Za-z. ]+$/;
  if (!fullName || !fullName.trim()) error.fullName = "Fullname is required";
  else if (!fullNameRegex.test(fullName)) error.fullName = "Invalid fullname";
  else if (fullName.length > 30)
    error.fullName = "Fullname must be less than 30 characters";
}

function isValidEmail(email, error) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!email || !email.trim()) error.email = "Email is required";
  else if (!emailRegex.test(email)) error.email = "Invalid email";
  else if (email.length > 30)
    error.email = "Email must be less than 30 characters";
}

function isValidContact(contact, error) {
  const contactRegex = /^\d{10}$/;
  if (!contact || !contact.trim()) error.contact = "Contact number is required";
  else if (!contactRegex.test(contact))
    error.contact = "Invalid contact number";
}

function isValidPassword(password, error) {
  if (!password || !password.trim()) error.password = "Password is required";
  else if (password.length < 6)
    error.password = "Password must be at least 6 characters";
  else if (password.length > 30)
    error.password = "Password must be less than 30 characters";
}
export default validate;
