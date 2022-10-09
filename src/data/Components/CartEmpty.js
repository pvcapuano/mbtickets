import { Box, Center, Text } from "native-base";
import React from "react";
import Colors from "../../color";
import ButtonWidth from "./ButtonWidth";
import { FontAwesome } from "@expo/vector-icons";

const CartEmpty = () => {
  return (
    <Box flex={1} px={4}>
      <Center h="90%">
        <Center w={200} h={200} bg={Colors.white} rounded="full">
          <FontAwesome name="shopping-basket" size={64} color={Colors.main} />
        </Center>
        <Text color={Colors.white} bold mt={5}>
          Carrinho está vazio
        </Text>
      </Center>
      <ButtonWidth bg={Colors.black} color={Colors.white}>
        COMEÇAR AS COMPRAS
      </ButtonWidth>
    </Box>
  );
};

export default CartEmpty;
