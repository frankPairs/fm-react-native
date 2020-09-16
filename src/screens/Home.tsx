import React from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ColorSampleList } from '../components';
import {
  SOLARIZED_COLORS,
  FRONTEND_MASTERS_COLORS,
  RAINBOW_COLORS,
  ROUTES,
} from '../constants';

const colorPalettes = [
  { title: 'Solarized', colors: SOLARIZED_COLORS },
  { title: 'Frontend Masters', colors: FRONTEND_MASTERS_COLORS },
  { title: 'Raibow Colors', colors: RAINBOW_COLORS },
];

function Home() {
  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        data={colorPalettes}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <ColorSampleList
            {...item}
            onPress={() => {
              navigation.navigate(ROUTES.colorPalette, {
                paletteName: item.title,
                colors: item.colors,
              });
            }}
          />
        )}
      />
    </View>
  );
}

export { Home };
