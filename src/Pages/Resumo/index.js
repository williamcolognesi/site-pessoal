import { Container, Grid, Button, styled } from "@mui/material";
import * as S from "./styles";

export default function Resumo() {
  const ButtonBlue = styled(Button)({
    fontWeight: "bolder",
    fontSize: 14,
    backgroundColor: "#1e30f3",
    padding: "20px",
    marginBottom: "20px",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  });
  return (
    <S.ContainerResumeBox>
      <Container>
        <Grid container justifyContent="center" rowSpacing={2}>
          <Grid item xs={12} md={8}>
            <S.Subtitle color={"#1e30f3"}>
              <h2>Experiência</h2>
              {/*
              <ButtonBlue variant="contained">Download Curriculo</ButtonBlue>
              */}
            </S.Subtitle>
          </Grid>
          <Grid item xs={12} md={8}>
            <S.Info color={"#1e30f3"}>
              <Grid container columnSpacing={4}>
                <Grid xs={0} md={1}></Grid>
                <Grid item xs={12} md={4}>
                  <div className="info">
                    <p className="year">Jun/2022 - Presente</p>
                    <p className="function">Desenvolvedor Front-End</p>
                    <p className="local">Grupo IOB</p>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <p className="description">
                    Desenvolvimento de site institucional e landing pages
                    utilizando NextJS para captura de leads. Utilização de UI e
                    UX e SEO para melhor perfomance do site visando tráfego
                    organico.
                  </p>
                </Grid>
                <Grid xs={0} md={1}></Grid>
              </Grid>
            </S.Info>
            <S.Info color={"#1e30f3"}>
              <Grid container columnSpacing={4}>
                <Grid xs={0} md={1}></Grid>
                <Grid item xs={12} md={4}>
                  <div className="info">
                    <p className="year">Jan/2021 - Jun/2022</p>
                    <p className="function">Services Consultant</p>
                    <p className="local">Grupo IOB</p>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <p className="description">
                    Consultor de serviços com foco em migração de dados,
                    responsavel por realizar toda analise de requisitos e
                    operação de migração via banco de dados utilizando
                    PostgreSQL e SQLServer.
                  </p>
                </Grid>
                <Grid xs={0} md={1}></Grid>
              </Grid>
            </S.Info>
            <S.Info color={"#1e30f3"}>
              <Grid container columnSpacing={4}>
                <Grid xs={0} md={1}></Grid>
                <Grid item xs={12} md={4}>
                  <div className="info">
                    <p className="year">Fev/2020 - Jan/2021</p>
                    <p className="function">Customer Care Assistant</p>
                    <p className="local">Grupo IOB</p>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <p className="description">
                    Suporte técnico de software contábil, analise de todo
                    contexto para solucionar o erro. Especialmente na analise de
                    XML, Logs e tabelas no banco de dados PostgreSQL.
                  </p>
                </Grid>
                <Grid xs={0} md={1}></Grid>
              </Grid>
            </S.Info>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <S.Subtitle color={"#e21e80"}>
              <h2>Formação</h2>
            </S.Subtitle>
          </Grid>
          <Grid item xs={12} md={8}>
            <S.Info color={"#e21e80"}>
              <Grid container columnSpacing={4}>
                <Grid xs={0} md={1}></Grid>
                <Grid item xs={12} md={4}>
                  <div className="info">
                    <p className="year">2019 - 2022</p>
                    <p className="function">Ciência da computação</p>
                    <p className="local">Universidade Paulista (UNIP)</p>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <p className="description">
                    O curso de Ciência da Computação prepara os alunos
                    para projetar produtos de software e manter ambientes
                    tecnológicos. Proporciona uma base sólida em
                    programação, raciocínio lógico e solução de problemas.
                  </p>
                </Grid>
                <Grid xs={0} md={1}></Grid>
              </Grid>
            </S.Info>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <S.Info color={"#e21e80"}>
              <Grid container rowSpacing={2}>
                <Grid item xs={12}>
                  <S.Subtitle>
                    <h3>Skills Profissionais</h3>
                  </S.Subtitle>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="item">SEO/SEM Marketing</div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="item">Web Development</div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="item">Network Security</div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="item">User Interface Design</div>
                </Grid>
              </Grid>
              <Grid container rowSpacing={2}>
                <Grid item xs={12}>
                  <S.Subtitle className="linguagens">
                    <h3>Linguagens</h3>
                  </S.Subtitle>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div className="item">Wordpress</div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div className="item">Styled Components</div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div className="item">Javascript</div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div className="item">React</div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div className="item">Next.js</div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div className="item">Node.js</div>
                </Grid>
              </Grid>
            </S.Info>
          </Grid>
        </Grid>
      </Container>
    </S.ContainerResumeBox>
  );
}
