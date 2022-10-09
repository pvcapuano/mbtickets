import { Box } from "native-base";
import React from "react";
import Colors from "../color";
import HomeProducts from "../data/Components/HomeProducts";
import Searchfield from "../data/Components/Searchfield";

const HomeScreen = () => {
  return (
    <Box flex={1} bg={Colors.subPurple}>
      <Searchfield />
      <HomeProducts />
    </Box>
  );
};

export default HomeScreen;
