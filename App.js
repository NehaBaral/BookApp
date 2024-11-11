import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import BorrowedBookScreen from './src/screen/borrowedBook';
import BookListScreen from './src/screen/bookList';
import BookDetailScreen from './src/screen/bookDetail';
import { createStackNavigator } from '@react-navigation/stack';
import { BookProvider } from './src/BookProvider';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

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
    <BookProvider>
    <NavigationContainer >
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'purple',
          tabBarInactiveTintColor: 'gray',
          headerTitleAlign: 'left',
          tabBarIcon: ({ focused }) => {
            let iconName;
            let color;
            if (route.name === 'Home') {
              iconName = 'bookshelf'
              color = focused ? 'purple' : 'gray'
            } else {
              iconName = 'book-multiple'
              color = focused ? 'purple' : 'gray'
            }
            return <MaterialCommunityIcons name={iconName} size={24} color={color} />
          }
        })}>
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
    </BookProvider>
  );
}