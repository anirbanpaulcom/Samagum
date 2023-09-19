import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native'
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

export default function FeatureGroup({ title, data }: FeatureGroupProps) {
    return (
        <View>
            <HomeSectionTitle title={title} />

            <FlatList
                data={data}
                horizontal
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.card}>
                            <Image
                                source={{ uri: item?.image }} resizeMode="stretch"
                                style={{ width: Size.wWidth / 1.6, height: 140 }}
                            />
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
                                    <Svg.UploadSmallIcon />
                                </SpaceBetweenRow>

                                <Button
                                    title="Join"
                                    style={styles.joinButton}
                                    textStyle={styles.joinButtonText}
                                />
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