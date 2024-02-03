import React from "react";
import spinner from "../../assets/loadingSpinner.svg";

function Loading() {
  return (
    <div>
      잠시만 기다려주세요
      <img src={spinner} alt="로딩 스피너" />
    </div>
  );
}

export default Loading;
