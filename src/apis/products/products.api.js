const options = {
  method: "GET",
  header: {
    accept: "application/json",
  },
};

const getProducts = async (type) => {
  const endpoints = {
    products:
      "https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/products",
  };

  try {
    // API 호출
    const response = await fetch(endpoints[type], options);
    const data = await response.json();
    return data;
  } catch {
    alert("에러 발생");
    return;
  }
};

const getProduct = async (goodsNo) => {
  const endpoints = `https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/products/${goodsNo}`;

  try {
    const response = await fetch(endpoints, options);
    const data = await response.json();
    return data;
  } catch {
    alert("에러 발생");
    return;
  }
};

const productsAPI = {
  getProducts,
  getProduct,
};

export default productsAPI;
