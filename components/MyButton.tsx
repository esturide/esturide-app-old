import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

interface MyButtonProps {
  label: string
}

export const MyButton = ({ label }: MyButtonProps) => {
    return (
      <Button title={label}/>
    )
}