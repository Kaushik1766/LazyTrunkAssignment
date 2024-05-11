import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'

export default function PremiumDeck() {
    return (
        <ImageBackground source={require('../../assets/wave2.jpg')} style={{
            marginTop: '15%',
            borderRadius: 20,
            borderColor: 'white',
            borderWidth: 2,
            // width: '90%',
            alignSelf: 'center',
            // height: 100,
            overflow: 'hidden',
            padding: 10
        }}>
            <View style={{
                width: Dimensions.get('screen').width * .85,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10
            }}>
                <Image style={{
                    height: 50,
                    width: 50
                }} source={require('../../assets/lock.png')} />
                <Text style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: 20,
                    width: '60%',
                }}>EXPLORE PREMIUM DECKS </Text>
                <Image style={{
                    height: 90,
                    width: 65,
                    borderRadius: 15,
                    borderColor: 'black',
                    borderWidth: 2,
                }} source={require('../../assets/party.jpeg')}></Image>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({})