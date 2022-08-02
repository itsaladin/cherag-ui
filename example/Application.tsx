import { loadAsync } from 'expo-font';
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import App from './src/App';

export default function Application() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        await loadAsync({
          ...AntDesign.font,
          ...Entypo.font,
          ...EvilIcons.font,
          ...Feather.font,
          ...FontAwesome.font,
          ...FontAwesome5.font,
          ...Fontisto.font,
          ...Foundation.font,
          ...Ionicons.font,
          ...MaterialCommunityIcons.font,
          ...MaterialIcons.font,
          ...Octicons.font,
          ...SimpleLineIcons.font,
          ...Zocial.font,
        });
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  });

  if (isLoading) {
    return null;
  }

  return <App />;
}
