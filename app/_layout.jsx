import { Stack, useRouter } from "expo-router";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  Animated,
  Dimensions,
  Modal,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState, useRef } from "react";

export default function RootLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
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
    <>
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
            headerBackVisible: false,
            gestureEnabled: false,
            headerTitle: () => {
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
                </View>
              );
            },
          }}
        />
      </Stack>

      {/* Menu como Modal separado - SOLUÇÃO 1 (Recomendada) */}
      <Modal
        visible={menuOpen}
        transparent={true}
        animationType="none"
        onRequestClose={toggleMenu}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
          activeOpacity={1}
          onPress={toggleMenu}
        >
          <Animated.View
            style={{
              position: "absolute",
              top: StatusBar.currentHeight + 60, // Ajuste conforme a altura do header
              left: 0,
              minWidth: 250,
              backgroundColor: "#F96380",
              transform: [{ translateX: slideAnim }],
              paddingVertical: 40,
              paddingHorizontal: 20,
              borderRadius: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 8,
              elevation: 20, // Aumentado para Android
            }}
          >
            <TouchableOpacity
              onPress={toggleMenu}
              style={{ alignSelf: "flex-end", marginBottom: 10 }}
            >
              <Ionicons name="close-outline" size={30} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                router.push("/login");
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
                router.push("/register");
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
                router.push("/profile");
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
        </TouchableOpacity>
      </Modal>
    </>
  );
}
