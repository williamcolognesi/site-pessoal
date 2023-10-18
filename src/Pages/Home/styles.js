import styled from "styled-components";

export const ContainerHero = styled.section`
  padding: 48px 0 48px;
  .MuiContainer-root {
    margin-top: 80px;
  }
`;

export const TextHero = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  p {
    font-size: 12px;
    font-weight: 700;
    line-height: 12px;
    white-space: nowrap;
    background: linear-gradient(135deg, #1e30f3 0%, #e21e80 100%);
    color: #fff;
    margin-bottom: 1.5rem;
    border-radius: 0.675rem;
    padding: 0.35rem;
  }

  h3 {
    color: #6c757d;
    font-weight: 200;
    font-size: 20px;
    line-height: 42px;
    text-align: center;
    margin-bottom: 1rem;
  }

  h1 {
    background: -webkit-linear-gradient(315deg, #1e30f3 0%, #e21e80 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-size-adjust: 100%;
    font-weight: 700;
    font-size: 44px;
    margin-bottom: 48px;
    text-align: center;
  }

  @media (min-width: 900px) {
    h1 {
      font-size: 3.5rem;
      text-align: start;
    }
    h3 {
      font-size: 28px;
    }
  }

  @media (min-width: 900px) {
    align-items: start;
    height: 100%;
    justify-content: center;
    margin-top: 0;
  }

  @media (max-width: 900px) {
    p {
      margin-bottom: 0.5rem;
    }
    h3 {
      margin-bottom: 0.5rem;
    }
    h1 {
      margin-bottom: 1.5rem;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 10px;
  button {
    padding: 15px 30px;
  }

  @media (min-width: 900px) {
    justify-content: start;
  }
`;

export const ImageBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  img {
    width: 80%;
  }
  @media (min-width: 600px) and (max-width: 900px) {
    img {
      width: 60%;
    }
  }
`;

export const ContainerAboutMe = styled.section`
  padding: 48px 0 48px;
  background-color: rgb(248, 249, 250);
`;

export const TextAbout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 48px;
  p {
    color: rgb(108, 117, 125);
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    margin-bottom: 14px;
  }

  h3 {
    color: rgb(33, 37, 41);
    font-weight: 200;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 24px;
  }

  h2 {
    background: -webkit-linear-gradient(315deg, #1e30f3 0%, #e21e80 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-size-adjust: 100%;
    font-weight: 700;
    font-size: 48px;
    line-height: 57.6px;
    margin-bottom: 10px;
    text-align: center;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
  a {
    padding: 10px;
    cursor: pointer;
    text-decoration: none;
    color: #1e30f3;
  }
`;
