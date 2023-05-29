import React from 'react'
import { Image, Text, View } from 'react-native';
function ChatButton(props) {
    return (
        <View className=" border-2 border-blue-200 bg-blue-100 rounded-lg items-center justify-center h-[150px] w-[140px] space-y-8">
            <View className="bg-blue-400 rounded-full items-center justify-center h-[50px] w-[50px]">
                <Image source={require('../Images/chat.png')} className="h-[30px] w-[30px] " resizeMode='cover' />
            </View>
            <Text className="text-black px-6 font-bold">{props.btntxt}</Text>
        </View>
    );
}

export default ChatButton;