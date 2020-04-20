import React from 'react';
import { AUTHOR, DESCRIPTION, SITE_URL } from '~/constants';
import { Wrapper } from './styled';

import image from '../../resources/images/bobby.jpg';

const Bio = () => (
  <Wrapper>
    <a
      href={SITE_URL}
      target="_blank"
      rel="noreferrer noopener"
    >
      <img
        src={image}
        width="48"
        height="48"
        alt=""
      />
      <span>
        {AUTHOR}
        <br />
        <small>
          {DESCRIPTION}
        </small>
      </span>
    </a>
  </Wrapper>
);

export default Bio;
