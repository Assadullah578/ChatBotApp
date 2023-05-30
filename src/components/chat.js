import React, { useState } from 'react'
import { View, Image, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

function NewChat() {
    const [data, setData] = useState([]);
    const apiKey = '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';
    const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions'
    const [textInput, setTextInput] = useState('');

    const handleSend = async () => {
        const prompt = textInput
        const response = await axios.post(apiUrl, {
            prompt: prompt,
            max_tokens: 1024,
            temperature: 0.5,
        }, {
            headers: {
                'content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            }
        });
        const text = response.data.choices[0].text.trim();
        setData([...data, { type: 'user', 'text': textInput }, { type: 'bot', 'text': text }]);
        setTextInput('');

    }

    return (
        <View className="items-center h-full">
            <Text className="text-2xl text-green-400 font-bold">Chat2</Text>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <Text style={{ fontWeight: 'bold', color: item.type === 'user' ? 'green' : 'red' }}>{item.type === 'user' ? 'Ninza' : 'Bot'}</Text>
                        <Text >{item.text}</Text>
                    </View>
                )}
            />
            <View className="flex-row ">
                <TextInput
                    className="w-[300px] h-12 border-2 border-gray-400 rounded-md mb-3 text-black text-lg placeholder:text-black"
                    value={textInput}
                    onChangeText={text => setTextInput(text)}
                    placeholder='Ask Me Anything'

                />


                <TouchableOpacity onPress={handleSend} className="">
                    <Image source={require('../Images/Send.png')} className="h-10 w-10 ml-2 mt-1" />
                </TouchableOpacity>
            </View>
        </View>

    );
}
export default NewChat;