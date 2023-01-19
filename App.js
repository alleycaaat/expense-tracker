import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from './constants/styles';

import ManageExp from './screens/ManageExp';
import AllExp from './screens/AllExp';
import RecentExp from './screens/RecentExp';
import IconBtn from './components/UI/IconBtn';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function ExpOverview() {
  return (
    <Tabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary },
        tabBarActiveTintColor: GlobalStyles.colors.darkestaccent,
        tabBarInactiveTintColor: GlobalStyles.colors.darkest,
        headerRight: () =>
          <IconBtn
            icon='add'
            size={31}
            color={GlobalStyles.colors.darkest}
            onPress={() => { navigation.navigate('ManageExp'); }}
          />
      })}>
      <Tabs.Screen
        name='RecentExpenses'
        component={RecentExp}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) =>
            <Ionicons
              name='hourglass'
              size={size}
              color={color} />
        }}
      />
      <Tabs.Screen
        name='AllExp'
        component={AllExp}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({ color, size }) =>
            <Ionicons
              name='calendar'
              size={size}
              color={color} />
        }}
      />
    </Tabs.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary },
            headerTintColor: 'white',
          }}>
          <Stack.Screen
            name='ExpOverview'
            component={ExpOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='ManageExp'
            component={ManageExp}
            options={{
              presentation: 'modal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}