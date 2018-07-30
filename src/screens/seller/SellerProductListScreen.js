import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import * as firebase from "firebase";
import { Icon } from "react-native-elements";

import Header from "../../components/Header";

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20
  },
  secondaryTitle: {
    fontSize: 28,
    fontWeight: "bold"
  },
  padding10: {
    padding: 10
  },
  row: {
    flexDirection: "row"
  },
  productList: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18
  },
  productPrice: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
    fontWeight: "bold"
  }
});

class SellerProductListScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    products: []
  };

  componentWillMount() {
    const ref = firebase.database().ref("vendedores/0/produtos");
    ref.on("value", value => {
      this.setState({ products: Object.values(value.val() || {}) });
    });
  }

  render() {
    const { products } = this.state;

    return (
      <View style={styles.mainContent}>
        <Header
          onPressBack={() => this.props.navigation.navigate("SellerMain")}
        />
        <Text style={styles.mainTitle}>Produtos</Text>
        <Text style={styles.secondaryTitle}>Cadastrados</Text>
        <View style={{ width: "80%" }}>
          <ScrollView>
            <View style={styles.padding10}>
              {products.map(product => {
                return (
                  <View style={styles.row}>
                    <Icon
                      style={{ marginRight: 5 }}
                      name="megaphone"
                      type="entypo"
                      color="green"
                    />
                    <Text style={styles.productList}>{product.nome}</Text>
                    <Text style={styles.productPrice}>
                      {" "}
                      - R$ {product.preco}
                    </Text>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default SellerProductListScreen;
