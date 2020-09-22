import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
  Switch,
} from 'react-native';

import { COLORS } from '../constants';
import { Color, ColorPalette } from '../types';

type Props = {
  onSubmit: (colorPalette: ColorPalette) => void;
};

function ColorPaletteModal({ onSubmit }: Props) {
  const [paletteName, setPaletteName] = useState('');
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  function handlePaletteNameChange(value: string) {
    setPaletteName(value);
  }

  function handleColorSelect(color: Color) {
    const index = selectedColors.findIndex(
      (selectedColor) => selectedColor === color.hexCode,
    );

    if (index < 0) {
      setSelectedColors((prevState) => [...prevState, color.hexCode]);
      return;
    }

    setSelectedColors((prevState) => [
      ...prevState.slice(0, index),
      ...prevState.slice(index + 1),
    ]);
  }

  function handleSubmit() {
    onSubmit({
      id: 123,
      paletteName,
      colors: COLORS.filter((color) => selectedColors.includes(color.hexCode)),
    });
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={COLORS}
        keyExtractor={(color) => color.hexCode}
        renderItem={({ item }) => (
          <View style={styles.switchContainer}>
            <Text>{item.colorName}</Text>
            <Switch
              value={selectedColors.includes(item.hexCode)}
              onValueChange={() => handleColorSelect(item)}
            />
          </View>
        )}
        ListHeaderComponent={() => (
          <View>
            <Text style={styles.inputLabel}>Name of the color palette</Text>
            <TextInput
              style={styles.input}
              value={paletteName}
              onChangeText={handlePaletteNameChange}
            />
          </View>
        )}
        ListFooterComponent={() => (
          <Button color="#00A0B0" title="Submit" onPress={handleSubmit} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  inputLabel: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  switchContainer: {
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
  },
});

export { ColorPaletteModal };
