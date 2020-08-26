import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://avatars0.githubusercontent.com/u/66399640?v=4"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Wagner Barboza</h1>
        <h2>Software Engineer &copy; WCFX</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">18.699</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">33.699</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
