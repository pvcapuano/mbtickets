import { useNavigation } from "@react-navigation/native";
import { Box, Button, Center, HStack, ScrollView, Text } from "native-base";
import React from "react";
import Colors from "../color";
import ButtonWidth from "../data/Components/ButtonWidth";
import CartEmpty from "../data/Components/CartEmpty";
import CartItems from "../data/Components/CartItems";
import { SafeAreaView } from "react-native";

const Cart = () => {
  const navigation = useNavigation();
  return (
    <Box flex={1} safeAreaTop bg={Colors.subPurple}>
      <Center w="full" py={5}>
        <Text color={Colors.white} fontSize={24} bold>
          Carrinho
        </Text>
      </Center>
      {/* se o carrinho estiver vazio */}
      {/*  <CartEmpty /> */}
      {/* itens do carrinho */}
      <SafeAreaView>
        <ScrollView>
          <CartItems />
          <Center mt={5}>
            <HStack
              rounded={50}
              justifyContent="space-between"
              bg={Colors.white}
              shadow={2}
              w="90%"
              pl={5}
              h={45}
              alignItems="center"
            >
              <Text>Total</Text>
              <Button
                px={10}
                h={45}
                rounded={50}
                bg={Colors.green}
                _text={{ color: Colors.white, fontWeight: "semibold" }}
                _pressed={{ bg: Colors.green }}
              >
                R$108
              </Button>
            </HStack>
          </Center>

          <Center px={5}>
            <ButtonWidth
              onPress={() => navigation.navigate("Shipping")}
              bg={Colors.green}
              color={Colors.white}
              mt={10}
            >
              CONTINUAR
            </ButtonWidth>
          </Center>
        </ScrollView>
      </SafeAreaView>
    </Box>
  );
};

export default Cart;
