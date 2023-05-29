import React from 'react'
import { View, Image, Text, TextInput } from 'react-native';
function Clear() {
    return (
        <View className="items-center h-full">
            <Text className="text-2xl text-green-400 font-bold">Clear Conversation</Text>
            <View className="mt-[620px]">
                <TextInput className="border-2 border-gray-200 rounded-md h-10 w-[350px] " />
            </View>
        </View>
    );
}
export default Clear;