import { Box, Center, Image, VStack } from "native-base";
import React from "react";
import Colors from "../color";
import ButtonWidth from "../data/Components/ButtonWidth";

const NotVerified = () => {
  return (
    <Box flex={1} bg={Colors.main} safeAreaTop>
      <Center w="full" h={350}>
        <Image
          source={require("../../assets/favicon.png")}
          alt="Logo"
          size="2xl"
        />
      </Center>
      <VStack space={6} px={5} alignItems="center">
        <ButtonWidth bg={Colors.black} color={Colors.white}>
          CADASTRAR
        </ButtonWidth>
        <ButtonWidth bg={Colors.white} color={Colors.black}>
          LOGIN
        </ButtonWidth>
      </VStack>
    </Box>
  );
};

export default NotVerified;
