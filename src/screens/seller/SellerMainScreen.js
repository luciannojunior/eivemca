import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Icon } from "react-native-elements";

import Header from "../../components/Header";
import ProfileHeader from "../../components/ProfileHeader";

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  inputContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems: "center"
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
    const seller = { nome: "Robson da Pamonha" };

    return (
      <View style={styles.mainContent}>
        <Header onPressBack={() => this.props.navigation.navigate("Home")} />
        <ProfileHeader seller={seller} />
        <View style={{ width: "80%", justifyContent: "center", marginTop: 20 }}>
          <View style={styles.inputContainer}>
            <Icon
              style={{ marginRight: 5 }}
              name="megaphone"
              type="entypo"
              color="green"
            />
            <Text
              onPress={() => this.props.navigation.navigate("CreateProduct")}
              style={styles.fontSizeText}
            >
              Cadastrar Produto
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <Icon
              style={{ marginRight: 5 }}
              name="megaphone"
              type="entypo"
              color="green"
            />
            <Text
                onPress={() => this.props.navigation.navigate("Orders")}
                style={styles.fontSizeText}>Pedidos e Rotas</Text>
          </View>
          <View style={styles.inputContainer}>
            <Icon
              style={{ marginRight: 5 }}
              name="megaphone"
              type="entypo"
              color="green"
            />
            <Text style={styles.fontSizeText}>Vendas Semanais</Text>
          </View>
          <View style={styles.inputContainer}>
            <Icon
              style={{ marginRight: 5 }}
              name="megaphone"
              type="entypo"
              color="green"
            />
            <Text
              onPress={() => this.props.navigation.navigate("ProductList")}
              style={styles.fontSizeText}
            >
              Produtos Cadastrados
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <Icon
              style={{ marginRight: 5 }}
              name="megaphone"
              type="entypo"
              color="green"
            />
            <Text style={styles.fontSizeText}>Personalize sua Página</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default SellerMainScreen;
