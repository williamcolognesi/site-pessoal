import styled from "styled-components";

export const ContainerProjeto = styled.section`
  padding: 40px 0 40px;
`;

export const Title = styled.h1`
  background: -webkit-linear-gradient(315deg, #1e30f3 0%, #e21e80 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-size-adjust: 100%;
  font-weight: 700;
  font-size: 44px;
  margin-bottom: 48px;
  text-align: center;
`;

export const Info = styled.div`
  background-color: #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  margin-bottom: 40px;
`;

export const BlockResume = styled.div`
  padding: 80px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 900px) {
    text-align: center;
  }
`;

export const TitleProject = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 38px;
  color: rgb(33, 37, 41);
`;

export const ResumeText = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: rgb(33, 37, 41);
`;

export const Cta = styled.section`
  background: linear-gradient(135deg, #1e30f3 0%, #e21e80 100%);
  padding: 48px 0;
`;

export const Container = styled.div`
  margin: 48px 0;
`;

export const TextCta = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  h2 {
    font-size: 56px;
    font-weight: 700;
    line-height: 68px;
    color: #fff;
    text-align: center;
  }
`;

export const Image = styled.div`
  display: flex;
  height: 100%;
  border-radius: 0 20px 20px 0;
  img {
    max-width: 100%;
    height: 100%;
    border-radius: 0 20px 20px 0;
  }
  @media (max-width: 900px) {
    border-radius: 0 0 20px 20px;
    img {
      border-radius: 0 0 20px 20px;
    }
  }
`;
