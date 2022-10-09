import { HStack, Text } from "native-base";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../color";

const Rating = ({ value, text }) => {
  const size = 10;
  const color = Colors.orange;
  return (
    <HStack space={0.4} mt={1} alignItems="center">
      <FontAwesome
        name={value >= 1 ? "star" : value >= 0.5 ? "star-half-o" : "star-o"}
        color={color}
        size={size}
      />
      <FontAwesome
        name={value >= 2 ? "star" : value >= 0.5 ? "star-half-o" : "star-o"}
        color={color}
        size={size}
      />
      <FontAwesome
        name={value >= 3 ? "star" : value >= 0.5 ? "star-half-o" : "star-o"}
        color={color}
        size={size}
      />
      <FontAwesome
        name={value >= 4 ? "star" : value >= 0.5 ? "star-half-o" : "star-o"}
        color={color}
        size={size}
      />
      <FontAwesome
        name={value >= 5 ? "star" : value >= 0.5 ? "star-half-o" : "star-o"}
        color={color}
        size={size}
      />

      {text && (
        <Text fontSize={12} ml={2}>
          {text}
        </Text>
      )}
    </HStack>
  );
};

export default Rating;
