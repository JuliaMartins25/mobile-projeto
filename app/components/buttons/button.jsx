import { Link } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Botao() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.card}>
                <Link href="https://pt.quizur.com/quiz/descubra-qual-seu-tipo-de-cabelo-1plc8" asChild>
                    <Text style={styles.text}>Feminino</Text>
                </Link>


            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
                <Link href="https://pt.quizur.com/quiz/qual-e-o-seu-tipo-de-cabelo-masculino-1pql0" asChild>
                    <Text style={styles.text}>Masculino</Text>
                </Link>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
                <Link href="https://pt.quizur.com/quiz/qual-e-a-curvatura-do-seu-cabelo-descubra-agora-1prPN" asChild>
                    <Text style={styles.text}>Curvatura</Text>
                </Link>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#FFAFCC', // Rosa claro
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
        marginHorizontal: 5,
        marginVertical: 10,
    },
    text: {
        color: '#6B1D4D',
        fontWeight: 'bold',
        fontSize: 14,
    }
});