import React from 'react'
import Home from "./src/screen/Home"
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Home />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App