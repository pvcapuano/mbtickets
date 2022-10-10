import { Box, Heading, ScrollView } from "native-base";
import React from "react";
import Colors from "../color";
import OrderInfo from "../data/Components/OrderInfo";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import OrderItems from "../data/Components/OrderItems";
import PlaceOrderModel from "../data/Components/PlaceOrderModel";

const PlaceOrder = () => {
  return (
    <Box bg={Colors.subPurple} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfo
            title="Cliente"
            subTitle="Paulo Victor"
            text="pvcapuano@gmail.com"
            icon={<FontAwesome name="user" size={30} color={Colors.white} />}
          />
          <OrderInfo
            title="Status"
            subTitle="Postado"
            text="Pagamento: Pix"
            icon={
              <FontAwesome5
                name="shipping-fast"
                size={30}
                color={Colors.white}
              />
            }
          />
          <OrderInfo
            title="Entrega"
            subTitle="Rua Um dois, nº 3,"
            text="Rio de Janeiro/RJ"
            icon={
              <Ionicons name="location-sharp" size={30} color={Colors.white} />
            }
          />
        </ScrollView>
      </Box>
      <Box px={6} flex={1} pb={3}>
        <Heading bold fontSize={15} isTruncated my={4}>
          PRODUTOS
        </Heading>
        <OrderItems />
        <PlaceOrderModel />
      </Box>
    </Box>
  );
};

export default PlaceOrder;
