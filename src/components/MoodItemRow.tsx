/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Pressable, LayoutAnimation } from 'react-native';
import format from 'date-fns/format';
import { MoodOptionWithTimestamp } from '../types';
import { theme } from '../theme';
import { useAppContext } from '../App.provider';

type MoodItemRowProps = {
  item: MoodOptionWithTimestamp,
};


export const MoodItemRow: React.FC<MoodItemRowProps> = ({ item }) => {
    const appContext = useAppContext();

    const handleDelete = React.useCallback(() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        appContext.handleDeleteMood(item);
        }, [appContext, item]);
    return (
    <View style={styles.moodItem}>
      <View style={styles.iconAndDescription}>
        <Text style={styles.moodValue}>{item.mood.emoji}</Text>
        <Text style={styles.moodDescription}>{item.mood.description}</Text>
      </View>
      <Text style={styles.moodDate}>
        {format(new Date(item.timestamp), "dd MMM, yyyy 'at' h:mmaaa")}
      </Text>
      <Pressable hitSlop={16} onPress={(handleDelete)}>
            <Text style={styles.deleteText}>Effacer</Text>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  moodValue: {
    textAlign: 'center',
    fontSize: 40,
    marginRight: 10,
  },
  moodDate: {
    textAlign: 'center',
    color: theme.colorWhite,
  },
  moodItem: {
    backgroundColor: 'black',
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moodDescription: {
    fontSize: 18,
    color: theme.colorPurple,
    fontWeight: 'bold',
  },
  iconAndDescription: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteText: {
    color: theme.colorBlue,
    fontFamily: theme.fontFamilyLight,
  },
});