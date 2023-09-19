import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import HomeSectionTitle from '../../home/components/HomeSectionTitle'
import { useNavigation } from '@react-navigation/native';
import MyCard from '../../../components/Wrapper/MyCard';
import { Row, SpaceBetweenRow } from '../../../components/Wrapper';
import images from '../../../assets/images';
import MText from '../../../components/Text';
import StarRating from 'react-native-star-rating-widget';

interface ProfileReviewsProps {
    title: string;
    data: any;
}

export default function ProfileReviews({ title, data }: ProfileReviewsProps) {
    const [rating, setRating] = useState(4);
    const navigation = useNavigation();

    return (
        <View>
            <HomeSectionTitle
                title={title}
                onPress={() => { }}
            />

            {[1, 2].map((item, indx) => {
                return (
                    <MyCard key={indx} style={styles.itemContainer} activeOpacity={0.9}
                        onPress={() => { navigation?.navigate("EventDetailScreen") }}
                    >
                        <SpaceBetweenRow>
                            <Row style={{ paddingHorizontal: 10 }}>
                                <Image
                                    source={images.eventUser}
                                    style={{ width: 30, height: 30, borderRadius: 100 }}
                                />
                                <MText style={styles.itemTitle}>Rocks Velkeinjen</MText>
                            </Row>

                            <MText style={{ color: "#ADAFBB", fontSize: 14 }}>
                                10 Feb
                            </MText>
                        </SpaceBetweenRow>

                        <View style={{ marginTop: 6 }}>
                            <StarRating
                                starSize={24}
                                maxStars={4}
                                starStyle={{ marginRight: -2 }}
                                rating={rating}
                                onChange={setRating}
                            />
                            <MText style={styles.itemInfo}>
                                Cinemas is the ultimate experience to see new movies in Gold Class or Vmax. Find a cinema near you.
                            </MText>
                        </View>
                    </MyCard>
                );
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        marginTop: 16,
        alignSelf: "center",
        width: "90%",
        paddingTop: 20,
        paddingVertical: 14,
    },
    itemTitle: {
        fontSize: 18,
        color: "#000",
        marginLeft: 10
    },
    itemInfo: {
        fontSize: 15,
        fontWeight: "400",
        color: "#000",
        marginLeft: 10,
        width: "80%",
        lineHeight: 22,
        marginTop: 8
    },
    itemReply: {
        fontSize: 10,
        color: "#2B284980",
        marginLeft: 10
    }
})