import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function EditProfile() {
    const [menuVisible, setMenuVisible] = useState(false); // Estado para controlar o menu

    return (
        <View style={styles.container}>
            {/* Cabeçalho com o botão do menu hambúrguer */}
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => setMenuVisible(true)} // Abre o menu
                >
                    <Ionicons name="menu" size={28} color="#333" />
                </TouchableOpacity>
                <Image
                    source={{ uri: "https://i.ibb.co/Kzmhb4YV/download.png" }}
                    style={styles.image}
                />
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

            {/* Modal do menu hambúrguer */}
            <Modal
                visible={menuVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setMenuVisible(false)} // Fecha o menu ao pressionar "voltar"
            >
                <View style={styles.menuContainer}>
                    <View style={styles.menu}>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setMenuVisible(false)} // Fecha o menu
                        >
                            <Ionicons name="close" size={28} color="#333" />
                        </TouchableOpacity>
                        <Text style={styles.menuTitle}>Menu</Text>
                        <TouchableOpacity style={styles.menuItem}>
                            <Text style={styles.menuItemText}>Perfil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem}>
                            <Text style={styles.menuItemText}>Configurações</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem}>
                            <Text style={styles.menuItemText}>Ajuda</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem}>
                            <Text style={styles.menuItemText}>Sair</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
    },
    iconButton: {
        padding: 10,
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
    menuContainer: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "flex-end",
    },
    menu: {
        backgroundColor: "white",
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    closeButton: {
        alignSelf: "flex-end",
    },
    menuTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#333",
    },
    menuItem: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    menuItemText: {
        fontSize: 16,
        color: "#333",
    },
});