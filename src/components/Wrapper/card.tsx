import { View,TouchableOpacity,Button } from 'react-native'
import React from 'react'
import Row from './Row'
import MText from '../Text'
import SpaceBetweenRow from './SpaceBetweenRow'
import { colors } from 'react-native-elements'
import ImageButton from '../ImageButton'

export default function Card() {
  return (
    <View style={{
        height:430,
        width:'90%',
        alignSelf:'center',
        backgroundColor:'#ffffff',
        borderRadius:25,
        top:10}}>
          <SpaceBetweenRow style={{alignSelf:'center',top:6}}>
          <Row>
            {/* <ProfileLogo/> */}
              <View>
              <MText style={{fontSize:10,fontWeight:'700',color:colors.black}}>Member+</MText>
              <MText style={{fontSize:10}}>An upgraded experience for members</MText>
            </View>
          </Row>
          </SpaceBetweenRow>
          <View style={{alignSelf:'center',top:10}}>
          <Row>
            <MText style={{fontSize:10,color:'#000000',fontWeight:'700',right: 10,}}>$ 390./ month</MText>
            <Button
              title="First week FREE"
              color="#5669FF"
            />
          </Row>
          </View>
          <View style={{alignSelf:'center',marginTop:10,right:10,}}>
            <Row>
            <TouchableOpacity style={{height:30,width:30,backgroundColor:'#5669FF',borderRadius:30}}>
              {/* <RighLogo style={{alignSelf:"center",marginTop:10}}/> */}
            </TouchableOpacity>
            <MText style={{fontSize:10,fontWeight:'400',color:'#120D26',left:8}}>See details on who will be at the event</MText>
            </Row>
          </View>
          <View style={{alignSelf:'center',marginTop:10,right:5,}}>
            <Row>
            <TouchableOpacity style={{height:30,width:30,backgroundColor:'#5669FF',borderRadius:30}}>
              {/* <RighLogo style={{alignSelf:"center",marginTop:10}}/> */}
            </TouchableOpacity>
            <MText style={{fontSize:10,fontWeight:'400',color:'#120D26',left:8}}>Secure your spot-hear about events first</MText>
            </Row>
          </View>
          <View style={{alignSelf:'center',marginTop:10,right: 13,}}>
            <Row>
            <TouchableOpacity style={{height:30,width:30,backgroundColor:'#5669FF',borderRadius:30}}>
              {/* <RighLogo style={{alignSelf:"center",marginTop:10}}/> */}
            </TouchableOpacity>
            <MText style={{fontSize:10,fontWeight:'400',color:'#120D26',left:8}}>Ad-free experience for easy browsing</MText>
            </Row>
          </View>
          <View style={{alignSelf:'center',marginTop:10,right:24}}>
            <Row>
            <TouchableOpacity style={{height:30,width:30,backgroundColor:'#5669FF',borderRadius:30}}>
              {/* <RighLogo style={{alignSelf:"center",marginTop:10}}/> */}
            </TouchableOpacity>
            <MText style={{fontSize:10,fontWeight:'400',color:'#120D26',left:8}}>Stand out with a Member+ badge</MText>
            </Row>
          </View> 
          <View style={{width:'90%',alignSelf:'center',top:10}}>
          <ImageButton
           title="Start your 7-day trial"
           />
            </View>
            <View style={{width:"100%"}}>
              <MText style={{width:'80%', color:"#120D2680",fontSize:10,fontWeight:"500",alignSelf:'center',top:20}}>Your subscription will renew automatically until canceled at the full price of 390.00 (plus tax)/month. You can cancel this renewal at any point before 27/8/2023</MText>
            </View>
      </View>
  )
}