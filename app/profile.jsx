import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Profile() {
    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: "https://i.ibb.co/Kzmhb4YV/download.png" }} 
                style={styles.image} 
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Editar Perfil</Text>
            </TouchableOpacity>
        </View>
    ); 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start", // Alinha os itens no topo
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        paddingTop: 20, // Adiciona um espaçamento no topo
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20, // Adiciona um espaçamento entre a imagem e o texto
    },
    button: {
        backgroundColor: "#F96380", // Cor azul
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginTop: 10,
    },
    buttonText: {
        color: "#fff", // Cor do texto branco
        fontSize: 16,
        fontWeight: "bold",
    },
    text: {
        fontSize: 18,
        color: "#333",
    },
    
});