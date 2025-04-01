import React from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

// Importando componentes
import Header from './components/Header';
import ProfileSection from './components/ProfileSection';
import NavigationTabs from './components/NavigationTabs';
import ContentContainer from './components/ContentContainer';

// Importando estilos compartilhados
import { colors } from './styles/globalStyles';

/**
 * Tela principal de perfil do usuário
 * Integra todos os componentes em uma única interface
 */
const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Configura a barra de status do dispositivo */}
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      
      {/* Componente de cabeçalho com botões de navegação */}
      <Header />
      
      {/* Seção de informações do perfil do usuário */}
      <ProfileSection username="Usuario123" />
      
      {/* Abas de navegação para diferentes seções de conteúdo */}
      <NavigationTabs />
      
      {/* Container principal de conteúdo */}
      <ContentContainer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});

export default ProfileScreen;