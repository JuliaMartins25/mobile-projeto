import React from "react";
import { FlatList, Image, Text, View, StyleSheet } from "react-native";

const data = [
    {
        id: "1",
        title: "Aprenda a fazer essa finalização",
        image: require("../assets/img1.png"), 
    },
    {
        id: "2",
        title: "Cuidados para um cabelo bonito",
        image: require("../assets/img2.png"), 
    },
    {
        id: "3",
        title: "Hidratações para deixar seu cabelo assim",
        image: require("../assets/img3.png"), 
    },
    {
        id: "4",
        title: "Hábitos que fazem mal ao seu cabelo ",
        image: require("../assets/img4.png"), 
    },
    {
        id: "5",
        title: "Produtos capilares que você precisa testar!",
        image: require("../assets/img5.png"), 
    },
    {
        id: "6",
        title: "5 receitas caseiras que te ajudarão a ter um cabelo saudável",
        image: require("../assets/img6.png"), 
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
                        <Image source={item.image} style={styles.imageCard} resizeMode="cover"/>
                        <Text style={styles.cardText}>{item.title}</Text>
                    </View>
                )}
                contentContainerStyle={styles.listContent}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    listContent: {
        paddingBottom: 20,
    },
    row: {
        justifyContent: "space-between", // Garante que os cards fiquem alinhados
        marginBottom: 30, // Espaçamento entre as linhas
    },
    card: {
        backgroundColor: "#FFDEE9",
        borderRadius: 10,
        overflow: "hidden",
        width: "48%", 
        height: 250,
        elevation: 3,
        marginTop: 10,
    },
    imageCard: {
        width: "100%", 
        height: 200,
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