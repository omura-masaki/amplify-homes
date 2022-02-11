/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function Frame1(props) {
  const { pokemon, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="300px"
      height="300px"
      overflow="hidden"
      position="relative"
      borderRadius="10px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(17.00000088661909,16.963165663182735,16.929166987538338,0.14000000059604645)"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Image
        width="173px"
        height="173px"
        position="absolute"
        top="36px"
        left="64px"
        padding="0px 0px 0px 0px"
        src={pokemon?.imageUrl}
        {...getOverrideProps(overrides, "View.Image[0]")}
      ></Image>
      <Text
        fontFamily="Roboto"
        fontSize="25px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="29.296875px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="219px"
        left="118px"
        padding="0px 0px 0px 0px"
        children={pokemon?.name}
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="18.75px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="258px"
        left="114px"
        padding="0px 0px 0px 0px"
        children={pokemon?.description}
        {...getOverrideProps(overrides, "View.Text[1]")}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="72px"
        height="24px"
        position="absolute"
        top="2px"
        left="7px"
        padding="0px 0px 0px 0px"
        children={pokemon?.number}
        {...getOverrideProps(overrides, "View.Text[2]")}
      ></Text>
    </View>
  );
}
