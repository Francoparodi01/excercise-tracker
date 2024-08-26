import React from 'react';
import { View, Button as RNButton, StyleSheet } from 'react-native';
import { css } from '@emotion/native';
import ExerciseForm from '../components/ExcerciseForm';

const screenContainerStyle = css`
  flex: 1;
  padding: 20px;
  justify-content: center;
`;

const buttonStyle = css`
  margin-top: 20px;
`;

const AddExerciseScreen = ({ route, navigation }) => {
  const { addExercise } = route.params;

  return (
    <View style={screenContainerStyle}>
      <ExerciseForm addExercise={addExercise} />
      <RNButton
        title="Go Back"
        onPress={() => navigation.goBack()}
        style={buttonStyle}
      />
    </View>
  );
};

export default AddExerciseScreen;
