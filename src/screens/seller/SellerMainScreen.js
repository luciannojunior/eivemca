import React from "react";
import { View, StyleSheet, Text } from "react-native";

import Header from "../../components/Header";
import ProfileHeader from "../../components/ProfileHeader";

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    inputContainer: {
        marginBottom: 20
    },
    fontSizeText: {
      fontSize: 20
    }
});

class SellerMainScreen extends React.Component {
    static navigationOptions = {
        header: null
    };
    
    render() {
        const seller = {name: 'Rafael'};

        return (
            <View style={styles.mainContent}>
                <Header onPressBack={() => this.props.navigation.navigate('Home')} />
                <ProfileHeader seller={seller} />
                <View style={{ width: "80%", justifyContent: 'center', marginTop: 20 }}>
                    <View style={styles.inputContainer}>
                        <Text
                            onPress={() => this.props.navigation.navigate('CreateProduct')}
                            style={styles.fontSizeText}>
                            Cadastrar Produto
                        </Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.fontSizeText}>Pedidos e Rotas</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.fontSizeText}>Vendas Semanais</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text
                            onPress={() => this.props.navigation.navigate('ProductList')}
                            style={styles.fontSizeText}>
                            Produtos Cadastrados
                        </Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.fontSizeText}>Personalize sua Página</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default SellerMainScreen;