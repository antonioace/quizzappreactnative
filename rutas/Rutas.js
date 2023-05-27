import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import RecoveryPasswordPage from "../features/auth/pages/RecoveryPasswordPage";
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
function Rutas() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Register" component={RegisterPage}  options={{
          title: 'Registro',
        }}/>
        <Stack.Screen name="Recovery" component={RecoveryPasswordPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Rutas;
