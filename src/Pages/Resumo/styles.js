import styled from "styled-components";

export const ContainerResumeBox = styled.section`
  padding: 40px 0 80px;
  .MuiContainer-root {
    margin-top: 80px;
  }
`;

export const Subtitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }

  h2 {
    color: ${(props) => props.color};
    font-size: 32px;
    font-weight: 700;
    line-height: 38px;
    margin-bottom: 24px;
  }
  h3 {
    background: -webkit-linear-gradient(315deg, #1e30f3 0%, #e21e80 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 32px;
    font-weight: 700;
    line-height: 38px;
    margin-bottom: 24px;
    margin-left: 20px;
  }
`;

export const Info = styled.div`
  background-color: #fff;
  padding: 40px 0 40px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  margin-bottom: 40px;

  .info {
    padding: 20px;
    background-color: rgb(248, 249, 250);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
  }
  .info-skill {
    padding: 20px;
    background-color: rgb(248, 249, 250);
    border-radius: 20px;
  }

  .year {
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    margin-bottom: 8px;
    color: ${(props) => props.color};
  }
  .function {
    font-size: 14px;
    font-weight: 700;
    color: rgb(33, 37, 41);
    line-height: 21px;
  }
  .local {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: rgb(108, 117, 125);
  }

  .description {
    color: rgb(33, 37, 41);
    font-size: 16px;
    line-height: 24px;
    overflow-wrap: break-word;
    height: 100%;
    display: flex;
    align-items: center;
  }

  @media (max-width: 900px) {
    .description {
      padding: 10px 20px 0 20px;
      text-align: center;
    }
    .info {
      margin: 0 20px 0 20px;
      align-items: center;
    }
  }

  .item {
    background-color: rgb(248, 249, 250);
    padding: 20px;
    margin: 0 20px;
    border-radius: 20px;
    text-align: center;
  }
  .linguagens {
    padding-top: 40px;
  }
`;
