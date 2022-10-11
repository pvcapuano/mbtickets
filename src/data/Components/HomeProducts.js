import { useNavigation } from "@react-navigation/native";
import {
  Flex,
  Image,
  Pressable,
  ScrollView,
  Box,
  Heading,
  Text,
} from "native-base";
import React from "react";
import Colors from "../../color";
import products from "../../data/Products";

const HomeProducts = () => {
  const navigation = useNavigation();
  return (
    <ScrollView flex={1} bg={Colors.white} showsVerticalScrollIndicator={false}>
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={6}
      >
        {products.map((product, index) => (
          <Pressable
            onPress={() => navigation.navigate("Single", product)}
            key={index}
            w="47%"
            bf={Colors.white}
            rounded="md"
            shadow={1}
            pt={0.3}
            my={3}
            pb={6}
            overflow="hidden"
          >
            <Image
              source={{ uri: product.image }}
              alt={product.name}
              w="full"
              h={20}
              mt={4}
              resizeMode="contain"
            />
            <Box px={4} pt={1}>
              <Heading size="sm" bold>
                ${product.price}
              </Heading>
              <Text fontSize={10} mt={1} isTruncated w="full">
                {product.name}
              </Text>
            </Box>
          </Pressable>
        ))}
      </Flex>
    </ScrollView>
  );
};

export default HomeProducts;
