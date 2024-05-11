import React from 'react'
import { ImageBackground, Pressable, StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Deck from './components/Deck'
import PremiumDeck from './components/PremiumDeck'
import FilterSection from './components/FilterSection'

function Play({ navigation }) {
    return (
        <ImageBackground source={require('../assets/bgImg1.jpg')} style={styles.background} >
            <ScrollView>

                <View style={{
                    width: '90%',
                    alignSelf: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
                }}>
                    <Pressable onPress={() => {
                        navigation.navigate('Settings')
                    }}
                        style={{}}>
                        <Image source={require('../assets/setting.png')} style={{
                            height: 30,
                            width: 30,
                            tintColor: 'white',
                        }} />

                    </Pressable>
                    <Pressable onPress={() => {
                        navigation.navigate('Settings')
                    }}
                        style={{}}>
                        <Image source={require('../assets/setting.png')} style={{
                            height: 30,
                            width: 30,
                            tintColor: 'white',
                        }} />

                    </Pressable>
                </View>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 25,
                    fontWeight: 'bold',
                    marginTop: 30
                }}>CHOOSE DECK</Text>
                <Deck></Deck>
                <PremiumDeck></PremiumDeck>
                <Text style={{
                    alignSelf: 'flex-end',
                    textAlign: 'center',
                    padding: 4,
                    borderColor: 'white',
                    borderWidth: 2,
                    marginRight: 20,
                    marginVertical: 20,
                    borderRadius: 100,
                    fontWeight: 'bold',
                    fontSize: 10
                }}>Explore</Text>
                <FilterSection></FilterSection>
            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({

    background: {
        backgroundColor: Colors.darker,
        height: '100%',
        width: '100%',
    }
})

export default Play