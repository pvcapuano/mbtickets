import { Box, Heading, ScrollView } from "native-base";
import React from "react";
import Colors from "../color";
import OrderInfo from "../data/Components/OrderInfo";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import OrderItems from "../data/Components/OrderItems";
import OrderModel from "../data/Components/OrderModel";

const Order = () => {
  return (
    <Box bg={Colors.subPurple} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfo
            title="Status"
            success
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
            subTitle="Endereço"
            danger
            text="Rua Um dois, nº 3, Rio de Janeiro/RJ"
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
        <OrderModel />
      </Box>
    </Box>
  );
};

export default Order;
