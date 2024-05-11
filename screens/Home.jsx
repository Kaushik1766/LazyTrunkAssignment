import React from 'react'
import { Button, Image, ImageBackground, Pressable, ScrollViewBase, StyleSheet, Text, View } from 'react-native'
import { Svg, Path } from 'react-native-svg'
import { Colors } from 'react-native/Libraries/NewAppScreen'

function Home({ navigation }) {
    return (
        <ImageBackground source={require('../assets/bgImg1.jpg')} style={styles.background}>
            <View style={styles.container}>
                <View style={styles.content}>

                    <Pressable onPress={() => {
                        navigation.navigate('Settings')
                    }}
                        style={styles.settingsCogContainer}>
                        <Image source={require('../assets/setting.png')} style={{
                            height: 30,
                            width: 30,
                            tintColor: 'white',
                        }} />

                    </Pressable>

                    <Text style={[styles.title, {
                        color: '#9eda3c'
                    }]}>NEVER</Text>
                    <Text style={[styles.title, {
                        color: 'white'
                    }]}>HAVE I</Text>
                    <Text style={[styles.title, {
                        color: '#eb7171'
                    }]}>EVER</Text>

                    {/* play options */}
                    <View style={styles.playOptions}>

                        <Pressable style={styles.buttonOuter}
                            onPress={() => navigation.navigate('Play')}
                        >
                            <ImageBackground style={styles.buttonImage} source={require('../assets/wave1.jpg')} >
                                <Image style={{
                                    height: 30,
                                    width: 30
                                }} source={require('../assets/playButton.png')} />
                                <Text style={{
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    color: 'black',
                                    fontSize: 25,
                                }}>PLAY</Text>
                            </ImageBackground>
                        </Pressable>

                        <Pressable style={styles.buttonOuter}>
                            <ImageBackground style={styles.buttonImage} source={require('../assets/wave2.jpg')} >
                                <Image style={{
                                    height: 30,
                                    width: 30
                                }} source={require('../assets/playButton.png')} />
                                <Text style={{
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    color: 'black',
                                    fontSize: 18,
                                }}>MULTIPLAYER</Text>
                            </ImageBackground>
                        </Pressable>
                        <Pressable style={styles.buttonOuter}>
                            <ImageBackground style={styles.buttonImage} source={require('../assets/wave3.jpg')} >
                                <Image style={{
                                    height: 30,
                                    width: 30
                                }} source={require('../assets/playButton.png')} />
                                <Text style={{
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    color: 'black',
                                    fontSize: 18,
                                }}>HOW TO PLAY</Text>
                            </ImageBackground>
                        </Pressable>
                    </View>

                    <View style={{
                        width: '90%',
                        alignSelf: 'center',
                        marginTop: 40,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>

                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 3,
                        }}>
                            <Image style={{
                                width: 30,
                                height: 30,
                                tintColor: 'white'
                            }} source={require('../assets/rocket.png')} />
                            <Text style={styles.footerText}>Follow Us</Text>
                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 3,
                        }}>
                            <Image style={{
                                width: 30,
                                height: 30,
                                tintColor: 'white'
                            }} source={require('../assets/pacman.png')} />
                            <Text style={styles.footerText}>More Games</Text>
                        </View>


                    </View>
                </View>

            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    footerText: {
        borderWidth: 2,
        borderColor: 'white',
        padding: 4,
        verticalAlign: 'middle',
        textAlign: 'center',
        borderRadius: 80,
        fontSize: 12
    },
    buttonImage: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    buttonOuter: {
        backgroundColor: 'white',
        borderRadius: 10,
        height: 80,
        width: 200,
        overflow: 'hidden',
        alignSelf: 'center',
        marginVertical: 10
    },
    background: {
        backgroundColor: Colors.darker,
        height: '100%',
        width: '100%',
    },
    content: {
        margin: '8%',
        display: 'flex',
        flexDirection: 'column'
    },
    settingsCogContainer: {
        alignSelf: 'flex-end'
    },
    title: {
        margin: '2%',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    playOptions: {
        display: 'flex',
        flexDirection: 'column',
        marginVertical: 50,
    }
})

export default Home