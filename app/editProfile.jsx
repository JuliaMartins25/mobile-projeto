import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function EditProfile() {
    return (
        <View style={styles.container}>
            {/* Cabeçalho */}
            <View style={styles.header}>
                <Image
                    source={{ uri: "https://i.ibb.co/Kzmhb4YV/download.png" }}
                    style={styles.image}
                />
                <Text style={styles.username}>Usuário</Text>
            </View>

            {/* Botão de editar perfil */}
            <TouchableOpacity style={styles.editButton}>
                <Text style={styles.editButtonText}>Editar perfil</Text>
            </TouchableOpacity>

            {/* Opções */}
            <View style={styles.options}>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.optionText}>Trocar a Foto</Text>
                    <Text style={styles.subText}>Fazer Upload</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.optionText}>Trocar o Nome de Usuário</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.optionText}>Central de Ajuda</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.optionText}>Mudar Para Tema Escuro</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        paddingTop: 50,
    },
    header: {
        alignItems: "center",
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#F96380",
    },
    username: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
        color: "#333",
    },
    editButton: {
        backgroundColor: "#F96380",
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginTop: 10,
    },
    editButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    options: {
        marginTop: 30,
        width: "90%",
    },
    optionButton: {
        backgroundColor: "#F96380",
        paddingVertical: 15,
        borderRadius: 25,
        marginBottom: 15,
        alignItems: "center",
    },
    optionText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    subText: {
        color: "#fff",
        fontSize: 14,
        marginTop: 5,
    },
});