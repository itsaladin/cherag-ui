import { loadAsync } from 'expo-font';
import React, { useEffect, useState } from 'react';
import App from './src/App';

export default function Application() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadAsync({
      'material-community': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf'),
    }).then(() => setIsLoading(false));
  });

  return <App />;
}
