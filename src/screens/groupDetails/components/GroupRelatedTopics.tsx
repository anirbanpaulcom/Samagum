import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Size } from '../../../constants';
import MText from '../../../components/Text';
import { Button } from 'react-native-paper';
import Svg from '../../../assets/svg';
import { getAllGroupRelatedTopics } from '../../../API/api';

interface GroupRelatedTopicsProps {
    title: string;
    data: any;
}

export default function GroupRelatedTopics({ title, data }: GroupRelatedTopicsProps) {
    const [allGroupRelatedTopic, setAllGroupRelatedTopic] = useState<any>([]);

    useEffect(() => {
        getAllGroupRelatedTopics((res) => {
            if (res !== null) {
                if (res?.success == true) {
                    setAllGroupRelatedTopic(res?.data)
                }
            }
        })
    }, []);

    return (
        <View>
            <MText style={styles.heading}>{title}</MText>

            <View style={styles.container}>
                {
                    allGroupRelatedTopic?.recommended?.map((item: any, indx: number) => {
                        return (
                            <Button key={indx} mode="outlined" style={styles.button}
                                icon="plus"
                                onPress={() => { }}
                            >
                                {item?.name}
                            </Button>
                        );
                    })
                }
            </View>
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
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginLeft: 18
    },
    button: {
        borderRadius: 5,
        margin: 5
    }
})