import React from 'react';
import {Alert, Pressable, Text,} from 'react-native';
import {styles} from '@/styles/ButtonAlert'

interface MyButtonProps {
  label: string
}

export const ButtonAlert = ({label}: MyButtonProps) => {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  return (
    <Pressable style={styles.button} onPress={createTwoButtonAlert}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  )
}
