import { Box, Center, Heading, Image } from "native-base";
import React from "react";
import Colors from "../color";
import Profile from "../data/Components/Profile";

const ProfileScreen = () => {
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

      <Profile />
    </>
  );
};

export default ProfileScreen;
