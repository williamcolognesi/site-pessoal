import { Container, Grid } from "@mui/material";
import * as S from "./styles";
import Logo from "../../../src/assets/img/Logo.png";

export default function Header() {
  return (
    <S.ContainerHeader>
      <Container>
        <Grid container>
          <Grid item md={8} xs={12}>
            <S.Logo>
              <img src={Logo} alt="Logotipo com a escrita WColognesi" />
            </S.Logo>
          </Grid>
          <Grid item md={4} xs={12}>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/resumo">Resumo</a>
              </li>
              <li>
                <a href="/projetos">Projetos</a>
              </li>
              <li>
                <a href="/contato">Contato</a>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </S.ContainerHeader>
  );
}
