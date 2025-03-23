import React from "react";
import { FlatList, Image, Text, View, StyleSheet } from "react-native";

const data = [
    {
        id: "1",
        title: "Aprenda a fazer essa finalização",
        image: require("../assets/cabelo.png"), 
    },
    {
        id: "2",
        title: "Cuidados para um cabelo bonito",
        image: require("../assets/cabelo.png"), 
    },
    {
        id: "3",
        title: "Cuidados para um cabelo bonito",
        image: require("../assets/cabelo.png"), 
    },
    {
        id: "4",
        title: "Cuidados para um cabelo bonito",
        image: require("../assets/cabelo.png"), 
    },
    {
        id: "5",
        title: "Cuidados para um cabelo bonito",
        image: require("../assets/cabelo.png"), 
    },
    {
        id: "6",
        title: "Cuidados para um cabelo bonito",
        image: require("../assets/cabelo.png"), 
    },
];

const ExploreCards = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                numColumns={2} // Exibe 2 cards por fileira
                columnWrapperStyle={styles.row} // Adiciona espaçamento entre os cards
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={item.image} style={styles.imageCard} />
                        <Text style={styles.cardText}>{item.title}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    row: {
        justifyContent: "space-between", // Garante que os cards fiquem alinhados
        marginBottom: 10, // Espaçamento entre as linhas
    },
    card: {
        backgroundColor: "#FFDEE9",
        borderRadius: 10,
        marginRight: 10,
        overflow: "hidden",
        width: "48%", // Para evitar que quebre a formatação
        elevation: 3,
    },
    imageCard: {
        width: "100%",
        height: 120,
    },
    cardText: {
        padding: 8,
        fontSize: 14,
        textAlign: "center",
        fontWeight: "bold",
        color: "#333",
    },
});

export default ExploreCards;