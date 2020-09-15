import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Color } from '../types';
import { ROUTES } from '../constants';

type Props = {
  colors: Color[];
  title: string;
};

function ColorSampleList({ colors, title }: Props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(ROUTES.colorPalette, {
          paletteName: title,
          colors: colors,
        });
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.colorList}>
          {colors.slice(0, 5).map((color) => (
            <View
              key={color.hexCode}
              style={[styles.colorBox, { backgroundColor: color.hexCode }]}
            />
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginLeft: 10,
  },
  colorList: {
    flexDirection: 'row',
  },
  colorBox: {
    height: 30,
    width: 30,
    marginRight: 10,
    marginEnd: 0,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    textTransform: 'uppercase',
    marginBottom: 10,
  },
});

export { ColorSampleList };
