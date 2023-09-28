import { View, Text, ScrollView, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Row, SpaceBetweenRow } from '../../../components/Wrapper';
import MText from '../../../components/Text';
import Button from '../../../components/Button';
import Svg from '../../../assets/svg';
import images from '../../../assets/images';
import { Styles } from '../../../styles';
import styles from '../styles';
import { Size } from '../../../constants';
import HomeSectionTitle from './HomeSectionTitle';

interface FeatureGroupProps {
    title: string;
    data: any;
}

export default function FeatureGroup({ title, data,navigationPage }: FeatureGroupProps) {
    return (
        <View>
            <HomeSectionTitle data={data} title={title} navigationPage={navigationPage} />

            <FlatList
                data={data}
                horizontal
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.card}>
                            <View>
                                <Image
                                    source={{ uri: item?.image }} resizeMode="stretch"
                                    style={{ width: Size.wWidth / 1.6, height: 140 }}
                                />
                            </View>
                            <View style={{ paddingHorizontal: 8 }}>
                                <MText style={styles.title}>
                                    {/* ISGSITS Alumni Chapt... */}
                                    {item?.title}
                                </MText>
                                <SpaceBetweenRow style={Styles.marginTop}>
                                    <Row>
                                        <Svg.LocationSmallIcon />
                                        <MText style={styles.EventAddress}>36 Guild Street London...</MText>
                                    </Row>
                                </SpaceBetweenRow>
                                <Row style={{justifyContent:"center", marginVertical:10}}>
                                <TouchableOpacity style={myStyles.Button}>
                                    <MText style={{color:"#5669FF", fontSize:15, fontWeight:"500"}}>Join</MText>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Svg.ShareIcon />
                                </TouchableOpacity>    
                                </Row>

                            </View>
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={(_, indx) => indx.toString()}
                ListEmptyComponent={
                    <View style={{ width: Size.wWidth, height: 60, ...Styles.centered }}>
                        <MText>No Data Found</MText>
                    </View>
                }
            />
        </View>
    )
}

const ShowDateComponent = () => {
    return (
        <SpaceBetweenRow style={{ position: "absolute", top: 8, paddingHorizontal: 10, width: "100%" }}>
            <Row style={myStyles.dateBlock}>
                <Svg.UsersIcon />
                <MText style={myStyles.members}>14 Members</MText>
            </Row>

            <Row>
                <View style={myStyles.savedBlock}>
                    <Svg.StarIcon />
                </View>
                <View style={{ width: 8 }} />
                <View style={myStyles.savedBlock}>
                    <Svg.ShareIcon />
                </View>
            </Row>
        </SpaceBetweenRow>
    );
}

const myStyles = StyleSheet.create({
    dateBlock: {
        width: 116,
        height: 37,
        borderRadius: 10,
        backgroundColor: "#FFF6F2",
        ...Styles.centered,
    },
    members: {
        fontSize: 12,
        fontWeight: "400",
        color: "#747688",
        textAlign: "center",
        marginLeft: 4
    },
    savedBlock: {
        width: 30,
        height: 30,
        borderRadius: 7,
        backgroundColor: "#FFF",
        ...Styles.centered,
    },
    Button:{
        width: 170,
        height: 35,
        backgroundColor: "#5669FF1A",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        marginHorizontal:15
    }
})