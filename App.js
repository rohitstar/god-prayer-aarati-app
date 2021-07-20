import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AssetExample from './components/AssetExample';
import HomeScreen from './components/HomeScreen';
import HomeScreenSecond from './components/HomeScreenSecond';
import Mantra from './components/Mantra';
import TempleHomeScreen from './components/TempleHomeScreen';
import Temples from './components/Temples';



// function HomeScreening() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#fc802d',
        }}
    >
      <Tab.Screen name="HomeScreen" 
      component={StackScreen} 
      options={{ title: 'आरती',
            tabBarIcon: ({ color, size }) => (
                 <MaterialCommunityIcons
                name="book"
                color={color}
                size={size}
              />
            ),
          style:{ 
            backgroundColor: '#fc802d'
          } 
          }}
      />
      <Tab.Screen name="AssetExample" 
      component={ExampleStackScreen}
      options={{ title: 'मंत्र',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons
                name="hinduism"
                color={color}
                size={size}
              />
            ),
          headerStyle:{ 
            backgroundColor: '#fc802d'
          } 
          }}
       />

       <Tab.Screen name="Temples" 
      component={TempleStackScreen}
      options={{ title: 'मंदिर',
      tabBarIcon: ({ color, size }) => (
            // <Ionicons name="ios-book" color={color} size={size} />
                   <MaterialCommunityIcons
                name="star"
                color={color}
                size={size}
              />
            ),
          headerStyle:{ 
            backgroundColor: '#fc802d'
          } 
          }}
       />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="Aarti Sangrah" 
      component={HomeScreen}
      options={{ title: 'आरती संग्रह',
          headerStyle:{ 
            backgroundColor: '#fc802d'
          } 
          }}
           />
      <Stack.Screen 
      name="AssetExample"
      component={AssetExample}
      options={{ title: 'आरती',
          headerStyle:{ 
            backgroundColor: '#fc802d'
          } 
          }}
       />
    </Stack.Navigator>
  );
}

const ExampleStack = createStackNavigator();

function ExampleStackScreen() {
  return (
    <ExampleStack.Navigator>
      <ExampleStack.Screen 
      name="HomeScreenSecond" 
      component={HomeScreenSecond}
      
      options={{ title: 'मंत्र',
          headerStyle:{ 
            backgroundColor: '#fc802d'
          } 
          }} />
      <ExampleStack.Screen 
      name="Mantra" 
      component={Mantra}
      options={{ title: 'मंत्र',
          headerStyle:{ 
            backgroundColor: '#fc802d'
          } 
          }}  />
    </ExampleStack.Navigator>
  );
}

const TempleStack = createStackNavigator();

function TempleStackScreen() {
  return (
    <TempleStack.Navigator>
    <TempleStack.Screen 
     name="TempleHomeScreen" 
      component={TempleHomeScreen}
      options={{ title: 'मंदिर',
          headerStyle:{ 
            backgroundColor: '#fc802d'
          } 
          }}/>


    <TempleStack.Screen
    name="Temples"
      component={Temples}
      options={{ title: 'मंदिर',
          headerStyle:{ 
            backgroundColor: '#fc802d'
          } 
          }} />

    </TempleStack.Navigator>

  );
}


export default function App() {
  return (
   <NavigationContainer>
        <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});
