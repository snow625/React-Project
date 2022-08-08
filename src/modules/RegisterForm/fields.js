const fields = {
  name: {
    label: "Имя *",
    name: "username",
    required: true,
    type: "text",
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    minLength: 3,
    maxLength: 254,
    title: "Введите имя на английском",
  },
  email: {
    label: "Email *",
    name: "email",
    required: true,
    type: "email",
    minLength: 3,
    maxLength: 254,
    pattern: "[^@]+@[^@]+.[a-zA-Z]{2,6}",
    title: "Введите email, например: test@gmail.com",
  },
  password: {
    label: "Пароль *",
    name: "password",
    required: true,
    type: "password",
    minLength: 8,
    maxLength: 100,
    pattern: "(?=.*[0-9])(?=.*[a-z]|[0-9]).{7,}",
    title: "Введите пароль, например: qwerty123",
  },
};

export default fields;
