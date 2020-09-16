import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';

import { Color } from '../types';

type Props = {
  colors: Color[];
  title: string;
  onPress: () => void;
};

function ColorSampleList({ colors, title, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>

        <FlatList
          data={colors.slice(0, 5)}
          horizontal
          keyExtractor={(item) => item.hexCode}
          renderItem={({ item: color }) => (
            <View
              key={color.hexCode}
              style={[styles.colorBox, { backgroundColor: color.hexCode }]}
            />
          )}
        />
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
