import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import Home from './Home';
function Welcome({ navigation }) {
  return (

    <ImageBackground
      source={require('../Images/Bg.png')}
      className="w-full h-full "
      resizeMode="cover"
    >

      <View className="mt-24 items-center">
        <View>
          <Image
            source={require('../Images/bot.png')}
            className="h-[290px] "
            resizeMode='contain'
          />
        </View>
        <View className="mt-28 w-[300px] ">
          <Text className="text-black text-3xl mt-4">
            What More
          </Text>
          <Text className="text-black text-3xl mt-4">
            Can I do to Help?
          </Text>
        </View>
        <TouchableOpacity className="mt-16 " onPress={() => navigation.navigate('Home')}>
          <Image source={require('../Images/Start.png')} className="h-[55px]" resizeMode='contain' />
        </TouchableOpacity>
      </View>
    </ImageBackground>


  );
}
export default Welcome;
