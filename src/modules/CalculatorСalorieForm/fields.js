const fields = {
  height: {
    label: "Рост *",
    type: "number",
    name: "height",
    min: "100",
    max: "250",
    title: "Введите ваш рост в (см)",
  },
  age: {
    label: "Возраст *",
    type: "number",
    name: "age",
    min: "18",
    max: "100",
    title: "Введите ваш возраст",
  },
  weight: {
    label: "Текущий вес *",
    type: "number",
    name: "weight",
    min: "20",
    max: "500",
    title: "Введите ваш вес в (кг)",
  },
  desiredWeight: {
    label: "Желаемый вес *",
    type: "number",
    name: "desiredWeight",
    min: "20",
    max: "500",
    title: "Введи ваш желаемый вес в (кг)",
  },
  bloodType1: {
    label: "1",
    type: "radio",
    name: "bloodType",
    value: "1",
  },
  bloodType2: {
    label: "2",
    type: "radio",
    name: "bloodType",
    value: "2",
  },
  bloodType3: {
    label: "3",
    type: "radio",
    name: "bloodType",
    value: "3",
  },
  bloodType4: {
    label: "4",
    type: "radio",
    name: "bloodType",
    value: "4",
  },
};

export default fields;
