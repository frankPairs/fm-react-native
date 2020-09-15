import React from 'react';
import { View } from 'react-native';

import { ColorSampleList } from '../components';
import {
  SOLARIZED_COLORS,
  FRONTEND_MASTERS_COLORS,
  RAINBOW_COLORS,
} from '../constants';

function Home() {
  return (
    <View>
      <ColorSampleList title="Solarized" colors={SOLARIZED_COLORS} />

      <ColorSampleList
        title="Frontend Masters"
        colors={FRONTEND_MASTERS_COLORS}
      />

      <ColorSampleList title="Rainbow Colors" colors={RAINBOW_COLORS} />
    </View>
  );
}

export { Home };
