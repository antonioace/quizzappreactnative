import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import FormInput from "../../../components/FormInput";
import CustomButton from "../../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

import SpinnerScreen from "../../../components/SpinnerScreen";

const RegisterPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [cargando, setCargando] = useState(false);

  const navigate = useNavigation();

  const onSubmit = (data) => {
    // Implementa aquí la lógica de registro
    console.log(data);
  };
  const handleGoToLogin = () => {
    // Implementa aquí la lógica para ir al formulario de inicio de sesión
    navigate.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <FormInput
        control={control}
        name="name"
        placeholder="Nombre"
        rules={{
          required: {
            value: true,
            message: "El nombre es requerido",
          },
        }}
        containerStyle={{
          marginTop: 20,
        }}
        style={styles.input}
      />
      <FormInput
        control={control}
        name="email"
        placeholder="Correo electrónico"
        rules={{
          required: {
            value: true,
            message: "El campo es requerido",
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Correo electrónico inválido",
          },
        }}
        containerStyle={{
          marginTop: 20,
        }}
        style={styles.input}
      />

      <FormInput
        control={control}
        name="celular"
        placeholder="Ingresa el número de celular"
        rules={{
          required: { value: true, message: "El celular es requerido" },
          minLength: {
            value: 10,
            message: "El celular debe contener 10 dígitos",
          },
          maxLength: {
            value: 10,
            message: "El celular debe contener 10 dígitos",
          },
          pattern: {
            value: /^\d+$/,
            message: "El celular debe contener solo números",
          },
        }}
        containerStyle={{
          marginTop: 20,
        }}
        style={styles.input}
      />

      <FormInput
        control={control}
        name="password"
        placeholder="Contraseña"
        rules={{
          required: {
            value: true,
            message: "La contraseña es requerida",
          },
          minLength: {
            value: 6,
            message: "La contraseña debe contener al menos 6 caracteres",
          },
        }}
        containerStyle={{
          marginTop: 20,
        }}
        style={styles.input}
        secureTextEntry={true}
      />

      <CustomButton
        onPress={handleSubmit(onSubmit)}
        title={"Registrarse"}
        buttonStyle={{
          width: "100%",
          marginTop: 20,
          backgroundColor: "#d1d1d1",
          padding: 15,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
        }}
        textStyle={{
          fontWeight: "bold",
        }}
      />
      <CustomButton
        onPress={handleGoToLogin}
        title={"Volver al inicio de sesión"}
        buttonStyle={{
          width: "100%",
          marginTop: 10,
          backgroundColor: "#f0f0f0",
          padding: 15,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
        }}
        textStyle={{
          fontWeight: "bold",
          color: "#333",
        }}
      />
      {false && <SpinnerScreen />}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  containerForm: {
    marginTop: 20,
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
  errorText: {
    color: "red",
    marginBottom: 12,
  },
});

export default RegisterPage;
