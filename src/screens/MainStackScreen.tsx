import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { ROUTES } from '../constants';
import { Home } from './Home';
import { ColorPalette } from './ColorPalette';

const MainStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name={ROUTES.home} component={Home} />
      <MainStack.Screen
        name={ROUTES.colorPalette}
        component={ColorPalette}
        options={({ route }) => ({ title: route.params.paletteName })}
      />
    </MainStack.Navigator>
  );
}

export { MainStackScreen };
