import React, { useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ColorSampleList } from '../components';
import { ROUTES } from '../constants';
import { useGetPalettes } from '../hooks/effects/network';

function Home() {
  const navigation = useNavigation();
  const [getPalettes, { isLoading, data, err }] = useGetPalettes();

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
        data={data}
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
      />
    </View>
  );
}

export { Home };
