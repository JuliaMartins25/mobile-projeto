import { Stack } from "expo-router";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  Animated,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useState, useRef } from "react";

export default function RootLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const slideAnim = useRef(
    new Animated.Value(-Dimensions.get("window").width)
  ).current;

  const toggleMenu = () => {
    if (menuOpen) {
      Animated.timing(slideAnim, {
        toValue: -Dimensions.get("window").width,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setMenuOpen(false));
    } else {
      setMenuOpen(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        title: "Perfil",
        headerStyle: {
          backgroundColor: "#A2D2FF",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="index"
        options={{
          headerLeft: () => null,
          headerTitle: () => {
            const navigation = useNavigation();
            return (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  paddingHorizontal: 20,
                }}
              >
                <TouchableOpacity onPress={toggleMenu}>
                  <Ionicons name="menu-outline" size={30} color="#fff" />
                </TouchableOpacity>
                <Image
                  source={require("../assets/logo.png")}
                  style={{ width: 150, height: 40 }}
                />

                {menuOpen && (
                  <Animated.View
                    pointerEvents="auto"
                    style={{
                      position: "absolute",
                      top: 45,
                      left: 0,
                      minWidth: 200,
                      backgroundColor: "#F96380",
                      transform: [{ translateX: slideAnim }],
                      zIndex: 9999,
                      paddingVertical: 40, // ← AUMENTA para deixar o menu mais alto
                      paddingHorizontal: 20,
                      borderRadius: 10,
                      alignItems: "center",
                      shadowColor: "#000",
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.2,
                      shadowRadius: 6,
                      elevation: 10,
                    }}
                  >
                    <TouchableOpacity
                      onPress={toggleMenu}
                      style={{ alignSelf: "flex-end", marginBottom: 10 }}
                    >
                      <Ionicons name="close-outline" size={30} color="#000" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("login");
                        toggleMenu();
                      }}
                      style={{
                        backgroundColor: "#fff",
                        paddingVertical: 12,
                        paddingHorizontal: 28,
                        borderRadius: 8,
                        marginBottom: 14,
                        alignItems: "center",
                        width: "100%",
                        elevation: 2,
                      }}
                    >
                      <Text
                        style={{
                          color: "#F96380",
                          fontWeight: "bold",
                          fontSize: 16,
                        }}
                      >
                        Login
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("register");
                        toggleMenu();
                      }}
                      style={{
                        backgroundColor: "#fff",
                        paddingVertical: 14,
                        paddingHorizontal: 28,
                        borderRadius: 8,
                        marginBottom: 14,
                        alignItems: "center",
                        width: "100%",
                        elevation: 2,
                      }}
                    >
                      <Text
                        style={{
                          color: "#F96380",
                          fontWeight: "bold",
                          fontSize: 16,
                        }}
                      >
                        Cadastre-se
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("profile");
                        toggleMenu();
                      }}
                      style={{
                        backgroundColor: "#fff",
                        paddingVertical: 12,
                        paddingHorizontal: 28,
                        borderRadius: 8,
                        marginBottom: 14,
                        alignItems: "center",
                        width: "100%",
                        elevation: 2,
                      }}
                    >
                      <Text
                        style={{
                          color: "#F96380",
                          fontWeight: "bold",
                          fontSize: 16,
                        }}
                      >
                        Ir para Perfil
                      </Text>
                    </TouchableOpacity>
                  </Animated.View>
                )}
              </View>
            );
          },
        }}
      />
    </Stack>
  );
}
