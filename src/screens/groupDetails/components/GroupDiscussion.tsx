import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, ActivityIndicator, TextInput, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import images from '../../../assets/images';
import { useNavigation } from '@react-navigation/native';
import { Size } from '../../../constants';
import MText from '../../../components/Text';
import { Row, SpaceBetweenRow } from '../../../components/Wrapper';
import MyCard from '../../../components/Wrapper/MyCard';
import Svg from '../../../assets/svg';
import Button from '../../../components/Button';
import { createGroupDiscussion, deleteGroupDiscussion, getEventDiscussion } from '../../../API/api';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { setDiscussionData } from '../../../redux/reducer/groupDiscussion';
import Toast from 'react-native-simple-toast';

interface EventGalleryProps {
    title: string;
    data: any;
}

export default function GroupDiscussion({ title, data }: EventGalleryProps) {
    const navigation = useNavigation();
    const { groupDiscussionData } = useSelector((state: any) => state.GroupDiscussion);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);

    const [groupContent, setGroupContent] = useState("");

    useEffect(() => {
        setLoading(true);
        getEventDiscussion((res) => {
            setLoading(false);
            if (res !== null) {
                if (res?.success == true) {
                    dispatch(setDiscussionData(res?.data))
                }
            }
        })
    }, []);

    const handleCreateDiscussion = () => {
        if (!groupContent) {
            Toast.show("Please enter all fields", 1000)
            return;
        }
        setLoading2(true);
        createGroupDiscussion(title, groupContent, (res) => {
            setLoading2(false);
            if (res !== null) {
                if (res?.success == true) {
                    setGroupContent("");
                    dispatch(setDiscussionData(res?.data))
                }
            }
        })
    }

    const handleDeleteDiscussion = (discussion_id: string) => {
        Alert.alert(
            '!Important',
            `Do you want to delete this discussion`,
            [
                {
                    text: 'OK',
                    onPress: async () => {
                        deleteGroupDiscussion(discussion_id, (res) => {
                            if (res !== null) {
                                if (res?.success == true) {
                                    setGroupContent("");
                                    dispatch(setDiscussionData(res?.data))
                                } else {
                                    Alert.alert("!Important", res?.message)
                                }
                            }
                        })
                    },
                },
            ],
            { cancelable: false },
        );
    }

    return (
        <>
            <View>
                <MText style={styles.heading}>{title}</MText>
                <Row style={{ paddingHorizontal: 20 }}>
                    <Image
                        source={images.eventUser}
                        style={{ width: 32, height: 32, borderRadius: 100 }}
                    />

                    <Row>
                        <TextInput
                            placeholder='Start a discussion'
                            placeholderTextColor='#2B2849'
                            style={styles.inputStyle}
                            value={groupContent}
                            onChangeText={(val) => { setGroupContent(val) }}
                        />
                        <Button
                            SvgIcon={<Svg.CheckedIcon width="20" height="20" />}
                            onPress={handleCreateDiscussion}
                            loading={loading2}
                            style={{ width: 44, height: 46, marginLeft: 10 }}
                        />
                    </Row>
                </Row>
                <ScrollView>
                    {loading
                        ? <View style={{ width: "100%", alignItems: "center", height: 100, justifyContent: "center" }}>
                            <ActivityIndicator />
                        </View>
                        : groupDiscussionData?.map((item: any, indx: number) => {
                            return (
                                <MyCard key={indx} style={styles.itemContainer}
                                    onPress={() => { }}
                                >
                                    <SpaceBetweenRow>
                                        <Row style={{ paddingHorizontal: 10 }}>
                                            <Image
                                                source={images.eventUser}
                                                style={{ width: 22, height: 22, borderRadius: 100 }}
                                            />

                                            <MText style={styles.itemTitle}>
                                                Chetan goyal... {moment(item?.created_at).format("YYYY, HH:SS")}
                                            </MText>
                                        </Row>
                                        <Button
                                            background='transparent'
                                            style={{ height: 32 }}
                                            SvgIcon={<Svg.ThreeDotsIcon />}
                                            onPress={() => { handleDeleteDiscussion(item?.group_id) }}
                                        />
                                    </SpaceBetweenRow>

                                    <MText style={styles.itemInfo}>
                                        {item?.content}
                                    </MText>

                                    <SpaceBetweenRow>
                                        <MText style={styles.itemReply}>
                                            Chetan goyal...{moment(item?.created_at).format("YYYY, HH:SS")}
                                        </MText>

                                        <Button
                                            background='transparent'
                                            style={{ height: 32 }}
                                            SvgIcon={<Svg.HeartSilverIcon />}
                                        />
                                    </SpaceBetweenRow>
                                </MyCard>
                            );
                        })}
                </ScrollView>
            </View>
        </>
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
    inputStyle: {
        borderWidth: 1,
        borderColor: "#CACAD5",
        borderRadius: 5,
        backgroundColor: "#F7F7F9",
        width: Size.wWidth / 1.28 - 54,
        marginLeft: 20,
        height: 44,
        color: "#000",
        fontSize: 12,
        paddingLeft: 14
    },
    itemContainer: {
        marginTop: 16,
        alignSelf: "center",
        width: "90%",
        paddingTop: 20,
        paddingVertical: 14,
        elevation: 10,
        shadowColor: "#CCC"
    },
    itemTitle: {
        fontWeight: "500",
        color: "#2B284980",
        marginLeft: 10
    },
    itemInfo: {
        fontSize: 12,
        fontWeight: "300",
        color: "#3C3E56",
        marginLeft: 10,
        width: "80%",
        lineHeight: 18,
        marginTop: 8
    },
    itemReply: {
        fontSize: 10,
        color: "#2B284980",
        marginLeft: 10
    }
})