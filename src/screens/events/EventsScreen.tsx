import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Container, Row, SpaceBetweenRow } from '../../components/Wrapper'
import EventsHeader from './container/EventsHeader'
import images from '../../assets/images'
import MText from '../../components/Text'
import Svg from '../../assets/svg'
import { Colors, Styles } from '../../styles'
import { Size } from '../../constants'
import CustomScroll from '../../components/CustomScroll'
import { useNavigation } from '@react-navigation/native'
import Button from '../../components/Button'

export default function EventsScreen() {
    const navigation = useNavigation();

    return (
        <Container>
            <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
            <EventsHeader />

            <CustomScroll>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item, indx) => {
                    return (
                        <Row style={styles.groupCard} key={indx}>
                            <Image
                                source={images.homeItem3} resizeMode="stretch"
                                style={{ width: 100, height: 110 }}
                            />
                            <View style={{ paddingHorizontal: 8, width: Size.wWidth / 1.1 - 115, marginLeft: 5 }}>
                                <SpaceBetweenRow>
                                    <MText style={styles.dateNTime}>
                                        Wed, Apr 28 • 5:30 PM
                                    </MText>
                                    <Button
                                        SvgIcon={<Svg.SavedIcon />}
                                        background='#7476881A'
                                        style={styles.savedButton}
                                    />
                                </SpaceBetweenRow>
                                <MText style={styles.groupCardTitle}>
                                    Jo Malone London’s Mother’s Day Presents
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
                                    <Svg.UploadSmallIcon />
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