import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { Controller } from "react-hook-form";

const FormInput = ({
  control,
  name,
  rules,
  placeholder,
  label,
  style,
  containerStyle,
  isRow,
  secureTextEntry,
  defaultValue,
}) => {
  return (
    <View style={[styles.container, isRow && styles.row, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <Controller
        control={control}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <>
            <TextInput
              style={[styles.input, style, error && styles.errorInput]}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {error && <Text style={styles.errorText}>{error.message}</Text>}
          </>
        )}
        name={name}
        rules={rules}
        defaultValue={defaultValue || ""}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    marginBottom: 8,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  errorInput: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
  },
});

export default FormInput;
