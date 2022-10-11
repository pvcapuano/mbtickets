import React, { useState } from "react";
import { Center, HStack, Modal, VStack, Text, Button } from "native-base";
import ButtonWidth from "../Components/ButtonWidth";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useNavigation } from "@react-navigation/native";

const OrdersInfos = [
  {
    title: "Produtos",
    price: 108.0,
    color: "black",
  },
  {
    title: "Frete",
    price: 42.0,
    color: "black",
  },
  {
    title: "Total",
    price: 150.0,
    color: "main",
  },
];

const PlaceOrderModel = () => {
  const navigation = useNavigation();
  const [showModel, setShowModel] = useState(false);
  return (
    <Center>
      <ButtonWidth
        onPress={() => setShowModel(true)}
        bg={Colors.white}
        color={Colors.black}
        mt={5}
      >
        FINALIZAR
      </ButtonWidth>
      <Modal isOpen={showModel} onClose={() => setShowModel(false)} size="lg">
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton />
          <Modal.Header>Pedido</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {OrdersInfos.map((i, index) => (
                <HStack
                  key={index}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontWeight="medium">{i.title}</Text>
                  <Text
                    color={i.color === "main" ? Colors.main : Colors.black}
                    bold
                  >
                    R${i.price}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex={1}
              bg={Colors.black}
              h={45}
              _text={{
                color: Colors.white,
              }}
              onPress={() => {
                navigation.navigate("Order");
                setShowModel(false);
              }}
              _pressed={{
                bg: Colors.black,
              }}
            >
              FAZER O PEDIDO
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default PlaceOrderModel;
