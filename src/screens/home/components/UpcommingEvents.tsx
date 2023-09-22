import { View, Text, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native'
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

export default function UpcommingEvents({ title, data }: UpcommingEventsProps) {
    const navigation = useNavigation();

    return (
        <View>
            <HomeSectionTitle title={title} />

            <FlatList
                data={data}
                horizontal
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.card}
                            onPress={() => { navigation?.navigate("EventDetailScreen", { eventData: data }); }}
                        >
                            <Image
                                source={{ uri: item?.image }} resizeMode="stretch"
                                style={{ width: Size.wWidth / 1.6, height: 140 }}
                            />
                            <View style={{ paddingHorizontal: 8 }}>
                                <MText style={styles.title}>
                                    {/* International Band Mu... */}
                                    {item?.title}
                                </MText>
                                <Row style={Styles.verticalMargin}>
                                    <Svg.LiveIcon />
                                    <MText style={styles.OnlineEvent}>Online Event</MText>
                                </Row>
                                <SpaceBetweenRow>
                                    <Row>
                                        <Svg.LocationSmallIcon />
                                        <MText style={styles.EventAddress}>36 Guild Street London...</MText>
                                    </Row>
                                    <Svg.UploadSmallIcon />
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