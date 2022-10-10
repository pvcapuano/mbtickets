import {
  Box,
  Center,
  FormControl,
  Input,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React from "react";
import Colors from "../color";
import ButtonWidth from "../data/Components/ButtonWidth";

const ShippingInputs = [
  {
    label: "ESTADO",
    type: "text",
  },
  {
    label: "CIDADE",
    type: "text",
  },
  {
    label: "CEP",
    type: "number",
  },
  {
    label: "ENDEREÇO",
    type: "text",
  },
];

const Shipping = () => {
  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          ENDEREÇO DE ENTREGA
        </Text>
      </Center>

      <Box h="full" bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {ShippingInputs.map((i, index) => (
              <FormControl key={index}>
                <FormControl.Label
                  _text={{
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {i.label}
                </FormControl.Label>
                <Input
                  borderWidth={0.2}
                  borderColor={Colors.main}
                  bg={Colors.subPurple}
                  py={4}
                  type={i.type}
                  color={Colors.main}
                  _focus={{
                    bg: Colors.subPurple,
                    borderWidth: 1,
                  }}
                />
              </FormControl>
            ))}
            <ButtonWidth bg={Colors.main} color={Colors.white} mt={5}>
              CONTINUAR
            </ButtonWidth>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default Shipping;
