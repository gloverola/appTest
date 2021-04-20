import {useNavigation, useFocusEffect} from '@react-navigation/native';
import axios from 'axios';
import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ActivityIndicator,
} from 'react-native';
import env from '../config/env';
import register from '../context/authActions';
import {GlobalContext} from '../context/authContext';

const Register = ({navigation}) => {
  const [form, setForm] = useState({});
  const [formError, setFormError] = useState(null);
  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);
  const {navigate} = useNavigation();

  const handleInputChange = ({name, value}) => {
    setForm({...form, [name]: value, role: 'user'});
  };

  /**
   * handle Submit
   */
  const handleSubmit = () => {
    //Validation
    const {email, phone, name, state, password} = form;
    if (!email || !phone || !name || !state || !password) {
      setFormError(true);
    } else {
      setFormError(false);
      console.log('@handleSubmit >>>', form);
      console.log(error);
      register(form)(authDispatch);
    }
  };

  const showPasswordError = () => {
    return (
      <Text>
        Password must be at least 8 characters, and must contain at least 1
        letter and 1 number
      </Text>
    );
  };

  useEffect(() => {
    if (data !== null) {
      navigate('Login');
    }
  }, [data]);

  console.log('@userData >>>', data);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text>Email</Text>
        <TextInput
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          onChangeText={(value) => handleInputChange({name: 'email', value})}
        />

        <Text>Phone</Text>
        <TextInput
          keyboardType="number-pad"
          style={styles.input}
          onChangeText={(value) => handleInputChange({name: 'phone', value})}
        />

        <Text>Name</Text>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          onChangeText={(value) => handleInputChange({name: 'name', value})}
        />

        <Text>State</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => handleInputChange({name: 'state', value})}
        />

        <Text>Password</Text>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
          secureTextEntry
          style={styles.input}
          onFocus={showPasswordError}
          onChangeText={(value) => handleInputChange({name: 'password', value})}
        />
        <Text>{showPasswordError()}</Text>

        {loading ? (
          <ActivityIndicator size="large" color="#000" />
        ) : (
          <Button title="Register" onPress={handleSubmit} disabled={loading} />
        )}
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
        {formError && <Text>Please fill all fields</Text>}
      </View>
    </View>
  );
};

export default Register;

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
