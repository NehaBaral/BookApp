import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import BorrowedScreen from './src/screen/BorrowedScreen';
import BookListScreen from './src/screen/BookListScreen';
import BookDetailScreen from './src/screen/BookDetailScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackNavigation = () =>{
  return(<Stack.Navigator>
    <Stack.Screen 
    name='Book List'
    component={BookListScreen}
    />

    <Stack.Screen
    name='Book Detail'
    component={BookDetailScreen}
    />
  </Stack.Navigator>)
}

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator>
        <Tab.Screen 
        name='Home'
        component={HomeStackNavigation}
        options={{headerShown : false}}
        />

        <Tab.Screen 
        name='Borrowed'
        component={BorrowedScreen}
        />
      </Tab.Navigator>
      
    </NavigationContainer>
  );
}