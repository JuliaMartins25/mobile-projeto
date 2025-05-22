import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, TextInput } from "react-native";

export default function EditProfile() {
    const changePhoto = () => {
        Alert.alert("Trocar foto de perfil", "Selecione uma nova foto de perfil", [
            { text: "Remover foto atual", onPress: () => console.log("Remover foto") },
            { text: "Galeria", onPress: () => console.log("Abrir galeria") },
            { text: "Câmera", onPress: () => console.log("Abrir câmera") },
            { text: "Cancelar", style: "cancel" },
        ]);
    };

    const button = () => {
        console.log("Alterações salvas!");
        Alert.alert("Sucesso", "Suas alterações foram salvas!");
    };

    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Image
                    source={{ uri: "https://i.ibb.co/Kzmhb4YV/download.png" }}
                    style={styles.image}
                />
                <TouchableOpacity onPress={changePhoto}>
                    <Text style={styles.changePhotoText}>Trocar foto de perfil</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.form}>
                <Text style={styles.label}>Nome</Text>
                <TextInput style={styles.input} placeholder="Digite seu nome" placeholderTextColor="#888" />

                <Text style={styles.label}>Nome de usuário</Text>
                <TextInput style={styles.input} placeholder="@novousuario123" placeholderTextColor="#888" />

                <Text style={styles.label}>Bio</Text>
                <TextInput style={styles.input} placeholder="Nova Biografia" placeholderTextColor="#888" />
            </View>

            <TouchableOpacity style={styles.saveButton} onPress={button}>
                <Text style={styles.saveButtonText}>Salvar alterações</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#A2D2FF",
        alignItems: "center",
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    avatarContainer: {
        alignItems: "center",
        marginBottom: 24,
    },
    image: {
        width: 130,
        height: 130,
        borderRadius: 65,
        borderWidth: 3,
        borderColor: "#fff",
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 6,
    },
    changePhotoText: {
        fontSize: 16,
        color: "#F96380",
        marginTop: 12,
        textDecorationLine: "underline",
        fontWeight: "bold",
        letterSpacing: 0.5,
    },
    form: {
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 18,
        padding: 22,
        marginBottom: 30,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.07,
        shadowRadius: 8,
        elevation: 2,
    },
    label: {
        color: "#F96380",
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 6,
        marginTop: 10,
        letterSpacing: 0.5,
    },
    input: {
        backgroundColor: "#f8f8fa",
        borderRadius: 10,
        paddingHorizontal: 14,
        paddingVertical: 10,
        fontSize: 16,
        marginBottom: 10,
        color: "#333",
        borderWidth: 0,
        shadowColor: "#F96380",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.04,
        shadowRadius: 2,
    },
    saveButton: {
        backgroundColor: "#F96380",
        paddingVertical: 14,
        paddingHorizontal: 50,
        borderRadius: 25,
        alignSelf: "center",
        shadowColor: "#F96380",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 2,
    },
    saveButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        letterSpacing: 1,
    },
});