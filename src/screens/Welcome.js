import React, { useState, useEffect } from 'react';
import { Animated, Easing, View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import Home from './Home';

function Welcome({ navigation }) {
  const [scaleValue, setScaleValue] = useState(new Animated.Value(1));

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.2, // Increase the scale to 2
          duration: 1300,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1, // Decrease the scale back to 1
          duration: 1300,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  const animatedStyle = {
    transform: [{ scale: scaleValue }],
  };

  return (
    <ImageBackground
      source={require('../Images/Bg.png')}
      style={{ width: '100%', height: '100%' }}
      resizeMode="cover"
    >

      <View style={{ marginTop: 80, alignItems: 'center' }}>
        <Animated.View className="" style={[animatedStyle]}>
          <ImageBackground
            source={require('../Images/Circle.png')}
            resizeMode="contain"
            className=" h-[300px] w-[300px] "
          >

            <Image
              source={require('../Images/bot.png')}
              className="h-[250px] w-[250px] ml-[25px] mt-[30px]"
              resizeMode='contain'
            />
          </ImageBackground>
        </Animated.View>
        <View style={{ marginTop: 200, width: 300 }}>
          <Text style={{ color: 'black', fontSize: 24, marginTop: 4 }}>
            What More
          </Text>
          <Text style={{ color: 'black', fontSize: 24, marginTop: 4 }}>
            Can I do to Help?
          </Text>
        </View>
        <TouchableOpacity style={{ marginTop: 16 }} onPress={() => navigation.navigate('Home')}>
          <Image source={require('../Images/Start.png')} style={{ height: 55 }} resizeMode='contain' />
        </TouchableOpacity>
      </View>

    </ImageBackground>
  );
}

export default Welcome;
