import React from "react";
import {
  Box,
  Button,
  Heading,
  Input,
  VStack,
  Text,
  Pressable,
} from "native-base";
import Colors from "../color";
import { MaterialIcons, Ionicons, FontAwesome } from "@expo/vector-icons";

const Register = ({ navigation }) => {
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
        <Heading color={Colors.white} size="2xl">
          MB Tickets
        </Heading>
        <Text mt={1} fontSize="md" color={Colors.white}>
          Cadastre-se
        </Text>

        <VStack space={7} pt="6">
          {/* username */}
          <Input
            InputLeftElement={
              <FontAwesome name="user" size={24} color={Colors.white} />
            }
            variant="underlined"
            placeholder="Paulo Victor"
            w="70%"
            pl={3}
            color={Colors.white}
            borderBottomColor={Colors.underline}
          />
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
            type="text"
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
          onPress={() => navigation.navigate("Bottom")}
        >
          <Text color={Colors.main} bold>
            CADASTRAR
          </Text>
        </Button>
        <Pressable mt={4} onPress={() => navigation.navigate("Login")}>
          <Text bold color={Colors.deepestGray}>
            LOGIN
          </Text>
        </Pressable>
      </Box>
    </Box>
  );
};

export default Register;
