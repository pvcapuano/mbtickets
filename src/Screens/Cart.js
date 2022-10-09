import { Box, Center, Text } from "native-base";
import React from "react";
import Colors from "../color";
import CartEmpty from "../data/Components/CartEmpty";

const Cart = () => {
  return (
    <Box flex={1} safeAreaTop bg={Colors.subPurple}>
      <Center w="full" py={5}>
        <Text color={Colors.black} fontSize={20} bold>
          Carrinho
        </Text>
      </Center>
      {/* se o carrinho estiver vazio */}
      <CartEmpty />
    </Box>
  );
};

export default Cart;
