/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import { StyleSheet, ImageBackground, Pressable, Image} from 'react-native';
import { MoodPicker } from '../components/MoodPicker';
import { useAppContext } from '../App.provider';
import Reanimated, { useAnimatedStyle, useSharedValue,withTiming } from 'react-native-reanimated';

const ReanimatedPressable = Reanimated.createAnimatedComponent(Pressable);

export const Home: React.FC = () => {
  const appContext = useAppContext();

  const shared = useSharedValue(0);

  const style = useAnimatedStyle(() => ({
    transform: [
      {translateX: shared.value},
    ],
  }),[]);

  return (
    <ImageBackground style={styles.container} source={require ('../../assets/accueil.png')}>
      <MoodPicker handleSelectMood={appContext.handleSelectMood}/>
      <ReanimatedPressable style={style} onPress={() => {
        shared.value = withTiming(shared.value + 20);
      }}><Image  source={require('../../assets/bonhomme.png')} ></Image></ReanimatedPressable >
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});
