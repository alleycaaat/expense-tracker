import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ManageExp from './screens/ManageExp';
import AllExp from './screens/AllExp';
import RecentExp from './screens/RecentExp';
import { GlobalStyles } from './constants/styles';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function ExpOverview() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary },
        tabBarActiveTintColor: GlobalStyles.colors.darkestaccent,
        tabBarInactiveTintColor: GlobalStyles.colors.darkest
      }}>
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
        <Stack.Navigator>
          <Stack.Screen name='ExpensesOverview'
            component={ExpOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen name='ManageExpenses' component={ManageExp} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
