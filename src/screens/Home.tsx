import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { ROUTES } from '../constants';

type Props = {
  navigation: StackNavigationProp<any, 'Home'>;
};

function Home({ navigation }: Props) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ROUTES.colorPalette);
        }}
      >
        <Text>Color Pallete App</Text>
      </TouchableOpacity>
    </View>
  );
}

export { Home };
