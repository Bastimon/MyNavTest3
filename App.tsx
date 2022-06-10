/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RNPickerSelect from 'react-native-picker-select';
import {Button} from '@react-native-material/core';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {BottomNavigation} from 'react-native-paper';
import {Icon} from '@react-native-material/core';

function SettingsScreen() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
      }}>
      <View style={styles.container}>
        <RNPickerSelect
          onValueChange={value => console.log(value)}
          placeholder={{
            label: 'Wähle eine Zutaten-Art...',
            value: null,
          }}
          items={[
            {label: 'Proteinquelle', value: 'proteinquelle'},
            {label: 'Kohlenhydrate', value: 'kohlenhydrate'},
            {label: 'Gemüse', value: 'gemüse'},
            {label: 'Gewürze', value: 'gewürze'},
            {label: 'Sauce', value: 'sauce'},
          ]}
        />
        <TextInput
          placeholder="placeholder"
          style={styles.inputBasic}></TextInput>
        <TextInput
          placeholder="placeholder"
          style={styles.inputBasic}></TextInput>
        <TextInput
          placeholder="placeholder"
          style={styles.inputBasic}></TextInput>
        <TextInput
          placeholder="placeholder"
          style={styles.inputBasic}></TextInput>
      </View>
    </View>
  );
}

function HomeScreen() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.containerz}>
      <Button title="Click Me" style={{alignSelf: 'center'}} />
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

// const wambo = () => (
//   <>
//     <Icon name="home" size={24} color="red" />
//   </>
// );

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        style={{backgroundColor: 'tomato'}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => <Icon name="home" size={24} color="red" />,
          }}
        />
        <Tab.Screen name="Neue Zutat" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  containerz: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    width: 197,
    height: 74,
    position: 'absolute',
    backgroundColor: '#E6E6E6',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 33,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.35,
    shadowRadius: 0,
    left: 1,
    top: 0,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    padding: 16,
  },
  inputBasic: {
    marginVertical: 8,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#cdcdcd',
    paddingHorizontal: 12,
    height: 54,
  },
  inputMask: {
    fontSize: 18,
  },
  inputMaskContainer: {
    borderColor: '#cdcdcd',
    height: 54,
    marginVertical: 8,
    paddingHorizontal: 12,
    justifyContent: 'center',
    borderWidth: 1,
  },
  label: {
    fontSize: 18,
  },
  screenContainer: {
    flex: 1,
  },
  neuesRezept: {
    position: 'absolute',
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 25,
    textAlign: 'center',
    width: 199,
    height: 74,
    top: 19,
    left: 0,
  },
  buttonStack: {
    width: 199,
    height: 93,
    marginTop: 324,
    marginLeft: 79,
  },
});

export default App;
