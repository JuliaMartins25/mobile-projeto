import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Profile() {
    const [activeTab, setActiveTab] = useState("galeria"); // Estado para alternar entre galeria e quiz

    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: "https://i.ibb.co/Kzmhb4YV/download.png" }} 
                style={styles.image} 
            />
            <Text style={styles.text}>Nome do Usuário</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Editar Perfil</Text>
            </TouchableOpacity>
            <View style={styles.row}>
                {/* Botão para alternar para a galeria */}
                <TouchableOpacity onPress={() => setActiveTab("galeria")}>
                    <Text style={[styles.galeryText, activeTab === "galeria" && styles.activeTab]}>
                        Galeria
                    </Text>
                </TouchableOpacity>
                {/* Botão para alternar para os quizzes */}
                <TouchableOpacity onPress={() => setActiveTab("quiz")}>
                    <Text style={[styles.galeryText, activeTab === "quiz" && styles.activeTab]}>
                        Quiz Salvos
                    </Text>
                </TouchableOpacity>
            </View>
            {/* Renderização condicional com base no estado activeTab */}
            {activeTab === "galeria" ? (
                <View style={styles.galeria}>
                    <View style={styles.row}>
                        <Text style={styles.galeryText}>Adicionar fotos</Text>
                        <Text style={styles.galeryText}>Adicionar pastas</Text>
                    </View>
                </View>
            ) : (
                <View style={styles.galeria}>
                    <View style={styles.row}>
                        <Text style={styles.galeryText}>Quiz 1</Text>
                        <Text style={styles.galeryText}>Quiz 2</Text>
                        <Text style={styles.galeryText}>Quiz 3</Text>
                    </View>
                </View>
            )}
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
        width: 120,
        height: 120,
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
    row: {
        flexDirection: "row", // Coloca os itens lado a lado
        justifyContent: "space-between", // Espaçamento entre os itens
        width: "80%", // Define a largura do container
        marginTop: 20,
    },
    galeryText: {
        fontSize: 20,
        color: "#333",
    },
    activeTab: {
        fontWeight: "bold",
        textDecorationLine: "underline",
    },
    text: {
        fontSize: 20,
        color: "#333",
    },
    galeria: {
        marginTop: 20,
        padding: 10,
        backgroundColor: "#FFDEE9", // Fundo rosa
        borderRadius: 10,
        width: "80%", // Ajusta a largura do container
        alignItems: "center",
    },
});