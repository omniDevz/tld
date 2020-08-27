import React from 'react';

import { FiInstagram, FiLinkedin } from 'react-icons/fi';
import { ImWhatsapp } from 'react-icons/im';

import {
  FooterWrapper,
  ListSocialMedia,
  SocialMedia,
  LinkExternal,
  Description,
} from './styled';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <ListSocialMedia>
        <SocialMedia>
          <LinkExternal
            target="_blank"
            href="https://api.whatsapp.com/send?phone="
            title="Entre em contato pelo whatsapp"
          >
            <ImWhatsapp size={40} />
          </LinkExternal>
        </SocialMedia>
        <SocialMedia>
          <LinkExternal
            target="_blank"
            href="#"
            title="Siga a gente no instagram"
          >
            <FiInstagram size={40} />
          </LinkExternal>
        </SocialMedia>
        <SocialMedia>
          <LinkExternal target="_blank" href="#" title="Conecte pelo linkedIn">
            <FiLinkedin size={40} />
          </LinkExternal>
        </SocialMedia>
      </ListSocialMedia>
      <Description lang="en">
        &copy;copyright {new Date().getFullYear()}
      </Description>
    </FooterWrapper>
  );
};

export default Footer;
