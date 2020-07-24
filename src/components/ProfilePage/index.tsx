import React from 'react';

import Feed from '../Feed';
import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Lilian Dias</h1>
        <h2>@diaslilian</h2>

        <p>Developer at <a href="https://gamagestaocriativa.com.br">@GamaCriativa</a> </p>

        <ul>
          <li>
            <LocationIcon />
            Recife, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 25 de maio
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>97</strong>
          </span>
          <span>
            <strong>834 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;
