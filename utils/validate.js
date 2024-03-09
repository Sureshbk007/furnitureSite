function validate(fullname, email, contact, password) {
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

  if (!contact || !contact.trim()) {
    errors.contact = "Contact is required";
  } else if (!isValidContact(contact)) {
    errors.contact = "Invalid contact";
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
  const fullnameRegex = /^[a-zA-Z]{1,30}(?:[.\s]?[a-zA-Z]{1,30})*[.]?$/;
  return fullnameRegex.test(fullname);
}
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function isValidContact(contact) {
  const contactRegex = /^\d{10}$/;
  return contactRegex.test(contact);
}

export default validate;
