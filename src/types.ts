type Color = {
  colorName: string;
  hexCode: string;
};

type ColorPalette = {
  id: number;
  paletteName: string;
  colors: Color[];
};

type RootStackParamList = {
  ColorPalette: { paletteName: string; colors: Color[] };
};

type RequestStatus = {
  isLoading: boolean;
  err: null | 'string';
  data: null | any;
};

export { Color, ColorPalette, RootStackParamList, RequestStatus };
