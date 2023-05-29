import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
function ThemeButton() {
    const [theme, setTheme] = useState(false);
    return (
        <TouchableOpacity className="bg-white px-8 py-4 rounded-lg" onPress={setTheme(!theme)}>
            <Text className="text-xl text-black">{theme ? "Light" : "Dark"}</Text>
        </TouchableOpacity>
    );
}

export default ThemeButton;