import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import HomeSectionTitle from '../../home/components/HomeSectionTitle';
import images from '../../../assets/images';
import { useNavigation } from '@react-navigation/native';
import { Size } from '../../../constants';

interface EventGalleryProps {
    title: string;
    data: any;
}

export default function EventGallery({ title, data }: EventGalleryProps) {
    const navigation = useNavigation();

    return (
        <View>
            <HomeSectionTitle title={title} />
            <ScrollView horizontal>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item, indx) => {
                    return (
                        <TouchableOpacity key={indx}
                            onPress={() => { navigation?.navigate("EventDetailScreen") }}
                            style={{ marginLeft: 20 }}
                        >
                            <Image
                                source={images.eventGallery} resizeMode="stretch"
                                style={{ width: Size.wWidth / 1.6, height: 155, borderRadius: 8 }}
                            />
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

})