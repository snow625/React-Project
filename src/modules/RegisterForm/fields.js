const fields = {
  name: {
    label: "Name *",
    name: "username",
    required: true,
    type: "text",
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
  },
  email: {
    label: "Email *",
    name: "email",
    required: true,
    type: "email",
  },
  password: {
    label: "Password *",
    name: "password",
    required: true,
    type: "password",
  },
};

export default fields;
