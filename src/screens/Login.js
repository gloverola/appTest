import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text>Email</Text>
        <TextInput keyboardType="email-address" style={styles.input} />

        <Text>Password</Text>
        <TextInput
          keyboardType="default"
          secureTextEntry
          style={styles.input}
        />

        <Button title="Login" />
        <Button
          title="Register"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  wrapper: {
    marginTop: 100,
  },

  input: {
    padding: 15,
    backgroundColor: '#ddd',
    marginBottom: 20,
  },
});
