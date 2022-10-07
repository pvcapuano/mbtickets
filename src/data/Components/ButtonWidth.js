import { Button } from "native-base";
import React from "react";

const ButtonWidth = ({ mt, bg, color, children, onPress }) => {
  return (
    <Button
      w="full"
      h={55}
      mt={mt}
      rounded="full"
      bg={bg}
      
      _text={{
        color: color,
        fontWeight: "bold",
      }}
      _pressed={{ bg: bg }}
      onPress={onPress}
    >
      {children}
    </Button>
  );
};

export default ButtonWidth;
