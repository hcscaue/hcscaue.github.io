import { ProfilePhoto } from "../profile-photo";
import * as styled from "./styled";

export const Introduction = () => {
  return (
    <styled.Container>
      <ProfilePhoto />
      <div className="introduction">
        <div className="detail" />
        <div className="title-presentation">
          <h1>CAUÊ HENRIQUE</h1>
          <h3>CTO / GAME DEVELOPER / FRONT-END</h3>
        </div>
        <div className="description">
          <p>
            Olá, meu nome é Cauê Henrique, sou desenvolvedor de jogos e
            front-end, atualmente estou cursando o 3º período de Ciência da
            Computação na Universidade Federal de São Carlos (UFSCar).
            <br />
            Atualmente estou trabalhando como desenvolvedor de jogos na empresa
            4th Dimension Games e como desenvolvedor front-end na empresa 4th
            Dimension Games .
          </p>
        </div>
        <img
          className="assign"
          src="src/assets/photos/assign.png"
          alt="Assinatura"
        />
        <div className="social">
          <img src="src/assets/icons/instagram.svg" alt="Instagram" />
          <img src="src/assets/icons/linkedin.svg" alt="Linkedin" />
          <img src="src/assets/icons/github.svg" alt="Github" />
        </div>
      </div>
    </styled.Container>
  );
};
