import React from "react";
import {
  Alert,
  View,
  StyleSheet,
  Text,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import { List, ListItem, Button, Input } from "react-native-elements";
import * as firebase from "firebase";
import Header from "../../components/Header";
import ProfileHeader from "../../components/ProfileHeader";

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 20,
    marginLeft: 15
  },
  inputContainer: {
    marginLeft: "3%",
    marginBottom: 7,
    flexDirection: "row"
  },
  bottomView: {
    width: "100%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0
  },
  totalValueStyle: {
    alignSelf: "flex-end",
    marginRight: 10,
    fontWeight: "bold"
  }
});

const products = [
  {
    name: "Pamonhaaa",
    description: "Bem quentinha",
    price: 1.5,
    amount: 2
  },
  {
    name: "Milho cozido",
    description: "Muito bom!",
    price: 2.0,
    amount: 3
  },
  {
    name: "Milho assado",
    description: "Na brasa",
    price: 2.5,
    amount: 1
  },
  {
    name: "Pamonha",
    description: "Bem quentinha",
    price: 1.5,
    amount: 2
  },
  {
    name: "Milho cozido",
    description: "Muito bom!",
    price: 2.0,
    amount: 3
  },
  {
    name: "Milho assado",
    description: "Na brasa",
    price: 2.5,
    amount: 1
  }
];

const seller = { name: "Seu chico" };

class ReviewPurchaseScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    pedido: null
  };

  componentWillMount() {
    const key = this.props.navigation.getParam("key");
    console.log(key);
    firebase
      .database()
      .ref("pedidos/" + key)
      .on("value", snap => {
        console.log("voltou");
        console.log(snap.val());
        this.setState({ pedido: snap.val() });
      });
  }

  getTotalPrice() {
    let total = 0;
    products.forEach(item => {
      total += item.amount * item.price;
    });
    return total;
  }

  confirmOrder() {
    Alert.alert(
      "Aviso",
      "Pedido Enviado com Sucesso",
      [
        {
          text: "OK",
          onPress: () => this.props.navigation.navigate("ConfirmPurchase")
        }
      ],
      { cancelable: false }
    );
  }

  render() {
    const formataPreco = preco => {
      if (preco == 0) {
        preco = "000";
      }
      const reverted = ("" + preco)
        .split("")
        .reverse()
        .join("");
      return (
        "R$ " +
        (
          reverted.substring(0, 2) +
          "," +
          reverted.substring(2, reverted.length)
        )
          .split("")
          .reverse()
          .join("")
      );
    };
    const getTotal = produtos => {
      return produtos.map(produto => produto.subtotal).reduce((a, b) => a + b);
    };

    if (!this.state || !this.state.pedido) return null;

    console.log("entrou no render");
    console.log(this.state.pedido);

    let { produtos, total } = this.state.pedido;
    produtos = Object.values(produtos);

    return (
      <KeyboardAvoidingView behaviour={"padding"} style={styles.mainContent}>
        <Header onPressBack={() => this.props.navigation.navigate("Purchase")} />
        <ProfileHeader seller={seller} />
        <ScrollView style={{ marginBottom: 65 }}>
          <List>
            {produtos.map((produto, i) => (
              <ListItem
                leftIcon={{
                  name: "megaphone",
                  color: "green",
                  type: "entypo"
                }}
                key={i}
                title={produto.nome}
                textInput={true}
                textInputValue={formataPreco(produto.subtotal)}
                textInputEditable={false}
                textInputStyle={{ marginRight: 10 }}
                subtitle={item.descricao + "\nPreço: "+formataPreco(item.preco) + "."}
                titleNumberOfLines={5}
                subtitleNumberOfLines={5}
                hideChevron
              />
            ))}
          </List>
        </ScrollView>
        <View style={styles.bottomView}>
          <Text style={styles.totalValueStyle}>
            {"Total: " + formataPreco(getTotal(produtos))}
          </Text>
          <Button
            textStyle={{ color: "black" }}
            transparent={true}
            title="Realizar compra"
            leftIcon={{ name: "megaphone", color: "green", type: "entypo" }}
            onPress={() => this.confirmOrder()}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default ReviewPurchaseScreen;
