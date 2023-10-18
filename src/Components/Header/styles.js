import styled from "styled-components";

export const ContainerHeader = styled.header`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 2px;
  padding: 20px 0 20px;
  background-color: #fff;
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 99;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul {
    display: flex;
    justify-content: space-around;
    height: 100%;
    align-items: center;
  }
  li {
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.55);
  }
  a:hover {
    color: #000;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 900px) {
    justify-content: start;
    margin-bottom: 0;
  }
`;

export const HeaderMobile = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
  align-items: center;
  padding: 10px 0 50px;
  gap: 10px;
`;
