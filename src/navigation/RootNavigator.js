import { createStackNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import SellerMainScreen from "../screens/seller/SellerMainScreen";
import CreateProductScreen from "../screens/seller/CreateProductScreen";
import SellerProductListScreen from "../screens/seller/SellerProductListScreen";
import SearchScreen from "../screens/buyer/SearchScreen";
import PurchaseScreen from "../screens/buyer/PurchaseScreen";
import ReviewPurchaseScreen from "../screens/buyer/ReviewPurchaseScreen";
import ConfirmPurchaseScreen from "../screens/buyer/ConfirmPurchaseScreen";

export const RootNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        // SellerMain: SellerMainScreen,
        SellerMain: PurchaseScreen,
        CreateProduct: CreateProductScreen,
        ProductList: SellerProductListScreen,
        Search: SearchScreen,
        Purchase: PurchaseScreen,
        ReviewPurchase: ReviewPurchaseScreen,
        ConfirmPurchase: ConfirmPurchaseScreen
    },
    {
        initialRouteName: 'Home',
    }
);