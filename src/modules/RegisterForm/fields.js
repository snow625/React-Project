const fields = {
  name: {
    label: "Name *",
    name: "username",
    required: true,
    type: "text",
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    minLength: 3,
    maxLength: 254,
    title: "Input your name",
  },
  email: {
    label: "Email *",
    name: "email",
    required: true,
    type: "email",
    minLength: 3,
    maxLength: 254,
    pattern: "[^@]+@[^@]+.[a-zA-Z]{2,6}",
    title: "Input email, example: test@gmail.com",
  },
  password: {
    label: "Password *",
    name: "password",
    required: true,
    type: "password",
    minLength: 8,
    maxLength: 100,
    pattern: "(?=.*[0-9])(?=.*[a-z]|[0-9]).{7,}",
    title: "Input password, example: qwerty123",
  },
};

export default fields;
