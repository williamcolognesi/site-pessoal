import { Container, Grid, Button, styled } from "@mui/material";
import * as S from "./styles";
import PassGen from "../../assets/img/gerador-de-senha.png";
import Filmaria from "../../assets/img/filmaria.png";
import Con2 from "../../assets/img/con2contabil.png";
import Login from "../../assets/img/login.png";

export default function Projetos() {
  const ButtonBlack = styled(Button)({
    color: "#fff",
    fontWeight: "bolder",
    fontSize: 14,
    borderColor: "#fff",
    padding: "16px 48px",
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
      backgroundColor: "#fff",
      color: "#000",
    },
  });
  return (
    <S.ContainerProjeto>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <S.Title>Portfólio</S.Title>
          </Grid>
          <Grid item xs={12}>
            <S.Info>
              <Grid container>
                <Grid item xs={12} md={7}>
                  <S.BlockResume>
                    <S.TitleProject>
                      Pagina profissional (Con²Contábil)
                    </S.TitleProject>
                    <S.ResumeText>
                      Site institucional do escritório Con² Contábil e Blog para
                      postagens de noticias.
                    </S.ResumeText>
                    <a href="https://con2contabil.com/">Visualize a pagina</a>
                  </S.BlockResume>
                </Grid>
                <Grid item xs={12} md={5}>
                  <S.Image>
                    <img src={Con2} alt="" />
                  </S.Image>
                </Grid>
              </Grid>
            </S.Info>
          </Grid>
          <Grid item xs={12}>
            <S.Info>
              <Grid container>
                <Grid item xs={12} md={7}>
                  <S.BlockResume>
                    <S.TitleProject>Filmaria</S.TitleProject>
                    <S.ResumeText>
                      Pagina de filmes onde é possivel visualizar a sinopes dos
                      filmes, assistir o trailer e ainda pode adicionar o mesmo
                      na sua lista de filmes salvos.
                    </S.ResumeText>
                    <a href="https://filmaria-six.vercel.app/">
                      Visualize a pagina
                    </a>
                  </S.BlockResume>
                </Grid>
                <Grid item xs={12} md={5}>
                  <S.Image>
                    <img src={Filmaria} alt="" />
                  </S.Image>
                </Grid>
              </Grid>
            </S.Info>
          </Grid>
          <Grid item xs={12}>
            <S.Info>
              <Grid container>
                <Grid item xs={12} md={7}>
                  <S.BlockResume>
                    <S.TitleProject>Gerador de senha</S.TitleProject>
                    <S.ResumeText>
                      Página gera senha aleatoria e com um range de caracteres
                      que o usuario possa escolher entre 6 a 18 caracteres.
                    </S.ResumeText>
                    <a href="https://password-generator-xi-six.vercel.app/">
                      Visualize a pagina
                    </a>
                  </S.BlockResume>
                </Grid>
                <Grid item xs={12} md={5}>
                  <S.Image>
                    <img src={PassGen} alt="" />
                  </S.Image>
                </Grid>
              </Grid>
            </S.Info>
          </Grid>
          <Grid item xs={12}>
            <S.Info>
              <Grid container>
                <Grid item xs={12} md={7}>
                  <S.BlockResume>
                    <S.TitleProject>Tela de login</S.TitleProject>
                    <S.ResumeText>
                      Design de tela de login feita em react, disponivel para
                      utilização em seu projeto.
                    </S.ResumeText>
                    <a href="https://login-screen-three.vercel.app/">
                      Visualize a pagina
                    </a>
                  </S.BlockResume>
                </Grid>
                <Grid item xs={12} md={5}>
                  <S.Image>
                    <img src={Login} alt="" />
                  </S.Image>
                </Grid>
              </Grid>
            </S.Info>
          </Grid>
        </Grid>
      </Container>
      <Grid container>
        <Grid item xs={12}>
          <S.Cta>
            <S.Container>
              <S.TextCta>
                <h2>Vamos trabalhar juntos</h2>
                <a href="/contato">
                  <ButtonBlack variant="outlined">Contato</ButtonBlack>
                </a>
              </S.TextCta>
            </S.Container>
          </S.Cta>
        </Grid>
      </Grid>
    </S.ContainerProjeto>
  );
}
