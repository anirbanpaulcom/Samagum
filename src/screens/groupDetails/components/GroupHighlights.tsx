import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeSectionTitle from '../../home/components/HomeSectionTitle';
import images from '../../../assets/images';
import { useNavigation } from '@react-navigation/native';
import { Size } from '../../../constants';
import MText from '../../../components/Text';
import { Styles } from '../../../styles';
import { getGroupHighlights } from '../../../API/api';

interface EventGalleryProps {
    title: string;
    text: string;
    subText: string;
    data: any;
}

export default function GroupHighlights({ title, text, subText, data }: EventGalleryProps) {
    const navigation = useNavigation();
    const [allGroupHighlights, setAllGroupHighlights] = useState([]);

    useEffect(() => {
        getGroupHighlights((res) => {
            if (res !== null) {
                if (res?.success == true) {
                    setAllGroupHighlights(res?.data)
                }
            }
        })
    }, []);

    return (
        <View>
            <MText style={styles.heading}>{title}</MText>
            <ScrollView horizontal>
                {allGroupHighlights.map((item: any, indx) => {
                    return (
                        <TouchableOpacity key={indx}
                            onPress={() => { }}
                            style={{ marginLeft: 20 }}
                        >
                            <Image
                                source={{ uri: item?.photo_url }} resizeMode="stretch"
                                style={{ width: Size.wWidth / 1.6, height: 155, borderRadius: 8 }}
                            />
                        </TouchableOpacity>
                    );
                })}
                <View style={{ width: 20 }} />
            </ScrollView>

            <View style={Styles.horizontalMarginL}>
                <MText style={styles.title}>{text}</MText>
                <MText style={styles.designation}>{subText}</MText>
            </View>

            <View style={styles.divider} />

            <Image
                source={images.eventGallery} resizeMode="stretch"
                style={styles.galleryImg}
            />

            <View style={Styles.horizontalMarginL}>
                <MText style={styles.title}>{text}</MText>
                <MText style={styles.designation}>{subText}</MText>
            </View>

            <View style={styles.divider} />
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        fontWeight: "500",
        color: "#120D26",
        marginTop: 26,
        marginLeft: 20,
        marginBottom: 8,
    },
    title: {
        fontWeight: "500",
        color: "#120D26",
        marginTop: 12
    },
    designation: {
        fontSize: 12,
        color: "#2B284980"
    },
    galleryImg: {
        width: Size.wWidth / 1.1,
        height: 155, borderRadius: 8,
        alignSelf: "center",
    },
    divider: {
        width: "100%",
        height: 1,
        backgroundColor: "#B8B7C8",
        marginVertical: 20,
        marginBottom: 25
    }
})