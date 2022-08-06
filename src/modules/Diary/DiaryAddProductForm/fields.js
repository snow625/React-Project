const fields = {
  product: {
    name: "product",
    required: true,
    type: "text",
    autoComplete: "off",
    id: "product",
  },
  weight: {
    name: "weight",
    id: "weight",
    required: true,
    type: "number",
    min: "1",
    max: "3000",
    title: "Input weight product in (gram)",
  },
};

export default fields;
