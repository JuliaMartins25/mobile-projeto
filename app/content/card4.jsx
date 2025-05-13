import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Card4 = () => {
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/img4.png")} style={styles.image} resizeMode="cover" />
            <Text style={styles.title}>Qual o corte de cabelo da moda que mais combina com você?</Text>
            <Text style={styles.description}>
                Descubra os cortes de cabelo que estão em alta e como escolher o que mais combina com o seu estilo e formato de rosto. 
                Neste guia, vamos explorar as tendências atuais e dar dicas para você arrasar no visual!
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#FFF",
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 10,
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#333",
    },
    description: {
        fontSize: 16,
        color: "#666",
        lineHeight: 24,
    },
});

export default Card4;
