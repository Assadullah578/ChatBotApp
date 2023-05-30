import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';


const NewChat = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

    const handleSendMessage = async () => {
        if (inputText.trim() === '') return;

        const userMessage = { type: 'user', text: inputText };
        setMessages([...messages, userMessage]);
        setInputText('');

        try {
            const response = await axios.post(
                apiUrl,
                {
                    prompt: inputText,
                    max_tokens: 100,
                    temperature: 0,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`,
                    },
                }
            );

            const botMessage = { type: 'bot', text: response.data.choices[0].text.trim() };
            setMessages([...messages, botMessage]);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={messages}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={{ alignItems: item.type === 'user' ? 'flex-end' : 'flex-start' }}>
                        <Text style={{ padding: 10, marginVertical: 4, borderRadius: 4, marginRight: 4, color: 'black', backgroundColor: item.type === 'user' ? 'lightblue' : 'green' }}>
                            {item.text}
                        </Text>
                    </View>
                )}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                <TextInput
                    style={{ flex: 1, marginRight: 10, paddingVertical: 5, paddingHorizontal: 10, borderWidth: 1, borderColor: '#333' }}
                    value={inputText}
                    onChangeText={text => setInputText(text)}
                    placeholder='Type a message...'
                />
                <TouchableOpacity onPress={handleSendMessage} style={{ padding: 10, backgroundColor: '#4CAF50', borderRadius: 5 }}>
                    <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default NewChat;
