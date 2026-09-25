import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, ImageSourcePropType } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Kiểu union cho 5 quả bóng
type BallFace = 1 | 2 | 3 | 4 | 5;

// Map các ảnh tương ứng
const ballImages: Record<BallFace, ImageSourcePropType> = {
  1: require('../assets/ball/ball1.png'),
  2: require('../assets/ball/ball2.png'),
  3: require('../assets/ball/ball3.png'),
  4: require('../assets/ball/ball4.png'),
  5: require('../assets/ball/ball5.png'),
};

// Hàm random từ 1–5
const roll = (): BallFace => (Math.floor(Math.random() * 5) + 1) as BallFace;

export default function App() {
  const [currentBall, setCurrentBall] = useState<BallFace>(1);

  const rollBall = () => {
    setCurrentBall(roll());
  };

  return (
    <TouchableOpacity style={styles.container} onPress={rollBall} activeOpacity={0.9}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Magic 8 Ball</Text>

      <View style={styles.ballContainer}>
        <Image source={ballImages[currentBall]} style={styles.ball} />
      </View>

      <Text style={styles.instruction}>Tap anywhere to reveal your fortune!</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 100,
    color: '#004d40',
  },
  ballContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ball: {
    width: 200,
    height: 200,
  },
  instruction: {
    marginTop: 100,
    fontSize: 16,
    color: '#006064',
  },
});
