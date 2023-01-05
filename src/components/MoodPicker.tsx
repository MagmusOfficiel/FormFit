/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';
import { MoodOptionType } from '../types';
import { theme } from '../theme';
import Reanimated, { useAnimatedStyle,withTiming } from 'react-native-reanimated';

const moodOptions: MoodOptionType[] = [
  { emoji: '😩', description: 'Nul' },
  { emoji: '😑', description: 'Pas assez' },
  { emoji: '🤔', description: 'Moyen' },
  { emoji: '🙂', description: 'Bien' },
  { emoji: '😁', description: 'Superbe' },
];

const ReanimatedPressable = Reanimated.createAnimatedComponent(Pressable);

type MoodPickerProps = {
    handleSelectMood: (moodOption: MoodOptionType) => void;
};


export const MoodPicker: React.FC<MoodPickerProps> = ({handleSelectMood}) => {
  const [selectedMood, setSelectedMood] = React.useState<MoodOptionType>();
  const [hasSelected, setHasSelected] = React.useState<boolean>(false);
  const [hasSelected2, setHasSelected2] = React.useState<boolean>(false);


  const buttonStyle = useAnimatedStyle(
    () => ({
      opacity: selectedMood ? withTiming(1) : withTiming(0.5),
      transform: [{scale: selectedMood ? withTiming(1.1) : withTiming(1)}]
    }),
    [selectedMood]
  );

    const handleSelect = React.useCallback(() => {
        if (selectedMood){
            handleSelectMood(selectedMood);
            setSelectedMood(undefined);
            setHasSelected(true);
        }
      }, [selectedMood, handleSelectMood]);
        
        const handleSelect2 = React.useCallback(() => {
          if (selectedMood){
              handleSelectMood(selectedMood);
              setHasSelected(false);
              setHasSelected2(true);
          }
       }, [selectedMood, handleSelectMood]);

       if(hasSelected2){
        return (
          <View style={styles.container}>
            <Text style={styles.buttonText}>Merci,</Text>
            <Text style={styles.buttonText}>à la prochaine séance !</Text>
        </View>
        );
    }

        if(hasSelected){
            return (
              <View style={styles.container}>
              <Text style={styles.heading}>Le coach était bon?</Text>
              <View style={styles.moodList}>
                {moodOptions.map(option => (
                  <View key={option.emoji}>
                    <Pressable
                      onPress={() => setSelectedMood(option)}
                      key={option.emoji}
                      style={[
                        styles.moodItem,
                        option.emoji === selectedMood?.emoji
                          ? styles.selectedMoodItem
                          : undefined,
                      ]}>
                      <Text style={styles.moodText}>{option.emoji}</Text>
                    </Pressable>
                    <Text style={styles.descriptionText}>
                      {selectedMood?.emoji === option.emoji ? option.description : ' '}
                    </Text>
                  </View>
                ))}
              </View>
              <ReanimatedPressable style={[styles.button,buttonStyle]} onPress={handleSelect2}>
                <Text style={styles.buttonText}>Choisir</Text>
              </ReanimatedPressable>
            </View>
            );
        }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Comment était votre séance aujourd'hui?</Text>
      <View style={styles.moodList}>
        {moodOptions.map(option => (
          <View key={option.emoji}>
            <Pressable
              onPress={() => setSelectedMood(option)}
              key={option.emoji}
              style={[
                styles.moodItem,
                option.emoji === selectedMood?.emoji
                  ? styles.selectedMoodItem
                  : undefined,
              ]}>
              <Text style={styles.moodText}>{option.emoji}</Text>
            </Pressable>
            <Text style={styles.descriptionText}>
              {selectedMood?.emoji === option.emoji ? option.description : ' '}
            </Text>
          </View>
        ))}
      </View>
      <ReanimatedPressable style={[styles.button,buttonStyle]} onPress={handleSelect}>
        <Text style={styles.buttonText}>Choisir</Text>
      </ReanimatedPressable>
    </View>
  );
    };

const styles = StyleSheet.create({
  moodText: {
    fontSize: 24,
    color: theme.colorWhite,
  },
  moodList: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  moodItem: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 5,
  },
  selectedMoodItem: {
    borderWidth: 2,
    backgroundColor: theme.colorPurple,
    borderColor: theme.colorWhite,
  },
  descriptionText: {
    color: theme.colorPurple,
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
    fontFamily: theme.fontFamilyBold,
  },
  container: {
    borderWidth: 2,
    borderColor: theme.colorPurple,
    margin: 10,
    borderRadius: 10,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  heading: {
    fontSize: 20,
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 20,
    color: theme.colorWhite,
    fontFamily: theme.fontFamilyBold,
  },
  button: {
    backgroundColor: theme.colorPurple,
    width: 150,
    borderRadius: 20,
    marginTop: 20,
    alignSelf: 'center',
    padding: 10,
  },
  buttonText: {
    fontSize: 16,
    color: theme.colorWhite,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: theme.fontFamilyBold,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
});
