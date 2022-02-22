import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { createRef, useRef } from 'react'
import SignatureScreen from "react-native-signature-canvas";
import * as FileSystem from 'expo-file-system'

const SignatureCanvas = ({ text, onOK }) => {
  const ref = useRef();
  // Called after ref.current.readSignature() reads a non-empty base64 string
  const handleOK = (signature) => {
    console.log(signature);
    // onOK(signature); // Callback from Component props
    
  };

  // Called after ref.current.readSignature() reads an empty string
  const handleEmpty = () => {
    console.log("Empty");
  };

  // Called after ref.current.clearSignature()
  const handleClear = () => {
    console.log("clear success!");
  };

  // Called after end of stroke
  const handleEnd = () => {
    ref.current.readSignature();
  };

  // Called after ref.current.getData()
  const handleData = (data) => {
    console.log(data);
  };
  return (
    <SignatureScreen
    style={{
      flex: 1,
    }}
      ref={ref}
      onEnd={handleEnd}
      onOK={handleOK}
      onEmpty={handleEmpty}
      onClear={handleClear}
      onGetData={handleData}
      // autoClear={true}
      descriptionText={text}
    />
    // <View style={{ width: imgWidth, height: imgHeight }}>
    //   <SignatureScreen
    //     ref={ref}
    //     bgSrc="https://via.placeholder.com/300x200/ff726b"
    //     bgWidth={imgWidth}
    //     bgHeight={imgHeight}
    //     webStyle={style}
    //     onOK={handleOK}
    //     onEnd={handleEnd}
    //   onEmpty={handleEmpty}
    //   onClear={handleClear}
    //   onGetData={handleData}
    //   descriptionText={text}
    //   />
    // </View>
  )
}

export default SignatureCanvas

const styles = StyleSheet.create({})
// const imgWidth = 300;
// const imgHeight = 200;
// const style = `.m-signature-pad {box-shadow: none; border: none; } 
//               .m-signature-pad--body {border: none;}
//               .m-signature-pad--footer {display: none; margin: 0px;}
//               body,html {
//               width: ${imgWidth}px; height: ${imgHeight}px;}`;
