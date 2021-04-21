import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
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
import registerUser from '../context/authActions';
import {GlobalContext} from '../context/authContext';
import axios from 'axios';

const Register = ({navigation}) => {
  // const [form, setForm] = useState({});
  const [formError, setFormError] = useState(null);
  const {
    authDispatch,
    authState: {error, loading, userData},
  } = useContext(GlobalContext);
  const {navigate} = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  // const handleInputChange = ({name, value}) => {
  //   setForm({...form, [name]: value, role: 'user'});
  // };

  /**
   * handle Submit
   */

  const onSubmit = (data) => {
    return registerUser(data)(authDispatch);
    //Validation
    // const {email, phone, name, state, password} = form;
    // if (!email || !phone || !name || !state || !password) {
    //   setFormError(true);
    // } else {
    //   setFormError(false);
    //   console.log('@handleSubmit >>>', form);
    //   console.log(error);
    //   register(form)(authDispatch);
    // }
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
    if (userData !== null) {
      navigate('Login');
    }
  }, [userData]);

  console.log('__@userData__', userData);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text>Email</Text>

        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
              value={value}
              onChangeText={(value) => onChange(value)}
            />
          )}
          name="email"
          rules={{required: true}}
          defaultValue=""
        />
        {errors.email && <Text>This is required.</Text>}

        <Text>Phone</Text>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
              value={value}
              onChangeText={(value) => onChange(value)}
            />
          )}
          name="phone"
          rules={{required: true}}
          defaultValue=""
        />
        {errors.phone && <Text>This is required.</Text>}

        <Text>first name</Text>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
              value={value}
              onChangeText={(value) => onChange(value)}
            />
          )}
          name="first_name"
          rules={{required: true}}
          defaultValue=""
        />
        {errors.name && <Text>This is required.</Text>}

        <Text>last name</Text>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
              value={value}
              onChangeText={(value) => onChange(value)}
            />
          )}
          name="last_name"
          rules={{required: true}}
          defaultValue=""
        />
        {errors.name && <Text>This is required.</Text>}

        <Text>State</Text>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
              value={value}
              onChangeText={(value) => onChange(value)}
            />
          )}
          name="state"
          rules={{required: true}}
          defaultValue=""
        />
        {errors.state && <Text>This is required.</Text>}

        <Text>Password</Text>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="default"
              secureTextEntry
              style={styles.input}
              value={value}
              onChangeText={(value) => onChange(value)}
            />
          )}
          name="password"
          rules={{required: true}}
          defaultValue=""
        />
        {errors.password && <Text>This is required.</Text>}
        <Text>{showPasswordError()}</Text>

        {loading ? (
          <ActivityIndicator size="large" color="#000" />
        ) : (
          <Button
            title="Register"
            onPress={handleSubmit(onSubmit)}
            disabled={loading}
          />
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
