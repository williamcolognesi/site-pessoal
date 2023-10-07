import { Button, Container, Grid, styled } from "@mui/material";
import * as S from "./styles";
import Hero from "../../assets/img/Developer activity-amico.png";

export default function Home() {
  const ButtonBlack = styled(Button)({
    color: "#000",
    fontWeight: "bolder",
    fontSize: 14,
    borderColor: "#000",
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
    "&:hover": {
      borderColor: "#fff",
      backgroundColor: "#000",
      color: "#fff",
    },
  });

  const ButtonBlue = styled(Button)({
    fontWeight: "bolder",
    fontSize: 14,
    backgroundColor: "#1e30f3",
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
    "&:hover": {
      borderColor: "#1e30f3",
      backgroundColor: "#fff",
      color: "#1e30f3",
    },
  });
  return (
    <>
      <S.ContainerHero>
        <Container>
          <Grid container>
            <Grid item xs={12} xl={7}>
              <S.TextHero>
                <p>DESIGN · DESENVOLVIMENTO · MARKETING</p>
                <h3>Posso ajudar sua empresa a</h3>
                <h1>Ficar online e crescer </h1>
                <S.Buttons>
                  <a href="/resumo">
                    <ButtonBlue variant="contained">Resumo</ButtonBlue>
                  </a>
                  <a href="/projetos">
                    <ButtonBlack variant="outlined">Projetos</ButtonBlack>
                  </a>
                </S.Buttons>
              </S.TextHero>
            </Grid>
            <Grid item xs={12} xl={5}>
              <S.ImageBlock>
                <img src={Hero} alt="Imagem do desenvolvedor web" />
              </S.ImageBlock>
            </Grid>
          </Grid>
        </Container>
      </S.ContainerHero>
      <S.ContainerAboutMe>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <S.TextAbout>
                <h2>Sobre mim</h2>
                <h3>Vamos criar algo incrível juntos!</h3>
                <p>
                  Olá! Sou um entusiasta da tecnologia com 22 anos de idade,
                  apaixonado pelo mundo do desenvolvimento de software. Possuo
                  uma formação sólida em Ciência da Computação pela Universidade
                  Paulista e, nos últimos 1 ano e 4 meses, venho me dedicando ao
                  aprimoramento das habilidades de front-end.
                </p>
                <p>
                  Minha jornada como desenvolvedor me permitiu criar
                  experiências digitais incríveis, combinando criatividade e
                  código para tornar a web mais atraente e funcional. Estou
                  constantemente explorando as últimas tendências e melhores
                  práticas para criar interfaces intuitivas e responsivas que
                  cativam os usuários.
                </p>
              </S.TextAbout>
              <S.Icons></S.Icons>
            </Grid>
          </Grid>
        </Container>
      </S.ContainerAboutMe>
    </>
  );
}
