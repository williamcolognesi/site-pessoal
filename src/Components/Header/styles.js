import styled from "styled-components";

export const ContainerHeader = styled.header`
  padding: 10px 0 10px;
  background-color: #fafafa;
  display: flex;
  @media (min-width: 900px) {
    background-color: #fff;
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
  a{
    text-decoration: none;
    color: rgba(0, 0, 0, 0.55);
  }
  a:hover{
    color: #000;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  @media (min-width: 900px) {
    justify-content: start;
  }
`;
