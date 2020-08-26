import React from 'react';


import MobileHeader from '../MobileHeader';
import LeftColumn from '../LeftColumn';
import RightColumn from '../RightColumn';
import MiddleColumn from '../MiddleColumn';

import { Container } from './styles';

const Layout: React.FC = () => {
  return(
    <Container>
      <MobileHeader />


      <main>
        <LeftColumn />
        <MiddleColumn />
        <RightColumn />
      </main>
    </Container>  
  )
}

export default Layout;