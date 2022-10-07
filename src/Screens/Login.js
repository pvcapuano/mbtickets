import {
  Box,
  Button,
  Heading,
  Input,
  VStack,
  Text,
  Pressable,
} from "native-base";
import React from "react";
import Colors from "../color";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Login = () => {
  return (
    <Box flex={1} bg={Colors.main}>
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize="md" color={Colors.white}>
          Bem vindo ao
        </Text>
        <Heading color={Colors.white} size="2xl">
          MB Tickets
        </Heading>

        <VStack space={7} pt="6">
          {/* email */}
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={24} color={Colors.white} />
            }
            variant="underlined"
            placeholder="usuario@gmail.com"
            w="70%"
            pl={3}
            color={Colors.white}
            borderBottomColor={Colors.underline}
          />

          {/* password */}
          <Input
            InputLeftElement={
              <Ionicons name="eye" size={24} color={Colors.white} />
            }
            variant="underlined"
            placeholder="******"
            w="70%"
            type="password"
            pl={3}
            color={Colors.white}
            borderBottomColor={Colors.underline}
          />
        </VStack>
        <Button
          _pressed={{
            bg: Colors.white,
          }}
          mt={30}
          w="80%"
          rounded={50}
          bg={Colors.white}
        >
          <Text color={Colors.main} bold>
            Login
          </Text>
        </Button>
        <Pressable mt={4}>
          <Text color={Colors.deepestGray}>Cadastre-se</Text>
        </Pressable>
      </Box>
    </Box>
  );
};

export default Login;
