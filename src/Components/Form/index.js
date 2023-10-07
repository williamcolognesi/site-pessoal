import { useEffect } from "react";
import * as S from "./styles";

const Form = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "43954001",
          formId: "e413e4d5-2bdd-4452-9729-9dae78fd0bd2",
          target: "#hubspotForm",
          css: "",
        });
      }
    });
  }, []);

  return (
    <S.FormContainer>
      <S.Form>
        <div id="hubspotForm"></div>
      </S.Form>
    </S.FormContainer>
  );
};

export default Form;
