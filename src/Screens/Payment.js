import React from "react";
import {
  Box,
  Center,
  FormControl,
  HStack,
  Image,
  Input,
  ScrollView,
  Spacer,
  Text,
  VStack,
} from "native-base";
import Colors from "../color";
import ButtonWidth from "../data/Components/ButtonWidth";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const paymentMethodes = [
  {
    label: require("../../assets/images/picpay.png"),
    alt: "picpay",
    icon: "Ionicons",
  },
  {
    label: require("../../assets/images/mastercard.png"),
    alt: "mastercard",
    icon: "FontAwesome",
  },
  {
    label: require("../../assets/images/visa.png"),
    alt: "visa",
    icon: "FontAwesome",
  },
  {
    label: require("../../assets/images/pix.png"),
    alt: "pix",
    icon: "FontAwesome",
  },
];

const Payment = () => {
  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          MÉTODO DE PAGAMENTO
        </Text>
      </Center>

      <Box h="full" bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {paymentMethodes.map((i, index) => (
              <HStack
                key={index}
                alignItems="center"
                bg={Colors.white}
                px={3}
                py={1}
                rounded={10}
                justifyContent="space-between"
              >
                <Box>
                  <Image
                    source={i.label}
                    alt={i.alt}
                    resizeMode="contain"
                    w={60}
                    h={50}
                  />
                </Box>
                {i.icon === "Ionicons" ? (
                  <Ionicons
                    name="checkmark-circle"
                    size={30}
                    color={Colors.main}
                  />
                ) : (
                  <FontAwesome name="circle-o" size={30} color={Colors.main} />
                )}
              </HStack>
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

export default Payment;
