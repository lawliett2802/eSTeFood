import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  Account,
  AddResep,
  Discover,
  EditResep,
  ResepDetail,
  SplashScreen,
  Login,
  Register,
} from './src/screens';
import Home from './src/screens/Home';
import {Book1, User} from 'iconsax-react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FF5757',
        tabBarStyle: {
          paddingBottom: 10,
          paddingTop: 10,
          height: 60,
        },
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Resep',
          tabBarIcon: ({focused, color}) => (
            <Book1
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Akun',
          tabBarIcon: ({focused, color}) => (
            <User
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
        }}
        name="Account"
        component={Account}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          options={{headerShown: false}}
          name="BottomTab"
          component={BottomTab}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Discover"
          component={Discover}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AddResep"
          component={AddResep}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="EditResep"
          component={EditResep}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ResepDetail"
          component={ResepDetail}
        />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
