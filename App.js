import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import BorrowedBookScreen from './src/screen/borrowedBook';
import BookListScreen from './src/screen/bookList';
import BookDetailScreen from './src/screen/bookDetail';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackNavigation = () =>{
  return(<Stack.Navigator>
    <Stack.Screen 
    name='BookList'
    component={BookListScreen}
    />

    <Stack.Screen
    name='BookDetail'
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
        component={BorrowedBookScreen}
        />
      </Tab.Navigator>
      
    </NavigationContainer>
  );
}