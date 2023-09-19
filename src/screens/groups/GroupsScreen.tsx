import { View, Text, StatusBar, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Container, Row, SpaceBetweenRow } from '../../components/Wrapper'
import GroupsHeader from './container/GroupsHeader'
import images from '../../assets/images'
import MText from '../../components/Text'
import Svg from '../../assets/svg'
import { Styles } from '../../styles'
import { Size } from '../../constants'
import CustomScroll from '../../components/CustomScroll'
import { getAllGroupsAPI } from '../../API/api'

export default function GroupsScreen() {
    const [groupsData, setGroupsData] = useState([]);

    useEffect(() => {
        getAllGroupsAPI((res) => {
            if (res !== null) {
                setGroupsData(res?.data?.groups)
            }
        })
    }, []);

    return (
        <Container>
            <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
            <GroupsHeader />

            <CustomScroll>
                {groupsData?.map((item: any, indx) => {
                    return (
                        <Row style={styles.groupCard} key={indx}>
                            <Image
                                source={images.groupCardImage} resizeMode="stretch"
                                style={{ width: 70, height: 90 }}
                            />
                            <View style={{ paddingHorizontal: 8, width: Size.wWidth / 1.1 - 80 }}>
                                <MText style={styles.groupCardTitle}>
                                    {/* SGSITS Alumni Chapter - Indore - John Doe */}
                                    {item?.name}
                                </MText>
                                <Row style={Styles.verticalMargin}>
                                    <Svg.UsersIcon />
                                    <MText style={styles.EventAddress}>
                                        {item?.group_type} Members - Public Group
                                    </MText>
                                </Row>
                                <SpaceBetweenRow style={{ paddingRight: 6 }}>
                                    <Row>
                                        <Svg.LocationSmallIcon />
                                        <MText style={styles.EventAddress}>
                                            Indore, Madhya Pradesh...
                                        </MText>
                                    </Row>
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
        fontSize: 15,
        fontWeight: "500",
        color: "#120D26",
    },
    EventAddress: {
        fontSize: 12,
        fontWeight: "400",
        color: "#747688",
        marginLeft: 4
    },
})