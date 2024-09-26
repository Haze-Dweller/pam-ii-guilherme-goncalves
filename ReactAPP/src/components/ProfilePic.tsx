import { View, Text, Image, StyleSheet, ViewStyle, ImageStyle } from 'react-native';
import React from 'react'

interface ProfilePicProps {imageSource: any;}

const ProfilePic: React.FC<ProfilePicProps> = ({imageSource}) => {
  return (
    <View>
        <Image source = {imageSource}
        style = {styles.image}/>
    </View>
  )
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  }
})

export default ProfilePic