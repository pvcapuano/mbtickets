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
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const Login = ({ navigation }) => {
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
            LOGIN
          </Text>
        </Button>
        <Pressable mt={4} onPress={() => navigation.navigate("Register")}>
          <Text bold color={Colors.deepestGray}>
            CADASTRE-SE
          </Text>
        </Pressable>
      </Box>
    </Box>
  );
};

export default Login;
