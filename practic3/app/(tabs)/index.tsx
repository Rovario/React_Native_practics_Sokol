import React, { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [isDark, setIsDark] = useState(false);

  const lightTheme = {
    bg: '#ffffff',
    text: '#000000',
    button: '#6200ee',
    buttonText: '#ffffff'
  };

  const darkTheme = {
    bg: '#121212',
    text: '#ffffff',
    button: '#bb86fc',
    buttonText: '#000000'
  };

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.text }]}>
          {isDark ? ' Темна тема' : ' Світла тема'}
        </Text>

        <Pressable
          style={[styles.button, { backgroundColor: theme.button }]}
          onPress={() => setIsDark(!isDark)}
        >
          <Text style={[styles.buttonText, { color: theme.buttonText }]}>
            Змінити тему
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
  },
});