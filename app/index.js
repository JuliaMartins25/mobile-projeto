import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import ExploreCards from "./exploreCards";
import Pesquisa from "./pesquisa";
import Botao from "./components/buttons/button";

export default function Screen() {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
            <Text style={styles.title}>Destaque</Text>
            <Image
                source={require('../assets/destaque.png')}
                style={{ width: 300, height: 200, marginTop: 5 }}
            />

            <Text style={styles.title}>Explorar</Text>
            <Pesquisa />
            <Botao />
            <ExploreCards />
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: '#A4C4F2', // Cor de fundo da tela
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A4C4F2'
    },
    title: {
        fontSize: 24,
        fontWeight: 'regular',
        color: '#F96380',
        textAlign: 'left',
        width: '100%',
        marginLeft: 20,
        marginTop: 15,

    }
});