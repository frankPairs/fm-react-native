import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Switch,
  Alert,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { COLORS, ROUTES } from '../constants';
import { Color } from '../types';

function ColorPaletteModal() {
  const [paletteName, setPaletteName] = useState('');
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const navigation = useNavigation();

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
    if (!paletteName) {
      Alert.alert('Validation error', 'You have to define a palette name');
      return;
    }

    if (selectedColors.length < 3) {
      Alert.alert('Validation error', 'You have to select at least 3 colors');
      return;
    }

    navigation.navigate(ROUTES.home, {
      newColorPalette: {
        id: '123',
        paletteName,
        colors: COLORS.filter((color) =>
          selectedColors.includes(color.hexCode),
        ),
      },
    });
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.inputLabel}>Name of the color palette</Text>
        <TextInput
          style={styles.input}
          value={paletteName}
          onChangeText={handlePaletteNameChange}
        />
      </View>
      <FlatList
        style={styles.list}
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
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  list: {
    marginVertical: 20,
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
  button: {
    height: 40,
    backgroundColor: 'teal',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export { ColorPaletteModal };
