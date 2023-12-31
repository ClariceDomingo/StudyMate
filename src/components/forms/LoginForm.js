// LoginForm.js

import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Perform login logic and call onLogin callback
        onLogin({ username, password });
    };

    return (
        <View>
        <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
        <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
        <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

export default LoginForm;
