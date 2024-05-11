import { Image, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function Filter({ title, number, icon, color }) {
    const [enabled, setEnabled] = useState(false)
    return (
        <View style={{
            backgroundColor: color,
            borderRadius: 10,
            padding: 15,
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10
        }}>
            <Image style={{
                height: 50,
                width: 50
            }} source={icon} />
            <View>
                <Text style={{
                    color: '#1a3b5b',
                    fontWeight: 'bold',
                    fontSize: 20
                }}>
                    {title}
                </Text>
                <Text>
                    {number} CARDS
                </Text>
            </View>
            <Switch
                onChange={() => setEnabled(prev => !prev)}
                value={enabled}
            ></Switch>
        </View>
    )
}

const styles = StyleSheet.create({})