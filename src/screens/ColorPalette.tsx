import React from 'react';
import { View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { ColorList } from '../components';
import { RootStackParamList } from '../types';

type Props = StackScreenProps<RootStackParamList, 'ColorPalette'>;

function ColorPalette({ route }: Props) {
  const { colors } = route.params;

  return (
    <View>
      <ColorList data={colors} />
    </View>
  );
}

export { ColorPalette };
