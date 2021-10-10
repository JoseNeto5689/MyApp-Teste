import React from "react";
import { ImageBackground } from "react-native";
import image from "../Images/BackGround.jpg"

export default function ( { children } ) {
    return <>
      <ImageBackground source = { image } style = { { resizeMode: "cover", flex: 1, width: "100%" } }>
          { children }
      </ImageBackground>
    </>
  }