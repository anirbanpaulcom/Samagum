import { View, Text, ScrollView, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Row, SpaceBetweenRow } from '../../../components/Wrapper';
import MText from '../../../components/Text';
import Svg from '../../../assets/svg';
import images from '../../../assets/images';
import { Styles } from '../../../styles';
import styles from '../styles';
import { Size } from '../../../constants';
import HomeSectionTitle from './HomeSectionTitle';
import { useNavigation } from '@react-navigation/native';

interface AttendingEventsProps {
    title: string;
    data: any;
}

export default function AttendingEvents({ title, data, navigationPage}: AttendingEventsProps) {
    const navigation = useNavigation();

    const [isOnline, setIsOnline] = useState(false);
     
    useEffect(()=>{
        setIsOnline(data?.is_online);
    })




    return (
        <View>
            <HomeSectionTitle title={title} data={data} navigationPage={navigationPage}/>

            <FlatList
                data={data}
                horizontal
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.card}
                            onPress={() => { navigation?.navigate("EventDetailScreen", { eventData: data }); }}
                        >
                            <View>
                                <Image
                                    source={{ uri: item?.image }} resizeMode="stretch"
                                    style={{ width: Size.wWidth / 1.6, height: 140 }}
                                />
                                <ShowDateComponent />
                            </View>
                            <View style={{ paddingHorizontal: 8 }}>
                                <MText style={styles.title}>
                                    {/* International Band Mu... */}
                                    {item?.title}
                                </MText>
                                <MText style={myStyles.text}>Close Friends Group</MText>
                                {isOnline &&
                                 <Row style={{marginVertical:5}}>
                                    <Svg.LiveIcon />
                                    {isOnline ? (
                                    <MText style={styles.OnlineEvent}>Online Event</MText>
                                    ) : (
                                        <MText style={styles.OnlineEvent}>Offline Event</MText>
                                    )
                                   }
                                </Row>
                               }
                                <View style={{justifyContent:"center", marginVertical:5}}>
                                <Row>
                                <TouchableOpacity style={myStyles.attendButton}>
                                    <MText style={{color:"#5669FF", fontSize:15, fontWeight:"500"}}>Attend</MText>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Svg.ShareIcon />
                                </TouchableOpacity>
                                </Row>
                                </View>

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
            <View style={myStyles.dateBlock}>
                <MText style={myStyles.date}>10</MText>
                <MText style={myStyles.month}>JUNE</MText>
            </View>

            <Row>
                <View style={{ width: 8 }} />
                <TouchableOpacity style={myStyles.savedBlock}>
                    <Svg.Pin />
                </TouchableOpacity>
            </Row>
        </SpaceBetweenRow>
    );
}

const myStyles = StyleSheet.create({
    dateBlock: {
        width: 45,
        height: 45,
        borderRadius: 10,
        backgroundColor: "#FFF6F2",
        ...Styles.centered,
    },
    date: {
        fontSize: 18,
        fontWeight: "700",
        color: "#F0635A",
        textAlign: "center",
    },
    month: {
        fontSize: 10,
        fontWeight: "400",
        color: "#F0635A",
        textAlign: "center",
        marginTop: -4
    },
    savedBlock: {
        width: 30,
        height: 30,
        borderRadius: 7,
        backgroundColor: "#FFF",
        ...Styles.centered,
    },
    attendButton :{
        width: 170,
        height: 35,
        backgroundColor: "#5669FF1A",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        marginHorizontal:15
    },
    text:{
       fontSize:12,
       fontWeight:"400",
       marginVertical:5
    }
})