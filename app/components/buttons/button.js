import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Botao() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.card}>
                <Text style={styles.text}>Quiz</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
                <Text style={styles.text}>Rotinas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
                <Text style={styles.text}>Cronograma</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        paddingHorizontal: 15, 
    },
    card: {
        backgroundColor: '#FFDEE9', // Rosa claro
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