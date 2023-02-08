// Base
import React from 'react';
import './Version.stories.scss';

// Config
export default {
  title: 'Versión|Releases'
};

export const Info = (): JSX.Element => (
  <>
    <h1>Versión Obelisco 1.46.0</h1>
    <p>
      Acceso al release:{' '}
      <a
        className="access"
        target="_blank"
        href="https://github.com/gcba/Obelisco/releases/tag/v1.46.0"
        rel="noreferrer">
        Github
      </a>
    </p>
  </>
);

Info.story = {
  name: '1.46.0'
};