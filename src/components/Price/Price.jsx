import React from "react";

function Price({ amount }) {
  const formattedPrice = new Intl.NumberFormat("ko-KR").format(amount);

  return <span>{formattedPrice} 원</span>;
}

export default Price;
