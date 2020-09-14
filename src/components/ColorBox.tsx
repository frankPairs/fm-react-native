import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  name: string;
  hexCode: string;
};

function ColorBox({ name, hexCode }: Props) {
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
      <Text style={boxColorStyles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    marginBottom: 10,
  },
});

export { ColorBox };