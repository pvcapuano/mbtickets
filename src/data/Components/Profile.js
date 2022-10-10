import React from "react";
import ButtonWidth from "./ButtonWidth";
import { FormControl, Input, ScrollView, VStack } from "native-base";
import Colors from "../../color";
import { useNavigation } from "@react-navigation/native";

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
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <VStack space={8} mt={5} pb={2} px={5}>
        {Inputs.map((i, index) => (
          <FormControl key={index}>
            <FormControl.Label
              _text={{
                fontSiz: "16px",
                fontWeight: "bold",
                color: Colors.main,
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
        <ButtonWidth
          onPress={() => navigation.navigate("Home")}
          bg={Colors.main}
          color={Colors.white}
        >
          ATUALIZAR PERFIL
        </ButtonWidth>
      </VStack>
    </ScrollView>
  );
};

export default Profile;
