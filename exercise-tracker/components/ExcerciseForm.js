import React, { useState } from 'react';
import { Button as RNButton, TextInput as RNTextInput, View, StyleSheet } from 'react-native';
import { css } from '@emotion/native';

// Función para manejar los estilos en Emotion
const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    width: '100%',
  },
});

const ExerciseForm = ({ addExercise }) => {
  const [name, setName] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = () => {
    addExercise({ name, sets, reps, weight });
    setName('');
    setSets('');
    setReps('');
    setWeight('');
  };

  return (
    <View style={styles.formContainer}>
      <RNTextInput
        style={styles.input}
        placeholder="Exercise Name"
        value={name}
        onChangeText={setName}
      />
      <RNTextInput
        style={styles.input}
        placeholder="Sets"
        value={sets}
        onChangeText={setSets}
        keyboardType="numeric"
      />
      <RNTextInput
        style={styles.input}
        placeholder="Reps"
        value={reps}
        onChangeText={setReps}
        keyboardType="numeric"
      />
      <RNTextInput
        style={styles.input}
        placeholder="Weight (kg)"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />
      <RNButton title="Add Exercise" onPress={handleSubmit} />
    </View>
  );
};

export default ExerciseForm;
