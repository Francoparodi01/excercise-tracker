import React, { useState } from 'react';
import { Button as RNButton, View, StyleSheet } from 'react-native';
import { css } from '@emotion/native';
import ExerciseList from '../components/ExcerciseList';

// Estilos usando Emotion
const containerStyle = css`
  flex: 1;
  padding: 20px;
  background-color: #fff;
`;

const HomeScreen = ({ navigation }) => {
  const [exercises, setExercises] = useState([]);

  const addExercise = (exercise) => {
    setExercises([...exercises, exercise]);
  };

  return (
    <View style={containerStyle}>
      <ExerciseList exercises={exercises} />
      <RNButton
        title="Add Exercise"
        onPress={() => navigation.navigate('AddExercise', { addExercise })}
      />
    </View>
  );
};

export default HomeScreen;
