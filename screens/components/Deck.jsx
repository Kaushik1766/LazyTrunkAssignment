import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const cardData = [
    {
        title: 'Party and fun',
        unlocked: true,
    },
    {
        title: 'Party and fun',
        unlocked: true,
    },
    {
        title: 'Party and fun',
        unlocked: false,
    },
]

export default function Deck() {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 50
        }}>
            {
                cardData.map((item, idx) => {
                    if (item.unlocked == true) {
                        return <View style={{
                            flexDirection: 'column',
                            width: '30%',
                        }} key={idx}>
                            <View key={idx} style={{
                                height: 150,
                                width: '100%',
                                backgroundColor: 'white',
                                borderRadius: 20,
                                overflow: 'hidden'

                            }}>
                                <Image style={{
                                    height: 100,
                                    width: '100%',
                                    alignSelf: 'center',
                                    gap: 5
                                }} source={require('../../assets/party.jpeg')} />
                                <Text style={{
                                    color: 'black',
                                    textAlign: 'center'
                                }}>{item.title}</Text>
                            </View>
                            <Text style={styles.cardText}>Play now</Text>
                        </View>
                    }
                    else {
                        return <>
                            <View style={{
                                flexDirection: 'column',
                                width: '30%',
                            }}>
                                <View key={idx} style={{
                                    height: 150,
                                    width: '100%',
                                    backgroundColor: 'white',
                                    borderRadius: 15,
                                    opacity: 0.5,
                                    overflow: 'hidden',
                                }}>
                                    <Image style={{
                                        height: 100,
                                        width: '100%',
                                        alignSelf: 'center',
                                        gap: 5
                                    }} source={require('../../assets/party.jpeg')} />
                                    <Text style={{
                                        color: 'black',
                                        textAlign: 'center',
                                    }}>{item.title}</Text>
                                </View>
                                <Text style={[styles.cardText, {
                                    backgroundColor: 'gray'
                                }]}>Buy Now</Text>
                            </View>
                        </>
                    }
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    cardText: {
        textAlign: 'center',
        marginTop: 15,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'white',
        padding: 4,
    },
})