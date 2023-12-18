import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Welcome from './src/Authentication/Welcome';

import Home from './src/Home/HomePage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Account from './src/Home/Account';
import {AppProvider, UserProvider} from '@realm/react';
import app from './src/Realm/RealmCostants';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Profili} from './src/Realm/CarouselSchema';
import {realmContext} from './src/Realm/RealmContes';
import RestaurantView from './src/Restaurant/RestaurantView';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const {RealmProvider} = realmContext;

const AppWrapper = () => {
  return (
    <AppProvider
      id={'application-0-tvbfw'}
      baseUrl={'https://realm.mongodb.com'}>
      <UserProvider fallback={Welcome}>
        <App />
      </UserProvider>
    </AppProvider>
  );
};

const CustomHeader = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        marginTop: 50,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Kevin Kroj</Text>
      <View
        style={{
          alignContent: 'flex-end',
          alignItems: 'flex-end',
          alignSelf: 'flex-end',
          flexDirection: 'row',
        }}>
        <MaterialIcons
          // style={}
          name="search"
          size={30}
          color="gold"
        />
        <MaterialIcons
          style={{marginLeft: 10}}
          name="account-circle"
          size={30}
          color="gold"
        />
      </View>
    </View>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HomeTab') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Account') {
            iconName = focused ? 'user' : 'user';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#ffc045',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          header: () => <CustomHeader />,
        }}
      />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

const LoadingIndicator = () => {
  return (
    <View style={styles.activityContainer}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const App = () => {
  return (
    <>
      <RealmProvider
        schema={[Profili]}
        sync={{
          flexible: true,
        }}
        fallback={LoadingIndicator}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="Welcome" component={Welcome} />
              <Stack.Screen name="Home" component={BottomTabNavigator} />
              <Stack.Screen name="Restaurant" component={RestaurantView} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </RealmProvider>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  activityContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default AppWrapper;
