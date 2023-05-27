import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import { useNavigation } from "@react-navigation/native";

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
const LoginPage = () => {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.containerForm}>
        <View style={styles.containerTitle}>
          <Text style={styles.titleLogin}>Inicio de sesión</Text>
        </View>

        <TextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder="Correo electrónico"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
        />
        <Button title="Iniciar sesión" color="#007bff" />
        <View style={styles.buttonContainer}>
          <Button title="Recuperar contraseña" color="#999" onPress={()=>{
            navigate.navigate("Recovery")
          }} />
          <Button
            title="Registrarse"
            color="#6B3FB2"
            onPress={() => {
              navigate.navigate("Register");
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
    backgroundColor: "#fff",

    borderRadius: 10,
    padding: 20,
  },
  input: {
    height: 50,
    borderColor: "#d1d1d1",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: "#f0f0f0",
  },
  containerForm: {
    margin: 20,
  },
  containerTitle: {
    alignItems: "center",
    marginBottom: 20,
  },
  titleLogin: {
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});

export default LoginPage;
