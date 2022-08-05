const fields = {
  email: {
    label: "Email *",
    name: "email",
    required: true,
    type: "email",
    pattern: "[^@]+@[^@]+.[a-zA-Z]{2,6}",
    minLength: 3,
    maxLength: 254,
    title: "Input email, example: test@gmail.com",
  },
  password: {
    label: "Password *",
    name: "password",
    required: true,
    type: "password",
    minLength: 8,
    maxLength: 100,
  },
};

export default fields;
