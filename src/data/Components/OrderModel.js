import React, { useState } from "react";
import {
  Center,
  HStack,
  Modal,
  VStack,
  Text,
  Button,
  Pressable,
  Image,
} from "native-base";
import ButtonWidth from "../Components/ButtonWidth";
import Colors from "../../color";
import { useNavigation } from "@react-navigation/native";

const OrdersInfos = [
  {
    title: "Produtos",
    price: 120.0,
    color: "black",
  },
  {
    title: "Frete",
    price: 30.0,
    color: "black",
  },
  {
    title: "Total",
    price: 150.0,
    color: "green",
  },
];

const OrderModel = () => {
  const navigation = useNavigation();
  const [showModel, setShowModel] = useState(false);
  return (
    <Center>
      <ButtonWidth
        onPress={() => setShowModel(true)}
        bg={Colors.green}
        color={Colors.white}
        mt={5}
      >
        PAGAMENTO E TOTAL
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
                    color={i.color === "green" ? Colors.green : Colors.black}
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
              w="full"
              mt={2}
              bg={Colors.payment}
              h={45}
              _text={{
                color: Colors.white,
              }}
              onPress={() => setShowModel(false)}
              _pressed={{
                bg: Colors.payment,
              }}
            >
              PIX
            </Button>
            <Button
              w="full"
              mt={2}
              bg={Colors.green}
              h={45}
              _text={{
                color: Colors.white,
              }}
              onPress={() => {
                setShowModel(false);
              }}
              _pressed={{
                bg: Colors.green,
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

export default OrderModel;
