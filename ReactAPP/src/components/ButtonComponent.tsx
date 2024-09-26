import { View, Text, Pressable, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import React, { useState, useRef } from 'react';
import { Audio } from 'expo-av';
import ProfilePic from '../components/ProfilePic'; // Ensure the import is correct

interface ButtonComponentProps {
  setImageSource: (source: any) => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ setImageSource }) => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const soundRef = useRef<Audio.Sound | null>(null);

  const handlePress = async () => {
    setImageSource(require('../assets/end.gif'));

    const { sound: newSound } = await Audio.Sound.createAsync(
      require('../sounds/Song.mp3')
    );

    setSound(newSound);
    soundRef.current = newSound;
    await newSound.playAsync();

    newSound.setOnPlaybackStatusUpdate(async (status) => {
      if (status.isLoaded && status.didJustFinish) {
        setImageSource(require('../assets/start2.gif'));
        await newSound.unloadAsync();
        setSound(null);
      }
    });
  };

  return (
    <View>
      <Pressable onPress={handlePress} style={styles.button}>
        <Text style={styles.text}>Press Me</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007aff',
    paddingHorizontal: 40,
    paddingVertical: 10,
    margin: 30,
    borderRadius: 4,
  } as ViewStyle,
  text: {
    color: 'white',
    fontSize: 20,
  } as TextStyle,
});

export default ButtonComponent;
