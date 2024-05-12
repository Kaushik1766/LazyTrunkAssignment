import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, View, Image, Pressable, Button, Switch } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

function Settings() {

    const [enabled, setEnabled] = useState(false)
    return (
        <ImageBackground source={require('../assets/bgImg1.jpg')} style={styles.background}>
            {/* heading */}
            <View style={styles.settingsHeader}>
                <Image style={{
                    height: 30,
                    width: 30,
                    tintColor: 'white'
                }} source={require('../assets/setting.png')} />
                <Text>SETTINGS</Text>
            </View>

            <View style={{
                marginTop: 35,
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
                alignSelf: 'center'
            }}>
                <Pressable style={{
                    borderRadius: 100,
                    backgroundColor: '#0B2938',
                    padding: 8,
                    alignSelf: 'flex-start',

                }}>
                    <Image style={{
                        height: 30,
                        width: 30,
                        tintColor: 'white'
                    }} source={require('../assets/sound.png')} />
                </Pressable>
                <Pressable style={{
                    borderRadius: 100,
                    backgroundColor: '#0B2938',
                    padding: 8,
                    alignSelf: 'flex-start',

                }}>
                    <Image style={{
                        height: 30,
                        width: 30,
                        tintColor: 'white'
                    }} source={require('../assets/iIcon.png')} />
                </Pressable>
            </View>

            {/* options menu */}
            <View style={{
                marginHorizontal: 15,
                marginTop: 40,
                gap: 20
            }}>
                <Pressable style={[styles.setting, {
                    width: '100%',
                    backgroundColor: '#9eda3c',
                }]}>
                    <Text style={styles.settingText}>Languages</Text>
                    <Image style={{
                        height: 30,
                        width: 30
                    }} source={require('../assets/rightArrow.png')} />
                </Pressable>

                <Pressable style={[styles.setting, {
                    width: '80%',
                    backgroundColor: '#ee6e6e',

                }]}>
                    <View style={{
                        flexDirection: 'row',
                        gap: 10,
                    }}>
                        <Image style={{
                            height: 30,
                            width: 30
                        }} source={require('../assets/star.png')} />
                        <Text style={styles.settingText}>Kid Mode</Text>
                    </View>

                    <Switch
                        onChange={() => setEnabled(prevState => !prevState)}
                        value={enabled} />
                </Pressable>
                <Pressable style={[styles.setting, {
                    width: '60%',
                    backgroundColor: '#3bb4b4',
                }]}>
                    <Image style={{
                        height: 30,
                        width: 30
                    }} source={require('../assets/dollar.png')} />
                    <Text style={styles.settingText}>Purchases</Text>
                    <Image style={{
                        height: 30,
                        width: 30
                    }} source={require('../assets/rightArrow.png')} />
                </Pressable>
            </View>

            {/* footer */}
            <View style={{
                width: '90%',
                alignSelf: 'center',
                marginTop: 40,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: '30%'
            }}>

                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 3,
                    backgroundColor: '#0B2938',
                    padding: 4,
                    borderRadius: 6
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
                    backgroundColor: '#0B2938',
                    padding: 4,
                    borderRadius: 6
                }}>
                    <Image style={{
                        width: 30,
                        height: 30,
                        tintColor: 'white'
                    }} source={require('../assets/pacman.png')} />
                    <Text style={styles.footerText}>More Games</Text>
                </View>


            </View>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    footerText: {
        padding: 4,
        verticalAlign: 'middle',
        textAlign: 'center',
        fontSize: 12
    },
    settingText: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    setting: {
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    settingsHeader: {
        flexDirection: 'row',
        marginTop: 45,
        backgroundColor: '#0B2938',
        paddingVertical: 25,
        paddingHorizontal: 20,
        gap: 10,
        alignItems: 'center'
    },
    background: {
        backgroundColor: Colors.darker,
        height: '100%',
        width: '100%',
    }
})

export default Settings