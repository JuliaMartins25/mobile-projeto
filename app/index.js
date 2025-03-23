import { View, Text, StyleSheet } from "react-native";
import ExploreCards from "./exploreCards";

export default function Screen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Explorar</Text>
        <ExploreCards />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A4C4F2'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#F96380'
    }
});