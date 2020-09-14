import React from 'react';
import { View } from 'react-native';

import { ColorList } from '../components';
import { COLORS } from '../constants';

function ColorPalette() {
  return (
    <View>
      <ColorList data={COLORS} />
    </View>
  );
}

export { ColorPalette };
