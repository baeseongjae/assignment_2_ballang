import React from "react";
import styled from "styled-components";

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

function Page({ children }) {
  return <Main>{children}</Main>;
}

export default Page;
