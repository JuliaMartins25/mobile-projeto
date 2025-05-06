import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function EditProfile() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconButton}>
                </TouchableOpacity>
                <Image 
                    source={{ uri: "https://i.ibb.co/Kzmhb4YV/download.png" }} 
                    style={styles.image} 
                />
                <TouchableOpacity style={styles.iconButton}>
                </TouchableOpacity>
            </View>
            <Text style={styles.username}>Usuário123</Text>
            <TouchableOpacity style={styles.editButton}>
                <Text style={styles.editButtonText}>Editar perfil</Text>
            </TouchableOpacity>
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
        backgroundColor: "white", // Fundo azul claro
        alignItems: "center",
        paddingTop: 50,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
    },
    iconButton: {
        padding: 10,
    },
    iconText: {
        fontSize: 20,
        color: "#333",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
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