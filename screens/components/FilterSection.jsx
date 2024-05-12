import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Filter from './Filter'
import star from '../../assets/star.png'

const filterData = [
    {
        title: 'FUNNY',
        color: '#7cc163',
        number: '110',
        icon: star
    },
    {
        title: 'AWKWARD',
        color: '#ddb6b8',
        number: '245',
        icon: star

    },
    {
        title: 'ADULT',
        color: '#b4cf5c',
        number: '12',
        icon: star

    },
    {
        title: 'TECH',
        color: '#d9a84a',
        number: '170',
        icon: star

    },
]

export default function FilterSection() {
    return (
        <View style={{
            width: '90%',
            alignSelf: 'center'
        }}>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold'
            }}>FILTERS</Text>

            {
                filterData.map((item, idx) => {
                    return <Filter key={idx} title={item.title} icon={item.icon} color={item.color} number={item.number}></Filter>
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({})