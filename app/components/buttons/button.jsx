import { Link } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Botao() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.card}>
            <Link href="https://www.iszi.com.br/quiz?gad_source=1&gad_campaignid=17890980904&gbraid=0AAAAABejgmz3UMfMDXp_oRsfXJDG_s-ia&gclid=Cj0KCQjw5ubABhDIARIsAHMighYrOL8E2lDeV0QV5CdtfODpgpURdkInRCvtyI7zSFK8WE4TSHfpqgwaAomVEALw_wcB" asChild>
                <Text style={styles.text}>Quiz</Text>
            </Link>
           
                    
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