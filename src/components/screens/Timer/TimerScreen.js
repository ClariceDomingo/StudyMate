import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Modal, TouchableHighlight } from 'react-native';
import { Svg, Circle, G, Text as SvgText } from 'react-native-svg';
import { Audio } from 'expo-av';
import { NativeEventEmitter, NativeModules } from 'react-native';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [targetTime, setTargetTime] = useState(0);
  const [inputHours, setInputHours] = useState('');
  const [inputMinutes, setInputMinutes] = useState('');
  const [inputSeconds, setInputSeconds] = useState('');
  const [textColor, setTextColor] = useState('black');
  const [sound, setSound] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      setTextColor('black');
    } else if (isActive && seconds === 0) {
      clearInterval(interval);
      setIsActive(false);
      setTextColor('black');
      playSound();
      setModalVisible(true); // Show the modal when the countdown reaches zero
    } else {
      clearInterval(interval);
      setIsActive(false);
    }

    return () => {
      clearInterval(interval);
      sound && sound.unloadAsync();
    };
  }, [isActive, seconds]);

  const handleStartStop = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsActive(false);
    setTextColor('black');
    setModalVisible(false); // Close the modal when the timer is reset
  };

  const handleTimeChange = () => {
    const hours = parseInt(inputHours, 10) || 0;
    const minutes = parseInt(inputMinutes, 10) || 0;
    const seconds = parseInt(inputSeconds, 10) || 0;

    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    setTargetTime(totalSeconds);
    setSeconds(totalSeconds);
    setIsActive(false);
    setTextColor('black');
  };

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const remainingSeconds = timeInSeconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(
      remainingSeconds
    ).padStart(2, '0')}`;
  };

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../../../../assets/raw/alarm.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  };

  const stopSound = async () => {
    setModalVisible(false);
    sound && (await sound.stopAsync());
  };

  return (
    <View style={styles.container}>
      <Svg height="350" width="350">
        <G origin="500,500">
          <Circle
            cx="175"
            cy="175"
            r="150"
            strokeWidth="4"
            stroke="#008B8B"
            fill="transparent"
          />
          <SvgText x="50%" y="50%" textAnchor="middle" fontSize="40" fill={textColor}>
            {formatTime(seconds)}
          </SvgText>
        </G>
      </Svg>

      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Hrs: </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={inputHours.toString()}
          onChangeText={(text) => setInputHours(text)}
        />
        <Text style={styles.labelText}>Min: </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={inputMinutes.toString()}
          onChangeText={(text) => setInputMinutes(text)}
        />
        <Text style={styles.labelText}>Sec: </Text>
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
          color={isActive ? '#626262' : '#008B8B'}
        />
        <Button title="Set" onPress={handleTimeChange} color={'#008B8B'} />
        <Button title="Reset" onPress={handleReset} color={"#D24545"}/>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          console.log('Modal has been closed.');
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Session is Done!</Text>
            <Button title="STOP" onPress={stopSound} color={"#008B8B"} />
          </View>
        </View>
      </Modal>
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
    height: 40,
    width: 50,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 8,
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '60%',
    height: '20%',
    marginTop: 10,
  },

  btnButton: { 
    height: 30,
    borderRadius: 20,
  },

  labelText: {
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 30,
    alignItems: 'center',
    height: 150,
    width: 200,
  },
  modalText: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Timer;
