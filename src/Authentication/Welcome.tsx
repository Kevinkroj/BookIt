import {useApp} from '@realm/react';
import React, {useCallback, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  SafeAreaView,
  ImageBackground,
  Platform,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
import Realm from 'realm';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Welcome = ({navigation}) => {
  const [isRegisterScreen, setIsRegisterScreen] = useState(false);
  const [isLoginScreen, setIsLoginScreen] = useState(false);
  const [isWelcomeScreen, setIsWelcomeScreen] = useState(true);

  const navigateToLogin = () => {
    setIsWelcomeScreen(false);
    setIsLoginScreen(true);
  };

  const navigateToRegister = () => {
    setIsWelcomeScreen(false);
    setIsRegisterScreen(true);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const app = useApp();

  const signIn = useCallback(async () => {
    const creds = Realm.Credentials.emailPassword(email, password);
    await app.logIn(creds);
  }, [app, email, password]);

  const onPressSignIn = useCallback(async () => {
    try {
      await signIn();
    } catch (error: any) {
      Alert.alert(`Failed to sign in: ${error?.message}`);
    }
  }, [signIn]);

  const onPressSignUp = useCallback(async () => {
    try {
      await app.emailPasswordAuth.registerUser({email, password});
      await signIn();
    } catch (error: any) {
      Alert.alert(`Failed to sign up: ${error?.message}`);
    }
  }, [signIn, app, email, password]);

  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      {isWelcomeScreen && (
        <ImageBackground
          style={styles.logoImage}
          source={require('../images/logo.png')}>
          <View style={styles.halfBottomView}>
            <TouchableOpacity style={styles.button} onPress={navigateToLogin}>
              <View>
                <Text style={styles.textButton}>Log In</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={navigateToRegister}>
              <View>
                <Text style={styles.textButton}>Register</Text>
              </View>
            </TouchableOpacity>
            <Text style={{color: '#ffc045', marginTop: 5}}>
              Terms & Conditions
            </Text>

            <View
              style={{
                flexDirection: 'row',
                top: 50,
              }}>
              <View style={styles.imageContainer}>
                <Image
                  style={{height: 60, width: 60}}
                  source={require('../images/insta.png')}
                />
              </View>
              <View style={styles.imageContainer}>
                <Image
                  style={{height: 60, width: 60}}
                  source={require('../images/linkedin.png')}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      )}

      {isLoginScreen && (
        <View style={{height: '100%', backgroundColor: 'white'}}>
          <ImageBackground
            style={styles.logoImage}
            source={require('../images/logo.png')}>
            <MaterialCommunityIcons
              onPress={() => {
                setIsWelcomeScreen(true);
                setIsLoginScreen(false);
                setIsRegisterScreen(false);
              }}
              style={{position: 'absolute', top: 40, left: 20}}
              name="keyboard-backspace"
              size={30}
              color="#ffc045"
            />
            <View style={styles.halfBottomView}>
              <Text
                style={{
                  fontSize: 20,
                  color: '#ffc045',
                  alignSelf: 'baseline',
                  marginLeft: 40,
                  marginBottom: 20,
                }}>
                LOGIN
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 25,
                }}>
                <MaterialCommunityIcons
                  opacity={0.7}
                  name="email"
                  size={30}
                  color="#ffc045"
                  style={{marginBottom: 10, marginRight: 5}}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Enter Email"
                  onChangeText={setEmail}
                  value={email}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 25,
                }}>
                <MaterialCommunityIcons
                  opacity={0.7}
                  name="form-textbox-password"
                  size={30}
                  color="#ffc045"
                  style={{marginBottom: 10, marginRight: 5}}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Enter Password"
                  onChangeText={setPassword}
                  value={password}
                />
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => onPressSignIn()}>
                <View>
                  <Text style={styles.textButton}>Log In</Text>
                </View>
              </TouchableOpacity>

              <Text
                onPress={() => {
                  setIsWelcomeScreen(false);
                  setIsLoginScreen(false);
                  setIsRegisterScreen(true);
                }}
                style={{color: '#ffc045', marginTop: 5}}>
                Don't have an Account? Register Now.
              </Text>
            </View>
          </ImageBackground>
        </View>
      )}

      {isRegisterScreen && (
        <View style={{height: '100%', backgroundColor: 'white'}}>
          <ImageBackground
            style={styles.logoImage}
            source={require('../images/logo.png')}>
            <MaterialCommunityIcons
              onPress={() => {
                setIsWelcomeScreen(true);
                setIsLoginScreen(false);
                setIsRegisterScreen(false);
              }}
              style={{position: 'absolute', top: 40, left: 20}}
              name="keyboard-backspace"
              size={30}
              color="#ffc045"
            />
            <View style={styles.halfBottomView}>
              <Text
                style={{
                  fontSize: 20,
                  color: '#ffc045',
                  alignSelf: 'baseline',
                  marginLeft: 40,
                  marginBottom: 20,
                }}>
                REGISTER
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 25,
                }}>
                <MaterialCommunityIcons
                  opacity={0.7}
                  name="email"
                  size={30}
                  color="#ffc045"
                  style={{marginBottom: 10, marginRight: 5}}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Enter Email"
                  onChangeText={setEmail}
                  value={email}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 25,
                }}>
                <MaterialCommunityIcons
                  opacity={0.7}
                  name="form-textbox-password"
                  size={30}
                  color="#ffc045"
                  style={{marginBottom: 10, marginRight: 5}}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Enter Password"
                  onChangeText={setPassword}
                  value={password}
                />
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => onPressSignUp()}>
                <View>
                  <Text style={styles.textButton}>Continue</Text>
                </View>
              </TouchableOpacity>

              <Text
                onPress={() => {
                  setIsWelcomeScreen(false);
                  setIsLoginScreen(true);
                  setIsRegisterScreen(false);
                }}
                style={{color: '#ffc045', marginTop: 5}}>
                Already have An Account? Log In.
              </Text>
            </View>
          </ImageBackground>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textButton: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
  },

  input: {
    height: 40,
    borderColor: 'gray',
    paddingHorizontal: 10,
    width: 250,
    borderBottomWidth: 1,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#ffc045',
    borderRadius: 20,
    height: 40,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,

    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  imageContainer: {
    backgroundColor: 'white',
    borderRadius: 13,
    marginHorizontal: 20,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  logoImage: {
    alignSelf: 'flex-start',
    width: '110%',
    height: '80%',
    resizeMode: 'contain',
  },
  halfBottomView: {
    width: '90%',
    height: '150%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});

export default Welcome;
