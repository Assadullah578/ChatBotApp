import React from 'react'
import { View, Image, Text, TextInput } from 'react-native';
function NewChat() {
    return (
        <View className="items-center h-full">
            <Text className="text-2xl text-green-400 font-bold">Chat2</Text>
            <View className="mt-[620px] flex-row">
                <TextInput className="border-2 border-gray-200 rounded-md h-10 w-[330px] " />
                <Image source={require('../Images/Send.png')} className="h-10 w-10 ml-2" />
            </View>
        </View>
    );
}
export default NewChat;