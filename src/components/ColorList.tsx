import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

import { ColorBox } from './ColorBox';
import { Color } from '../types';

type Props = {
  data: Color[];
};

function ColorList({ data }: Props) {
  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={({ item }) => <ColorBox {...item} />}
      keyExtractor={(_, index) => String(index)}
      ListHeaderComponent={<Text style={styles.title}>Main colors</Text>}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export { ColorList };
