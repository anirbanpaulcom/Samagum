import { View, Image, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Row, SpaceBetweenRow } from '../../../components/Wrapper';
import MText from '../../../components/Text';
import Svg from '../../../assets/svg';
import images from '../../../assets/images';
import { Colors, Styles } from '../../../styles';
import styles from '../styles';
import { Size } from '../../../constants';
import HomeSectionTitle from './HomeSectionTitle';
import Button from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';

interface MostActiveGroupProps {
    title: string;
    data: any;
}

export default function MostActiveGroup({ title, data }: MostActiveGroupProps) {
    const navigation = useNavigation();
    const [calendarTab, setCalendarTab] = useState("ALL");

    return (
        <View style={{ paddingBottom: 80 }}>
            <HomeSectionTitle
                title={title}
                onPress={() => { navigation?.navigate("EventsScreen") }}
            />
            <SpaceBetweenRow style={Styles.paddingHorizontalM}>
                <Button
                    title="ALL"
                    style={calendarTab === "ALL" ? inStyles.selectedCalendarTab : inStyles.calendarTab}
                    background='#fff'
                    textStyle={calendarTab === "ALL" ? inStyles.selectedCalendarTabText : inStyles.calendarTabText}
                    onPress={() => { setCalendarTab('ALL') }}
                />
                <Button
                    title="GOING"
                    style={calendarTab === "GOING" ? inStyles.selectedCalendarTab : inStyles.calendarTab}
                    background='#fff'
                    textStyle={calendarTab === "GOING" ? inStyles.selectedCalendarTabText : inStyles.calendarTabText}
                    onPress={() => { setCalendarTab('GOING') }}
                />
                <Button
                    title="SAVED"
                    style={calendarTab === "SAVED" ? inStyles.selectedCalendarTab : inStyles.calendarTab}
                    background='#fff'
                    textStyle={calendarTab === "SAVED" ? inStyles.selectedCalendarTabText : inStyles.calendarTabText}
                    onPress={() => { setCalendarTab('SAVED') }}
                />
                <Button
                    title="PAST"
                    style={calendarTab === "PAST" ? inStyles.selectedCalendarTab : inStyles.calendarTab}
                    background='#fff'
                    textStyle={calendarTab === "PAST" ? inStyles.selectedCalendarTabText : inStyles.calendarTabText}
                    onPress={() => { setCalendarTab('PAST') }}
                />
            </SpaceBetweenRow>
            <MText />

            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                        <Row style={styles.groupCard}>
                            <Image
                                source={images.homeItem3} resizeMode="stretch"
                                style={{ width: 100, height: 110 }}
                            />
                            <View style={{ paddingHorizontal: 8, width: Size.wWidth / 1.1 - 115, marginLeft: 5 }}>
                                <SpaceBetweenRow>
                                    <MText style={inStyles.dateNTime}>
                                        Wed, Apr 28 • 5:30 PM
                                    </MText>
                                    <Button
                                        SvgIcon={<Svg.SavedIcon />}
                                        background='#7476881A'
                                        style={inStyles.savedButton}
                                    />
                                </SpaceBetweenRow>
                                <MText style={inStyles.groupCardTitle}>
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

const inStyles = StyleSheet.create({
    calendarTabText: {
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 24,
        color: "#747688"
    },
    calendarTab: {
        width: Size.wWidth / 5.5,
        borderBottomWidth: 3,
        borderBottomColor: "#FFF",
        borderRadius: 0,
    },
    selectedCalendarTabText: {
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 24,
        color: Colors.primary
    },
    selectedCalendarTab: {
        width: Size.wWidth / 5.5,
        borderBottomWidth: 3,
        borderBottomColor: Colors.primary,
        borderRadius: 0,
    },
    dateNTime: {
        fontSize: 13,
        fontWeight: "400",
        lineHeight: 19,
        color: Colors.primary
    },
    groupCardTitle: {
        fontSize: 14,
        fontWeight: "500",
        color: "#120D26",
    },
    savedButton: {
        width: 30,
        height: 30,
        ...Styles.centered,
        borderRadius: 7,
    }
})