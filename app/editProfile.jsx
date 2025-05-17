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
        
    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={changePhoto} style={styles.avatarContainer}>
                <Image
                    source={{ uri: "https://i.ibb.co/Kzmhb4YV/download.png" }}
                    style={styles.image}
                />
                <Text style={styles.username}>Trocar foto de perfil</Text>
            </TouchableOpacity>


            <View style={styles.options}>
                <Text style={styles.optionText}>Nome</Text>
                <TextInput style={styles.input} placeholder="Digite seu nome" />
            </View>
            <View style={styles.options}>
                <Text style={styles.optionText}>Nome de usuário</Text>
                <TextInput style={styles.input} placeholder="@novousuario123" />
            </View>
            <View style={styles.options}>
                <Text style={styles.optionText}>Bio</Text>
                <TextInput style={styles.input} placeholder="Nova Biografia" />
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
        paddingTop: 40,
        paddingBottom: 80,
        paddingHorizontal: 20,
        backgroundColor: "#A2D2FF",
        alignItems: "center",
        paddingTop: 50,
    },
    avatarContainer: {
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
        color: "#F96380",
    },
    options: {
        marginBottom: 20,
        borderRadius: 10,
        width: "100%",
        backgroundColor: "white",
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        paddingVertical: 6,
        fontSize: 16,
        color: "#C4C4C4"
    },
    optionText: {
        color: "#F96380",
        borderBottomWidth: 1,
        borderBottomColor: "#F96380",
        paddingVertical: 6,
        fontSize: 16,
    },
    saveButton: {
        backgroundColor: "#F96380",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginTop: 20,
    },
    saveButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});