import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import MText from '../../../components/Text';
import { Styles } from '../../../styles';
import { Row } from '../../../components/Wrapper';
import images from '../../../assets/images';
import { getGroupMemberApi } from '../../../API/api';

interface ProfileGroupMembersProps {
    title: string;
}

export default function ProfileGroupMembers({ title }: ProfileGroupMembersProps) {

    const [groupMembersData, setGroupMembersData] = useState([]);

    useEffect(() => {
        getGroupMemberApi((res) => {
            if (res !== null) {
                setGroupMembersData(res?.data?.groups)
            }
        })
    }, []);

    return (
        <View>
            <MText style={styles.title}>{title}</MText>

            {
                groupMembersData? (groupMembersData.map((item: any, indx: number) => {
                    return (
                        <Row style={{ marginHorizontal: 20, marginTop: 12 }}>
                            <Image
                                source={images.eventUser}
                                style={{ width: 44, height: 44, borderRadius: 10 }}
                            />
                            <View style={{ marginLeft: 12 }}>
                                <MText style={styles.text}>Black writers groups</MText>
                                <MText style={styles.subText}>45 Members</MText>
                            </View>
                        </Row>
                    );
                }) ) : (
                    <Text style={styles.text}>There is no group member</Text>
                )
            }

        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "500",
        color: "#120D26",
        marginHorizontal: 20,
        marginTop: 40
    },
    plus: {
        width: 44, height: 44,
        backgroundColor: "#EAEAEF",
        borderRadius: 10,
        ...Styles.centered,
    },
    text: {
        fontSize: 12,
        color: "#5669FF",
    },
    subText: {
        fontSize: 12,
        color: "#706E8F",
    }
})