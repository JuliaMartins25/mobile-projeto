import React from "react";
import { FlatList, Image, Text, View, StyleSheet, TouchableOpacity, Linking, TextInput} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";

const data = [
    {
        id: "1",
        title: "Quiz: Descubra o seu tipo de cabelo",
        image: require("../assets/img1.png"),
        link: "", 
    },
    {
        id: "2",
        title: "Tipos de cabelo masculino: tem diferença? Entenda!",
        image: require("../assets/img2.png"),
        link: "https://www.usebob.com.br/blogs/news/tipos-de-cabelo-masculino-tem-diferenca-entenda?srsltid=AfmBOopflcNZxwxBFH_NhpFg4lfoJlzW2HZTvU5X1ReQOvjBEXsznTKH",
    },
    {
        id: "3",
        title: "Tipos de cacho: descubra o seu!",
        image: require("../assets/img3.png"),
        link: "https://claudia.abril.com.br/cabelos/tipo-de-cacho-teste-2a-2b-2c-3a-3b-3c-4a-4b-4c/#google_vignette",
    },
    {
        id: "4",
        title: "Qual o corte de cabelo da moda que mais combina com você?",
        image: require("../assets/img4.png"),
        link: ("../app/content/card4.jsx"),
    },
    {
        id: "5",
        title: "Produtos capilares que você precisa testar!",
        image: require("../assets/img5.png"),
        link: "https://example.com/produtos",
    },
    {
        id: "6",
        title: "5 receitas caseiras que te ajudarão a ter um cabelo saudável",
        image: require("../assets/img6.png"),
        link: "https://example.com/receitas",
    },
];

const ExploreCards = () => {
    const [searchText, setSearchText] = useState("");

    // Filtra os cards conforme o texto digitado
    const filteredData = data.filter(item =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <View>
            <View style={styles.Container}>
                <Ionicons name="search" size={20} color="#C4C4C4" style={styles.icon} />
                <TextInput
                    style={styles.pesquisa}
                    placeholder="Pesquisar produtos..."
                    value={searchText}
                    onChangeText={setSearchText}
                />
            </View>
        
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            numColumns={2} 
            columnWrapperStyle={styles.row}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => Linking.openURL(item.link)} 
                >
                    <Image source={item.image} style={styles.imageCard} resizeMode="cover" />
                    <Text style={styles.cardText}>{item.title}</Text>
                </TouchableOpacity>
            )}
            contentContainerStyle={styles.listContent}
            scrollEnabled={false}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 25,
        height: 45,
        width: '75%',
        paddingHorizontal: 15,
        marginVertical: 20,
        alignSelf: 'center',
    },
    icon: {
        marginRight: 10,
    },
    pesquisa: {
        flex: 1,
        height: 40,
        fontSize: 16,
        color: '#C4C4C4',
    },
    listContent: {
        paddingBottom: 20,
    },
    row: {
        justifyContent: "space-between", 
        marginBottom: 30, 
    },
    card: {
        backgroundColor: "#FFAFCC", // Rosa claro
        borderRadius: 10,
        overflow: "hidden",
        width: "48%",
        height: 280,
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