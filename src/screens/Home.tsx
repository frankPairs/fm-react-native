import React, { useEffect } from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

import { ColorSampleList } from '../components';
import { ROUTES } from '../constants';
import { useGetPalettes } from '../hooks/effects/network';
import { RootStackParamList } from '../types';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

function Home({ route }: Props) {
  const navigation = useNavigation();
  const [getPalettes, { isLoading, data, err }] = useGetPalettes();
  const newColorPalette = route.params ? route.params.newColorPalette : null;

  useEffect(() => {
    getPalettes();
  }, []);

  if (isLoading) {
    return (
      <View>
        <Text>loading...</Text>
      </View>
    );
  }

  if (err) {
    return (
      <View>
        <Text>Something wrong happened</Text>
      </View>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <View>
      <FlatList
        data={newColorPalette === null ? data : [newColorPalette, ...data]}
        keyExtractor={(item) => item.paletteName}
        refreshing={isLoading}
        onRefresh={getPalettes}
        renderItem={({ item }) => (
          <ColorSampleList
            {...item}
            onPress={() => {
              navigation.navigate(ROUTES.colorPalette, {
                paletteName: item.paletteName,
                colors: item.colors,
              });
            }}
          />
        )}
        ListHeaderComponent={
          <TouchableOpacity
            onPress={() => navigation.navigate('ColorPaletteModal')}
          >
            <Text style={styles.link}>Add new color palette</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    color: '#00A0B0',
    fontSize: 22,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    margin: 10,
  },
});

export { Home };
