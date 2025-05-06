import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

export default function Profile() {
    const [activeTab, setActiveTab] = useState("galeria"); // Estado para alternar entre galeria e quiz

    return (
        <ScrollView style={styles.container}>
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
            <View style={styles.tabRow}>
                <TouchableOpacity onPress={() => setActiveTab("galeria")}>
                    <Text style={[styles.tabText, activeTab === "galeria" && styles.activeTab]}>
                        Galeria
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveTab("quiz")}>
                    <Text style={[styles.tabText, activeTab === "quiz" && styles.activeTab]}>
                        Quiz salvos
                    </Text>
                </TouchableOpacity>
            </View>
            {activeTab === "galeria" ? (
                <View style={styles.content}>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.addButton}>
                            <Text style={styles.addButtonText}>Adicionar fotos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.addButton}>
                            <Text style={styles.addButtonText}>Adicionar pastas</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.sectionTitle}>Fotos adicionadas recentemente</Text>
                    <View style={styles.photoRow}>
                        <View style={styles.photoCard}>
                            <Image 
                                source={{ uri: "https://via.placeholder.com/100" }} 
                                style={styles.photo} 
                            />
                          
                        </View>
                        <View style={styles.photoCard}>
                            <Image 
                                source={{ uri: "https://via.placeholder.com/100" }} 
                                style={styles.photo} 
                            />
                        </View>
                    </View>
                </View>
            ) : (
                <View style={styles.content}>
                    <Text style={styles.sectionTitle}>Quizzes salvos</Text>
                    <View style={styles.row}>
                        <Text style={styles.quizText}>Quiz 1</Text>
                        <Text style={styles.quizText}>Quiz 2</Text>
                        <Text style={styles.quizText}>Quiz 3</Text>
                    </View>
                </View>
            )}
        </ScrollView>
    ); 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white", // Fundo azul claro
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
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
        alignSelf: "center",
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
    tabRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#fff",
        paddingVertical: 10,
        marginTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    tabText: {
        fontSize: 18,
        color: "#333",
    },
    activeTab: {
        fontWeight: "bold",
        textDecorationLine: "underline",
        color: "#F96380",
    },
    content: {
        backgroundColor: "#FFDEE9", // Fundo rosa
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    addButton: {
        backgroundColor: "#F96380",
        padding: 10,
        borderRadius: 10,
    },
    addButtonText: {
        color: "#fff",
        fontSize: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#333",
    },
    photoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    photoCard: {
        alignItems: "center",
    },
    photo: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginBottom: 5,
    },
    photoLabel: {
        fontSize: 12,
        color: "#333",
    },
    quizText: {
        fontSize: 16,
        color: "#333",
    },
});