import {
  Box,
  Heading,
  HStack,
  Image,
  ScrollView,
  Spacer,
  Text,
} from "native-base";
import React, { useState } from "react";
import NumericInput from "react-native-numeric-input";
import Colors from "../color";
import ButtonWidth from "../data/Components/ButtonWidth";

const SingleProduct = () => {
  const [value, setValue] = useState(0);
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={require("../../assets/images/produto.png")}
          alt="Image"
          w="full"
          h={300}
          resizeMode="contain"
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          Palestra Javascript
        </Heading>
        <HStack space={2} alignItems="center" my={5}>
          <NumericInput
            value={value}
            totalWidth={140}
            totalHeight={30}
            iconSize={25}
            step={1}
            maxValue={15}
            minValue={0}
            borderColor={Colors.deepGray}
            rounded
            textColor={Colors.black}
            iconStyle={{ color: Colors.white }}
            rightButtonBackgroundColor={Colors.main}
            leftButtonBackgroundColor={Colors.main}
            onChange={(value) => console.log(value)}
          />
          <Spacer />
          <Heading bold color={Colors.black} fontSize={19}>
            R$400
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
        </Text>

        <ButtonWidth bg={Colors.main} color={Colors.white} mt={10}>
          ADICIONAR AO CARRINHO
        </ButtonWidth>
      </ScrollView>
    </Box>
  );
};

export default SingleProduct;
