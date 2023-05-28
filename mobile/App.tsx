import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className='bg-zinc-900 flex-1 items-center justify-center'>
      <Text className='text-zinc-200 text-4xl font-bold'>
        Privet Masha
      </Text>
      <StatusBar style="light" translucent />
    </View>
  );
}


