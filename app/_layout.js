import { Stack } from "expo-router";
import { TouchableOpacity, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // Biblioteca de ícones do Expo


export default function RootLayout() {
    return (
        <Stack screenOptions={{
            headerShown: true,
            headerStyle: {
                backgroundColor: '#A4C4F2',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}>
            <Stack.Screen name="index"
                options={{
                    headerTitle: () => {
                        const navigation = useNavigation(); // Agora funciona aqui dentro!
                        return (

                            <View style={{
                                flexDirection: "row",  // Deixa Ícone e Texto lado a lado
                                justifyContent: "space-between",
                                alignItems: "center", // Alinha verticalmente no centro
                                width: "100%", // Garante que ocupe toda a largura da tela
                                paddingHorizontal: 10 // Ajuste de espaçamento lateral
                                
                            }}>

                                <TouchableOpacity onPress={() => navigation.navigate('profile')}
                                    style={{
                                        flexDirection: "row",  // Deixa Ícone e Texto lado a lado
                                        alignItems: "center", // Alinha verticalmente no centro
                                    }}
                                >

                                    <Ionicons
                                        name="person-circle-outline"  // Ícone de perfil
                                        size={24}
                                        color="#fff"
                                        style={{ marginRight: 5 }} // Adiciona espaçamento entre ícone e texto
                                    />

                                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
                                        Olá, usuário123
                                    </Text>
                                </TouchableOpacity>


                                <Text style={{ color: '#F96380', fontSize: 18 }}>
                                    hair care
                                </Text>



                            </View>
                        );
                    }
                }}

            />

        </Stack>
    )
}