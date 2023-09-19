import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Row, SpaceBetweenRow } from '../../../components/Wrapper';
import MText from '../../../components/Text';
import Svg from '../../../assets/svg';
import images from '../../../assets/images';
import { Colors, Styles } from '../../../styles';
import { Size } from '../../../constants';
import { useNavigation } from '@react-navigation/native';
import HomeSectionTitle from '../../home/components/HomeSectionTitle';
import { Button } from 'react-native-paper';

interface ProfileGroupsProps {
    title: string;
    data: any;
}

export default function ProfileGroups({ title, data }: ProfileGroupsProps) {
    const navigation = useNavigation();

    return (
        <View>
            <HomeSectionTitle
                title={title}
                onPress={() => { navigation?.navigate("GroupsScreen") }}
            />
            {data.map((item: any, indx: number) => {
                return (
                    <View key={indx}>
                        <Row style={styles.groupCard}>
                            <Image
                                source={images.groupCardImage} resizeMode="stretch"
                                style={{ width: 70, height: 90 }}
                            />
                            <View style={{ paddingHorizontal: 8, width: Size.wWidth / 1.1 - 80 }}>
                                <SpaceBetweenRow>
                                    <MText style={styles.groupCardTitle}>
                                        SGSITS Alumni Chapter
                                    </MText>
                                    <Button style={styles.joinButton} labelStyle={{ color: "#FFF" }}>
                                        Join
                                    </Button>
                                </SpaceBetweenRow>
                                <Row style={Styles.verticalMargin}>
                                    <Row>
                                        <Svg.LocationSmallIcon />
                                        <MText style={styles.EventAddress}>
                                            Indore
                                        </MText>
                                    </Row>
                                </Row>
                                <SpaceBetweenRow style={{ paddingRight: 6 }}>
                                    <Row>
                                        <Svg.UsersIcon />
                                        <MText style={styles.EventAddress}>
                                            14 Members
                                        </MText>
                                    </Row>
                                    <Svg.UploadSmallIcon />
                                </SpaceBetweenRow>
                            </View>
                        </Row>
                    </View>
                );
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    groupCard: {
        padding: 10, borderRadius: 14,
        elevation: 9,
        shadowColor: "#CCC",
        backgroundColor: "#fff",
        marginVertical: 8,
        marginHorizontal: 20,
    },
    groupCardTitle: {
        fontSize: 15,
        fontWeight: "500",
        color: "#120D26",
        width: "60%",
    },
    EventAddress: {
        fontSize: 12,
        fontWeight: "400",
        color: "#747688",
        marginLeft: 4
    },
    joinButton: {
        backgroundColor: Colors.primary,
        borderRadius: 10,
        paddingHorizontal: 16
    }
})