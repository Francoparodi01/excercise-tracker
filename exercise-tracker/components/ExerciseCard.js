import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { css } from '@emotion/native';

// Estilos usando Emotion
const cardContainerStyle = css`
  padding: 15px;
  margin: 10px;
  background-color: #f0f0f0;
  border-radius: 10px;
`;

const exerciseNameStyle = css`
  font-size: 18px;
  font-weight: bold;
`;

const detailsTextStyle = css`
  font-size: 14px;
`;

const ExerciseCard = ({ exercise }) => {
  return (
    <View style={cardContainerStyle}>
      <Text style={exerciseNameStyle}>{exercise.name}</Text>
      <Text style={detailsTextStyle}>{exercise.sets} sets of {exercise.reps} reps</Text>
      <Text style={detailsTextStyle}>{exercise.weight} kg</Text>
    </View>
  );
};

export default ExerciseCard;
