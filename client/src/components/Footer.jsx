import React, { memo } from 'react';
import styled from 'styled-components';

const Footer = memo(() => {
  return (
    <FooterContainer>
      <FooterText>Copyright © 잇츠미 It's me</FooterText>
    </FooterContainer>
  );
});

const FooterContainer = styled.div`
  bottom: 4vh;
  position: fixed;
`;

const FooterText = styled.div`
  color: #293241;
  font-size: 14px;
  font-weight: 600; 
`;

export default Footer;