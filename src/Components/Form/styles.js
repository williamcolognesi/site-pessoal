import styled from "styled-components";

export const Form = styled.div`
  background: #ffffff;
  border-radius: 24px;
  box-sizing: border-box;
  box-shadow: -4px 8px 16px rgba(0, 0, 0, 0.16);
  width: 100%;
  padding: 40px 24px;
  position: relative;
  z-index: 3;

  @media (min-width: 600px) {
    max-width: 408px;
  }

  @media (min-width: 900px) {
    max-width: 344px;
  }

  @media (min-width: 1200px) {
    max-width: 440px;
    padding: 40px 32px;
  }

  @media (min-width: 1440px) {
    max-width: 440px;
    padding: 40px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`;
