import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { css } from '@emotion/native';
import ExerciseCard from './ExerciseCard';

const scrollViewStyle = css`
  padding: 10px;
`;

const ExerciseList = ({ exercises }) => {
  return (
    <ScrollView style={scrollViewStyle}>
      {exercises.map((exercise, index) => (
        <ExerciseCard key={index} exercise={exercise} />
      ))}
    </ScrollView>

  );
};

export default ExerciseList;
