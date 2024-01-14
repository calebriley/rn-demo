import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

const CustomButton = (props) => {
  const { onPress, title = 'Save' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 0,
    backgroundColor: '#5EA22A',
  },
  text: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default CustomButton;