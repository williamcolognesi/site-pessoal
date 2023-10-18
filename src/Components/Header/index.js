import { Container, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import * as S from "./styles";
import Logo from "../../../src/assets/img/Logo.png";
import { useState } from "react";
import useWindowSize from "../lib/useWindowSize";

export default function Header() {
  const [isMobileMenu, setMobileMenu] = useState(false);
  const size = useWindowSize();

  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
  };

  return (
    <S.ContainerHeader>
      <Container>
        <Grid container className="content">
          <Grid item md={8}>
            <S.Logo>
              <img src={Logo} alt="Logotipo com a escrita WColognesi" />
            </S.Logo>
          </Grid>
          {size.width > 900 ? (
            <Grid item md={4}>
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
          ) : (
            <Grid item md={4}>
              <MenuIcon onClick={handleMobileMenu} />
            </Grid>
          )}
          {isMobileMenu && size.width < 900 && (
            <Grid item xs={12}>
              <S.HeaderMobile>
                <a href="/">Home</a>

                <a href="/resumo">Resumo</a>

                <a href="/projetos">Projetos</a>

                <a href="/contato">Contato</a>
              </S.HeaderMobile>
            </Grid>
          )}
        </Grid>
      </Container>
    </S.ContainerHeader>
  );
}
