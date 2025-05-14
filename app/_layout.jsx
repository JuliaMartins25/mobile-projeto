import { Stack } from "expo-router";
import { TouchableOpacity, Text, View, Image, Animated, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useState, useRef } from "react";

export default function RootLayout() {
    const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar o menu
    const slideAnim = useRef(new Animated.Value(-Dimensions.get("window").width)).current; // Animação da sidebar

    const toggleMenu = () => {
        if (menuOpen) {
            // Fechar menu
            Animated.timing(slideAnim, {
                toValue: -Dimensions.get("window").width,
                duration: 300,
                useNativeDriver: true,
            }).start(() => setMenuOpen(false));
        } else {
            // Abrir menu
            setMenuOpen(true);
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    };

    return (
        <Stack screenOptions={{
            headerShown: true,
            title: "Perfil",
            headerStyle: {
                backgroundColor: '#A2D2FF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}>
            <Stack.Screen name="index"
                options={{
                    headerTitle: () => {
                        const navigation = useNavigation();
                        return (
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "100%",
                                paddingHorizontal: 20,
                            }}>
                                <TouchableOpacity onPress={toggleMenu}>
                                    <Ionicons
                                        name="menu-outline"
                                        size={30}
                                        color="#fff"
                                    />
                                </TouchableOpacity>

                                <Image
                                    source={require('../assets/logo.png')}
                                    style={{ width: 150, height: 40 }}
                                />

                                {menuOpen && (
                                    <Animated.View style={{
                                        position: "absolute",
                                        top: 45,
                                        left: -15,
                                        height: "20rem",
                                        width: "10rem",
                                        backgroundColor: "#F96380",
                                        transform: [{ translateX: slideAnim }],
                                        zIndex: 10,
                                        padding: 20,
                                    }}>
                                        <TouchableOpacity onPress={toggleMenu}>
                                            <Ionicons
                                                name="close-outline"
                                                size={30}
                                                color="#000"
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => {
                                            navigation.navigate('profile');
                                            toggleMenu();
                                        }}>
                                            <Text style={{ fontSize: 18, color: "#000", marginVertical: 20 }}>Ir para Perfil</Text>
                                        </TouchableOpacity>
                                    </Animated.View>
                                )}
                            </View>
                        );
                    }
                }}
            />
        </Stack>
    );
}