import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Pesquisa = ({ searchText, setSearchText }) => {
    return (
        <View style={styles.Container}>
        {/* Ícone da lupa */}
        <Ionicons name="search" size={20} color="#C4C4C4" style={styles.icon} />
        
        {/* Barra de pesquisa */}
        <TextInput
            style={styles.pesquisa}
            placeholder="Pesquisar produtos..."
            value={searchText}
            onChangeText={setSearchText} // Atualiza o estado com o texto digitado
        />
    </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white', // Fundo branco da barra
        borderRadius: 25, // Arredondar as bordas
        height: 45, // Altura da barra de pesquisa
        width: '75%', // Largura de 80% da tela
        paddingHorizontal: 15, // Espaçamento interno
        marginVertical: 20, // Espaço entre a barra de pesquisa e outros elementos
    },
    icon: {
        marginRight: 10, // Espaço entre o ícone e o campo de texto
    },
    pesquisa: {
        flex: 1, 
        height: 40, 
        fontSize: 16, 
        color: '#C4C4C4', 
    },
});
export default Pesquisa;