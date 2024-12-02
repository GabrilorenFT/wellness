import {useColorScheme} from 'react-native';

import {colors} from "../assets";

export const getColor = (hash) => {

  const isDarkMode = useColorScheme() === "dark";
  const theme = isDarkMode ? "dark" : "light";

  const themeColors = {
    "background": true,
    "box-background": true,
    "box-border-color": true,
    "font-color": true,
    "primary": true,
    "primary-light": true,
    "primary-dark": true,
    "button-color": true,
  };

  return themeColors[hash] ? colors[theme][hash] : colors[hash];
};