type Color = {
  name: string;
  hexCode: string;
};

type RootStackParamList = {
  ColorPalette: { paletteName: string; colors: Color[] };
};

export { Color, RootStackParamList };
