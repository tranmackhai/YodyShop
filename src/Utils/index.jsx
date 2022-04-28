export const castToVND = (price) => {
  if (!price) return;
  price = price.toLocaleString("vi", { style: "currency", currency: "VND" });
  return price;
};
