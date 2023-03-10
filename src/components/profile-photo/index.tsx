import * as styled from "./styled";

export const ProfilePhoto = () => {
  return (
    <styled.Container>
      <div className="limiter">
        <img src="static/photos/profile.png" alt="Foto de perfil" />
        <div className="background"></div>
      </div>
    </styled.Container>
  );
};
