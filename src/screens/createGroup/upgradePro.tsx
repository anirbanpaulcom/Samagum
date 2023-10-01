import { View, Text, SafeAreaView, TouchableOpacity,Button } from 'react-native'
import React from 'react'
import { Colors } from '../../styles'
import Row from '../../components/Row'
import MText from '../../components/Text'
import { ScrollView } from 'react-native-gesture-handler'
import Card from '../../components/Wrapper/card';
import SettingsHeader from '../settings/container/SettingsHeader'
import ImageButton from '../../components/ImageButton'

export default function UpgraderProScreen() {
  return (
   <SafeAreaView style={{flex:1,backgroundColor:Colors.transparent,paddingBottom:50}}>
    <SettingsHeader title='Upgrade' />

        <ImageButton
           title="START YOUR FIRST GROUP"
        />
   </SafeAreaView>
  )
}