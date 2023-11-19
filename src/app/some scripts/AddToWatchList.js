export const addToWatchList = (item) => {
  const products = JSON.parse(localStorage.getItem("products"));

  //   const products = [];
  const finded = products.find((p) => {
    if (item.id === p.id) {
      return true;
    } else {
      return false;
    }
  });
  if (!finded) {
    products.push(item.id);
    localStorage.setItem("products", JSON.stringify(products));
  }
};
