import React from "react";
import { View, StyleSheet, Text, ScrollView, KeyboardAvoidingView } from "react-native";
import { List, ListItem, Button, Input } from "react-native-elements";
import * as firebase from "firebase";
import ProfileHeader from "../../components/ProfileHeader";
import Header from "../../components/Header";

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
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0
  }
});

const products = [
  {
    name: "Pamonha",
    description: "Bem quentinha",
    price: 1.5
  },
  {
    name: "Milho cozido",
    description: "Muito bom!",
    price: 2.0
  },
  {
    name: "Milho assado",
    description: "Na brasa",
    price: 2.5
  },
    {
        name: "Pamonha",
        description: "Bem quentinha",
        price: 1.5
    },
    {
        name: "Milho cozido",
        description: "Muito bom!",
        price: 2.0
    },
    {
        name: "Milho assado",
        description: "Na brasa",
        price: 2.5
    },
    {
        name: "Pamonha",
        description: "Bem quentinha",
        price: 1.5
    },
    {
        name: "Milho cozido",
        description: "Muito bom!",
        price: 2.0
    },
    {
        name: "Milho assado",
        description: "Na brasa",
        price: 2.5
    }
];

const seller = { name: "Seeuu chico" };

class PurchaseScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  componentWillMount() {
    const nome = this.props.navigation.getParam("nome");
    firebase
      .database()
      .ref("vendedores")
      .on("value", snap => {
          console.log(snap.val());
        const vendedor = Object.values(snap.val()).filter(
          o => o.nome == nome
        )[0];
        this.setState({ vendedor });
      });
  }

  onAmountChange(productIndex, amount) {
    products[productIndex].amount = amount;
  }

  buy() {
    // Criar um pedido no firebase
    this.props.navigation.navigate("ReviewPurchase");
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.mainContent} behavior={'padding'}>
        <Header onPressBack={() => this.props.navigation.navigate("Home")} />
        <ProfileHeader seller={seller} />
        <ScrollView style={{ marginBottom: 60 }}>
          <List>
            {products.map((item, i) => (
              <ListItem
                leftIcon={{ name: "megaphone", color: "green", type: "entypo" }}
                textInput={true}
                textInputPlaceholder={"Quantidade"}
                textInputKeyboardType={"numeric"}
                textInputOnChangeText={amount => this.onAmountChange(i, amount)}
                key={i}
                title={item.name + " (R$ " + item.price + ")"}
                subtitle={item.description}
                hideChevron
              />
            ))}
          </List>
        </ScrollView>
        <View style={styles.bottomView}>
          <Button
            textStyle={{ color: "black" }}
            transparent={true}
            title="Adicionar à cesta"
            leftIcon={{ name: "shopping-cart", color: "green" }}
            onPress={() => this.buy()}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default PurchaseScreen;
