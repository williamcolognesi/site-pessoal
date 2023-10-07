import { Container, Grid } from "@mui/material";
import * as S from "./styles";
import Form from "../../Components/Form";

export default function Contato() {
  return (
    <S.ContainerContactBox>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <div>
              <Form />
            </div>
          </Grid>
        </Grid>
      </Container>
    </S.ContainerContactBox>
  );
}
