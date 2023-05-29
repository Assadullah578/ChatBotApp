import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import DrawerNavigation from '../Navigation/DrawerNavigation';
import ChatButton from '../components/ChatButton';
function Home({ navigation }) {
   return (

      <ImageBackground source={require('../Images/Bg.png')} className="w-full h-full " resizeMode="cover">
         <View className="mt-20 items-center flex-1">
            <Image source={require('../Images/bot.png')} className="h-[290px] " resizeMode='contain' />
            <View className="mt-5 w-[335px] ">
               <Text className="text-black text-2xl mt-4">
                  Better Method of creating
               </Text>
               <Text className="text-black text-2xl ">
                  and communicating
               </Text>
            </View>
            <View className=" mt-6">
               <TouchableOpacity className=" " onPress={() => navigation.navigate('DrawerNavigation')}>
                  <ChatButton btntxt="Start New Chat" />
               </TouchableOpacity>
            </View>

            <View className="mt-[65px]">
               <Image source={require('../Images/footer.png')} className="h-[100px] w-[430px]" resizeMode='contain' />
            </View>
            <TouchableOpacity className="absolute mt-[600px]" >
               <View className="bg-blue-400 rounded-full h-[70px] w-[70px] items-center justify-center" >
                  <Image source={require('../Images/homeIcon.png')} className="h-[50px] w-[50px] " resizeMode='contain' />
               </View>
            </TouchableOpacity>
         </View>
      </ImageBackground>


   );
}
export default Home;
