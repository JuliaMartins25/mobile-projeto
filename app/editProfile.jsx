import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, TextInput } from "react-native";


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
        
   // ...existing code...
return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={changePhoto} style={styles.avatarContainer}>
            <View style={styles.avatarBorder}>
                <Image
                    source={{ uri: "https://i.ibb.co/Kzmhb4YV/download.png" }}
                    style={styles.image}
                />
            </View>
            <Text style={styles.username}>Trocar foto de perfil</Text>
        </TouchableOpacity>

        <View style={styles.options}>
            <Text style={styles.optionText}>Nome</Text>
            <TextInput style={styles.input} placeholder="Digite seu nome" placeholderTextColor="#A2D2FF" />
        </View>
        <View style={styles.options}>
            <Text style={styles.optionText}>Nome de usuário</Text>
            <TextInput style={styles.input} placeholder="@novousuario123" placeholderTextColor="#A2D2FF" />
        </View>
        <View style={styles.options}>
            <Text style={styles.optionText}>Bio</Text>
            <TextInput
                style={[styles.input, { minHeight: 60, textAlignVertical: "top" }]}
                placeholder="Nova Biografia"
                placeholderTextColor="#A2D2FF"
                multiline
            />
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={button}>
            <Text style={styles.saveButtonText}>Salvar alterações</Text>
        </TouchableOpacity>
    </ScrollView>
);
}
// ...existing code...

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingTop: 56,
        paddingBottom: 40,
        paddingHorizontal: 18,
        backgroundColor: "#ffcbdb",
        alignItems: "center",
    },
    avatarContainer: {
        alignItems: "center",
        marginBottom: 36,
    },
    avatarBorder: {
        borderWidth: 4,
        borderColor: "#A2D2FF",
        borderRadius: 80,
        padding: 6,
        backgroundColor: "#fff",
        shadowColor: "#A2D2FF",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.18,
        shadowRadius: 10,
        elevation: 8,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: "#F96380",
        backgroundColor: "#fff",
    },
    username: {
        fontSize: 17,
        fontWeight: "600",
        textAlign: "center",
        color: "#4A4A4A",
        marginTop: 12,
        textDecorationLine: "underline",
        letterSpacing: 0.5,
    },
    options: {
        marginBottom: 20,
        borderRadius: 20,
        width: "100%",
        backgroundColor: "#fff",
        paddingHorizontal: 22,
        paddingVertical: 16,
        shadowColor: "#A2D2FF",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.10,
        shadowRadius: 10,
        elevation: 3,
    },
    optionText: {
        color: "#F96380",
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 8,
        letterSpacing: 0.2,
    },
    input: {
        borderWidth: 0,
        borderRadius: 12,
        backgroundColor: "#F6F9FF",
        paddingVertical: 12,
        paddingHorizontal: 14,
        fontSize: 16,
        color: "#222",
        borderBottomWidth: 2,
        borderBottomColor: "#A2D2FF",
        marginBottom: 2,
    },
    saveButton: {
        backgroundColor: "#F96380",
        paddingVertical: 16,
        paddingHorizontal: 60,
        borderRadius: 32,
        marginTop: 32,
        shadowColor: "#F96380",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.22,
        shadowRadius: 16,
        elevation: 5,
    },
    saveButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        letterSpacing: 0.5,
        textAlign: "center",
        textTransform: "uppercase",
        textDecorationLine: "underline",
        textDecorationColor: "#fff",
        textDecorationStyle: "solid",
        textDecorationThickness: 2,
    },
});