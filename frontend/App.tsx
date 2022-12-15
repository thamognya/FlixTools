import { StatusBar } from 'expo-status-bar'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { NativeWindStyleSheet } from 'nativewind'
import './styles/module/CssTailWind'
import { NavigationContainer } from '@react-navigation/native'

NativeWindStyleSheet.setOutput({
    default: 'native'
})

export default function App() {
    return (
        <NavigationContainer>
            <View className="flex-1 items-center justify-center bg-white">
                <Text> Open up App.tsx to start working on your app!</Text>
                <StatusBar style="auto" />
            </View>
        </NavigationContainer>
    )
}
