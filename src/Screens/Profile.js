import {
  Box,
  Center,
  FormControl,
  Heading,
  Image,
  Input,
  ScrollView,
  VStack,
} from "native-base";
import React from "react";
import Colors from "../color";
import ButtonWidth from "../data/Components/ButtonWidth";

const Inputs = [
  {
    label: "USUÁRIO",
    type: "text",
  },
  {
    label: "E-MAIL",
    type: "email",
  },
  {
    label: "NOVA SENHA",
    type: "password",
  },
  {
    label: "CONFIRMAR A SENHA",
    type: "password",
  },
];

const Profile = () => {
  return (
    <>
      <Center bg={Colors.main} pt={10} pb={6}>
        <Image
          source={{
            uri: "https://avatars.githubusercontent.com/u/10540844?v=4",
          }}
          alt="profile"
          w={24}
          h={24}
          resizeMode="cover"
        />
        <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
          Paulo Victor
        </Heading>
      </Center>
      <Box h="full" bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={10} mt={5} pb={10}>
            {Inputs.map((i, index) => (
              <FormControl key={index}>
                <FormControl.Label
                  _text={{
                    fontSiz: "16px",
                    fontWeight: "bold",
                    color: Colors.black,
                  }}
                >
                  {i.label}
                </FormControl.Label>
                <Input
                  borderColor={Colors.main}
                  borderWidth={1}
                  bg={Colors.subPurple}
                  py={3}
                  type={i.type}
                  color={Colors.white}
                  fontSize={15}
                  _focus={{
                    bg: Colors.subPurple,
                  }}
                />
              </FormControl>
            ))}
            <ButtonWidth bg={Colors.main} color={Colors.white}>
              ATUALIZAR PERFIL
            </ButtonWidth>
          </VStack>
        </ScrollView>
      </Box>
    </>
  );
};

export default Profile;
