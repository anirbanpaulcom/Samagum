import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Container, Row, SpaceBetweenRow } from '../../components/Wrapper'
import EventsHeader from '../events/container/EventsHeader'
import images from '../../assets/images'
import MText from '../../components/Text'
import { Colors,Styles } from '../../styles'
import { Size } from '../../constants'
import CustomScroll from '../../components/CustomScroll'
import { useNavigation } from '@react-navigation/native'
import Button from '../../components/Button'
import Svg from '../../assets/svg'
import { fetchMyAttendingEvents } from '../../API/api'

export default function AttendingEventsScreen() {
    const navigation = useNavigation();

      const [data, setData]=useState('');


    useEffect(() => {
        fetchMyAttendingEvents((res) => {
            if (res !== null && res?.success?.toString() === "true") {
                setData(res?.data)
            }
        });
    });    

    return (
        <Container>
            <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
            <EventsHeader pageName={"I’m Attending"}/>

            <CustomScroll>
                {data && data.map((data, indx) => {
                    return (
                        <Row style={styles.groupCard} key={indx}>
                            <Image
                                source={{ uri: data?.image }} resizeMode="stretch"
                                style={{ width: 100, height: 110 }}
                            />
                            <View style={{ paddingHorizontal: 8, width: Size.wWidth / 1.1 - 115, marginLeft: 5 }}>
                                <SpaceBetweenRow>
                                    <MText style={styles.dateNTime}>
                                    {data.start_date}   {data.start_time}
                                    </MText>
                                    <Button
                                        SvgIcon={<Svg.Pin />}
                                        background='#7476881A'
                                        style={styles.savedButton}
                                    />
                                </SpaceBetweenRow>
                                <MText style={styles.groupCardTitle}>
                                  {data?.title}
                                </MText>
                                <Row style={{ marginVertical: 4, marginTop: 8 }}>
                                    <Svg.LocationSmallIcon />
                                    <MText style={styles.EventAddress}>
                                        Radius Gallery • Santa Cruz, CA
                                    </MText>
                                </Row>
                                <SpaceBetweenRow style={{ paddingRight: 6, marginTop: 0 }}>
                                    <MText style={styles.EventAddress}>
                                        • 50 Going
                                    </MText>
                                    <Svg.ShareIcon/>
                                </SpaceBetweenRow>
                            </View>
                        </Row>
                    );
                })}
            </CustomScroll>
        </Container>
    )
}

const styles = StyleSheet.create({
    groupCard: {
        padding: 10, borderRadius: 14,
        elevation: 9,
        shadowColor: "#CCC",
        backgroundColor: "#fff",
        marginVertical: 8,
        marginHorizontal: 20,
    },
    groupCardTitle: {
        fontSize: 14,
        fontWeight: "500",
        color: "#120D26",
    },
    EventAddress: {
        fontSize: 12,
        fontWeight: "400",
        color: "#747688",
        marginLeft: 4
    },
    title: {
        fontSize: 18,
        fontWeight: "500",
        color: "#000",
        marginTop: 8,
    },
    OnlineEvent: {
        fontSize: 12,
        fontWeight: "400",
        color: "#3F38DD",
        marginLeft: 4
    },
    dateNTime: {
        fontSize: 13,
        fontWeight: "400",
        lineHeight: 19,
        color: Colors.primary
    },
    savedButton: {
        width: 30,
        height: 30,
        ...Styles.centered,
        borderRadius: 7,
    }
})