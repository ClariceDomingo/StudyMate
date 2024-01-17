import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { Svg, Circle, G, Text as SvgText } from 'react-native-svg';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [targetTime, setTargetTime] = useState(0);
  const [inputHours, setInputHours] = useState('');
  const [inputMinutes, setInputMinutes] = useState('');
  const [inputSeconds, setInputSeconds] = useState('');
  const [textColor, setTextColor] = useState('black');

  useEffect(() => {
    let interval;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      setTextColor('red'); // Change the text color to red when the countdown starts
    } else {
      clearInterval(interval);
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleStartStop = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsActive(false);
    setTextColor('black'); // Change the text color back to black when reset
  };

  const handleTimeChange = () => {
    const hours = parseInt(inputHours, 10) || 0;
    const minutes = parseInt(inputMinutes, 10) || 0;
    const seconds = parseInt(inputSeconds, 10) || 0;

    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    setTargetTime(totalSeconds);
    setSeconds(totalSeconds);
    setIsActive(false);
    setTextColor('black'); // Change the text color back to black when setting a new time
  };

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const remainingSeconds = timeInSeconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(
      remainingSeconds
    ).padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Svg height="200" width="200">
        <G origin="100,100">
          <Circle
            cx="100"
            cy="100"
            r="90"
            strokeWidth="15"
            stroke="#3498db"
            fill="transparent"
          />
          <SvgText x="50%" y="50%" textAnchor="middle" fontSize="40" fill={textColor}>
            {formatTime(seconds)}
          </SvgText>
        </G>
      </Svg>

      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Hours: </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={inputHours.toString()}
          onChangeText={(text) => setInputHours(text)}
        />
        <Text style={styles.labelText}>Minutes: </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={inputMinutes.toString()}
          onChangeText={(text) => setInputMinutes(text)}
        />
        <Text style={styles.labelText}>Seconds: </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={inputSeconds.toString()}
          onChangeText={(text) => setInputSeconds(text)}
        />


      </View>

      <View style={styles.buttonContainer}>
        <Button
          title={isActive ? 'Pause' : 'Start'}
          onPress={handleStartStop}
          color={isActive ? '#FF6347' : '#008000'}
        />
        <Button title="Reset" onPress={handleReset} />
        <Button title="Set" onPress={handleTimeChange} color={'#fa2600'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 50,
  },
  input: {
    height: 50,
    width: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 8,
    fontSize: 30,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '60%',
    height: '20%',
    marginTop: 10,
  },
  labelText: {
    fontSize: 20,
  }
});

export default Timer;