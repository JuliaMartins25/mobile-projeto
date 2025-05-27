import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
    const [menuVisible, setMenuVisible] = useState(false); // Estado para controlar o menu
    const [activeTab, setActiveTab] = useState("galeria");
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>
          

            {/* Centralizar a imagem de perfil */}
            <View style={styles.profileContainer}>
                <Image
                    source={{ uri: "https://i.ibb.co/Kzmhb4YV/download.png" }}
                    style={styles.image}
                />
            </View>

            <Text style={styles.username}>Usuário123</Text>
            <TouchableOpacity
                style={styles.editButton}
                onPress={() => navigation.navigate("editProfile")} 
            >
                <Text style={styles.editButtonText}>Editar perfil</Text>
            </TouchableOpacity>

            <View style={styles.tabRow}>
                <TouchableOpacity onPress={() => setActiveTab("galeria")}>
                    <Text style={[styles.tabText, activeTab === "galeria" && styles.activeTab]}>
                        Galeria
                    </Text>
                </TouchableOpacity>
               
            </View>

            {activeTab === "galeria" ? (
                <View style={styles.content}>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.addButton}>
                            <Text style={styles.addButtonText}>Adicionar fotos</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.sectionTitle}>Fotos adicionadas recentemente</Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={[styles.photoRow, { marginTop: 10 }]}
                    >
                        <View style={styles.photoCard}>
                            <Image
                                source={{ uri: "https://www.fiquediva.com.br/-/media/project/loreal/brand-sites/fiquediva/usa/pt-br/articles/blog/2025/transformacao-capilar/cortes-de-cabelo/cortes-femininos-2025/mulher-cabelo-longo-castanho-2025.jpg?la=pt-br&rev=65bcddd1ea794df6b58c9f0e3bbfa92e&hash=46BB1F77358CA3808A7A1F290AD055AE" }}
                                style={styles.photo}
                            />
                            <Text style={styles.photoLabel}>ONTEM 16:21</Text>
                        </View>
                        <View style={styles.photoCard}>
                            <Image
                                source={{ uri: "https://media.istockphoto.com/id/1312807901/pt/foto/beautiful-woman-with-long-straight-hair-blond-girl.jpg?s=612x612&w=0&k=20&c=ctnS4vx-_ZWhkzEMhTa_kk9k4jgHmh-h9si-yyje9vY=" }}
                                style={styles.photo}
                            />
                            <Text style={styles.photoLabel}>SÁBADO 19:41</Text>
                        </View>
                        <View style={styles.photoCard}>
                            <Image
                                source={{ uri: "https://inspiracabelo.com.br/wp-content/uploads/2024/03/corte-de-cabelo-feminino-degrade-repicado-16.jpg" }}
                                style={styles.photo}
                            />
                            <Text style={styles.photoLabel}>SEXTA 14:30</Text>
                        </View>
                        <View style={styles.photoCard}>
                            <Image
                                source={{ uri: "https://dicasdecabelo.com.br/wp-content/uploads/2023/04/cortes-de-cabelo-feminino-liso09-1.jpg" }}
                                style={styles.photo}
                            />
                            <Text style={styles.photoLabel}>QUINTA 10:15</Text>
                        </View>
                    </ScrollView>
                </View>
            ) : (
                <View style={styles.content}>
                </View>
            )}

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#A2D2FF",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
    },
    profileContainer: {
        alignItems: "center", // Centraliza horizontalmente
        marginTop: 20, // Espaço acima da imagem
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
    bio: {
        fontSize: 10,
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
        color: "#F96380",
        borderBottomWidth: 2,
        borderBottomColor: "#F96380",
    },
    content: {
        backgroundColor: "#FFAFCC",
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
    },
    photoCard: {
        alignItems: "center",
        marginRight: 15,
    },
    photo: {
        width: 250,
        height: 200,
        borderRadius: 10,
        marginBottom: 5,
    },
    photoLabel: {
        fontSize: 12,
        color: "#333",
    },
});