import { View, Text, StyleSheet, ViewStyle, TextStyle, ImageBackground } from 'react-native';
import React, {useState} from 'react';
import ProfilePic from '../components/ProfilePic';
import ButtonComponent from '../components/ButtonComponent';

const index = () => {

  const [imageSource, setImageSource] = useState(require('../assets/start2.gif'));

  return (
    <View style = {styles.box}>
      <ProfilePic imageSource = {imageSource}/>
      <Text style = {styles.name}> Loli God Requiem </Text>
      <ButtonComponent setImageSource = {setImageSource} />
    </View>
  )
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        backgroundColor: '#E8EDDF',
        justifyContent: 'center',
        alignItems: 'center',
    } as ViewStyle,
    name: {
        fontSize: 30,
        margin: 25,
        fontWeight: 'bold',
        color: '#7DA7B4',
    } as TextStyle,
});

export default index