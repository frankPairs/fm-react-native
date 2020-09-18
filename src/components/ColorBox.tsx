import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Color } from '../types';

type Props = Color;

function ColorBox({ colorName, hexCode }: Props) {
  const boxColorStyles = StyleSheet.create({
    container: {
      backgroundColor: hexCode,
    },
    text: {
      color:
        parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
          ? 'black'
          : 'white',
      fontWeight: 'bold',
    },
  });

  return (
    <View style={[styles.container, boxColorStyles.container]}>
      <Text style={boxColorStyles.text}>{colorName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    height: 35,
  },
});

export { ColorBox };
