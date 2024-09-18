import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useTheme } from "../Contexts/ThemeContext";
import ThemeSwitch from "../Customs/SwitchTheme";

const FirstScreen = ({ navigation }) => {
  const { colors, isDarkMode } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.text, { color: colors.text }]}>FirstScreen</Text>
      <View style={styles.buttonContainer}>
        <ThemeSwitch />
      </View>
      <Button
        title="First"
        color={isDarkMode ? "#00008B" : "#ADD8E6"}
        onPress={() => navigation.navigate("SecondScreen")}
      />
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    position: "absolute",
    top: 20, // Üstten uzaklık
    right: 20, // Sağdan uzaklık
  },
});
