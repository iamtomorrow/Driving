
import React from 'react';
import { Navigator } from './src/navigator/Navigator';
import { NavigationContextProvider } from './contexts/Context.Navigation';

export default function App() {
  return (
    <NavigationContextProvider>
      <Navigator />
    </NavigationContextProvider>
  );
}
