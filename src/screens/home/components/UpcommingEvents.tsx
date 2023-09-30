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
import { getAllGroupsYouOrganize } from '../../../API/api';

interface UpcommingEventsProps {
    title: string;
    data: any;
}

// {
//     "allowed_guests": null, 
//     "announced_at": null, 
//     "attendee_limit": 0, 
//     "cancelled_at": null, 
//     "created_at": "2023-09-14T09:01:13.000000Z", 
//     "created_by": 22, 
//     "deleted_at": null, 
//     "description": "<p>tset</p>", 
//     "end_date": "2023-09-27", 
//     "end_time": "09:00", 
//     "ends_at": "2023-09-27T09:00:00.000000Z", 
//     "fee_additional_refund_policy": null, 
//     "fee_amount": null, 
//     "fee_currency_id": null, 
//     "fee_method": null, 
//     "group_id": 34, 
//     "how_to_find_us": "test", 
//     "id": 54, 
//     "image": "https://dev.samagum.com/uploads/event/81/lOwFDRCki1kd8ypX08yoIP6S2y8eik-metaSzIgRXBveHlmaWwgVEpGLVRlcnJhIFJlZC5wbmc%3D-.png", 
//     "is_online": false, 
//     "media": [
//         {
//             "collection_name": "default", 
//             "created_at": "2023-09-14T09:01:13.000000Z", 
//             "custom_properties": [Array], 
//             "disk": "public_dir", 
//             "file_name": "lOwFDRCki1kd8ypX08yoIP6S2y8eik-metaSzIgRXBveHlmaWwgVEpGLVRlcnJhIFJlZC5wbmc=-.png", 
//             "id": 81, 
//             "manipulations": [Array], 
//             "mime_type": "image/png", 
//             "model_id": 54, 
//             "model_type": "App\\Models\\Event", 
//             "name": "lOwFDRCki1kd8ypX08yoIP6S2y8eik-metaSzIgRXBveHlmaWwgVEpGLVRlcnJhIFJlZC5wbmc=-", 
//             "order_column": 77, 
//             "responsive_images": [Array], 
//             "size": 205141, 
//             "updated_at": "2023-09-14T09:01:13.000000Z"
//         }
//     ], 
//     "online_meeting_link": null, 
//     "rsvp_ends_at": "2023-09-23T09:00:00.000000Z", 
//     "rsvp_question": null, 
//     "rsvp_starts_at": "2023-09-14T09:01:13.000000Z", 
//     "slug": "test-event-3", 
//     "start_date": "2023-09-23", 
//     "start_time": "09:00", 
//     "starts_at": "2023-09-23T09:00:00.000000Z", 
//     "status": 1, 
//     "title": "TEst event 3", 
//     "uid": "6502cbd95a1ca", 
//     "updated_at": "2023-09-14T09:01:13.000000Z"
// }

export default function UpcommingEvents({ title, data, navigationPage}: UpcommingEventsProps) {
    const navigation = useNavigation();

    const [isOnline, setIsOnline] = useState(false);
     
    useEffect(()=>{
        setIsOnline(data?.is_online);
    })

    return (
        <View>
            <HomeSectionTitle data={data} title={title} navigationPage={navigationPage}/>
            <FlatList
                data={data}
                horizontal
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.card}
                            onPress={() => { navigation?.navigate("EventDetailScreen", { data: item }) }}
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
                                <SpaceBetweenRow style={{marginVertical:10}}>
                                    <Row>
                                        <Svg.LocationSmallIcon />
                                        <MText style={styles.EventAddress}>36 Guild Street London...</MText>
                                    </Row>
                                    <Svg.ShareIcon/>
                                </SpaceBetweenRow>
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
    }
})