import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Stacks from './routes';

export default function Routers() {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}
