import React, { useState } from 'react'
import { View, StyleSheet, Button, TextInput } from 'react-native'
import * as Speech from 'expo-speech'

export default function App() {
  const [text, setText] = useState('')

  const speak = () => {
    //const thingToSay = 'hello'
    Speech.speak(text)
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="text"
        value={text}
        onChangeText={(text) => setText(text)}
        style={{ borderWidth: 1, height: 50, marginBottom: 50 }}
      />
      <Button title="Press to hear text" onPress={speak} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
