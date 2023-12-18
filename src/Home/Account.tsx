import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  SafeAreaView,
  ImageBackground,
  Platform,
} from 'react-native';

const Account = ({navigation}) => {
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'black', fontSize: 20}}>Account PAGE</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Account;
