import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Text } from "react-native";

const RecoveryPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1);

  const handleStep1Submit = () => {
    // Aquí puedes implementar la lógica para enviar el código al correo
    setStep(2);
  };

  const handleStep2Submit = () => {
    // Aquí puedes implementar la lógica para verificar el código y permitir la configuración de una nueva contraseña
    setStep(3);
  };

  const handlePasswordSubmit = () => {
    // Aquí puedes implementar la lógica para guardar la nueva contraseña
    console.log("Contraseña actualizada");
  };

  return (
    <View style={styles.container}>
      {step === 1 && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
          />
          <Button title="Enviar código" onPress={handleStep1Submit} />
        </>
      )}
      {step === 2 && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Código"
            value={code}
            onChangeText={setCode}
          />
          <TextInput
            style={styles.input}
            placeholder="Nueva contraseña"
            value={newPassword}
            onChangeText={setNewPassword}
          />
          <Button
            title="Establecer nueva contraseña"
            onPress={handleStep2Submit}
          />
        </>
      )}
      {step === 3 && (
        <>
          <Text>Contraseña actualizada exitosamente</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
    backgroundColor: "#fff",
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
});

export default RecoveryPasswordPage;
