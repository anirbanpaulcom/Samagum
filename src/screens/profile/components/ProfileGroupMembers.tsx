import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react';
import MText from '../../../components/Text';
import { Styles } from '../../../styles';
import { Row } from '../../../components/Wrapper';
import images from '../../../assets/images';

interface ProfileGroupMembersProps {
    title: string;
    apiUrl: string;
}

export default function ProfileGroupMembers({ title, apiUrl }: ProfileGroupMembersProps) {
    
    
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        apiUrl = 'https://dev.samagum.com/api/v1/groups?tab=member&page=1';
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Replace with your access token
                },
            });

            if (response.ok) {
                const result = await response.json();
                setData(result);
            } else {
                console.error('API request failed');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <View>
            <MText style={styles.title}>{title}</MText>

            {
                data.length > 0 ? (
                    data.map((item: any, indx: number) => {
                        return (
                            <Row style={{ marginHorizontal: 20, marginTop: 12 }} key={indx}>
                                <Image
                                    source={images.eventUser}
                                    style={{ width: 44, height: 44, borderRadius: 10 }}
                                />
                                <View style={{ marginLeft: 12 }}>
                                    <MText style={styles.text}>{item.groupName}</MText>
                                    <MText style={styles.subText}>{`${item.memberCount} Members`}</MText>
                                </View>
                            </Row>
                        );
                    })
                ) : (
                    <View style={{ alignItems:"center" }}>
                    <Text style={styles.text}>There is no Group member</Text>
                    </View>
                )}
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
