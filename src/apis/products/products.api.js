const getProducts = async (type) => {
  const endpoints = {
    products:
      "https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/products",
  };

  try {
    // API 호출
    const response = await fetch(endpoints[type]);
    const data = await response.json();
    return data;
  } catch {
    alert("에러 발생");
    return;
  }
};

const productsAPI = {
  getProducts,
};

export default productsAPI;
