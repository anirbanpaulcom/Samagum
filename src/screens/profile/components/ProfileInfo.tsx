import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import images from '../../../assets/images'
import MText from '../../../components/Text'
import Button from '../../../components/Button';
import Svg from '../../../assets/svg';
import { Row } from '../../../components/Wrapper';
import { MyList } from '../../interests/components/SearchContainer';
import { TouchableOpacity } from 'react-native';
import { Colors, Styles } from '../../../styles';
// import { Button } from 'react-native-paper'

interface ProfileInfoProps {
    btnText: string;
    btnIcon: any;
    data: any;
    onPress?: () => void;
}

export default function ProfileInfo({ btnIcon, btnText, data, onPress }: ProfileInfoProps) {
    return (
        <View>
            {data?.profile
                ? <Image
                    source={{ uri: data?.profile }}
                    style={styles.profile}
                />
                : <Image
                    source={images.profile}
                    style={styles.profile}
                />}

            <MText style={styles.userName}>{data?.first_name + " " + data?.last_name}</MText>

            <Button
                title={btnText}
                style={styles.messageBtn}
                mode="outlined"
                textStyle={{ marginLeft: 6, fontSize: 16, marginTop: 2 }}
                SvgIcon={btnIcon}
                onPress={onPress}
            />

            <MText style={styles.bio}>Bio</MText>
            <MText style={styles.bioText}>
                Enjoy your favorite dishe and a lovely your friends and family and have a great time. Food from local food trucks will be available for purchase. Read More
            </MText>

            <TextInput
                placeholder='Add Bio'
                placeholderTextColor={Colors.primary}
                style={styles.inputStyle}
            />

            <MText style={styles.bio}>Interests</MText>
            <MText style={styles.bioText}>
                Add interests to discover what you share with others and to improve recommendations.
            </MText>

            <Row style={{ flexGrow: 1, flexWrap: "wrap", marginHorizontal: 20, marginVertical: 10 }}>
                {MyList.map((item, indx) => {
                    return (
                        <TouchableOpacity style={styles.artAndCulture} key={indx}>
                            <MText style={styles.artAndCultureText}>{item}</MText>
                            <View style={{ marginLeft: 4, marginTop: 2 }}>
                                <Svg.PlusIcon />
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </Row>
        </View>
    )
}

const styles = StyleSheet.create({
    profile: {
        width: 96,
        height: 96,
        borderRadius: 100,
        marginTop: -50,
        alignSelf: "center",
        borderWidth: 2,
        borderColor: "#fff",
    },
    userName: {
        fontSize: 24,
        color: "#000",
        textAlign: "center",
        marginVertical: 8
    },
    messageBtn: {
        borderRadius: 10,
        alignSelf: "center",
        paddingHorizontal: 16
    },
    bio: {
        fontSize: 18,
        fontWeight: "500",
        color: "#120D26",
        marginHorizontal: 20,
        marginTop: 40
    },
    bioText: {
        fontSize: 14,
        color: "#3C3E56",
        lineHeight: 22,
        marginHorizontal: 20,
        marginTop: 8
    },
    artAndCulture: {
        borderWidth: 1,
        borderColor: Colors.primary,
        paddingHorizontal: 14,
        // width: Size.wWidth / 3.6,
        height: 38,
        borderRadius: 8,
        ...Styles.centered,
        flexDirection: "row",
        alignItems: "center",
        marginRight: 8,
        marginTop: 9,
    },
    artAndCultureText: {
        fontSize: 13,
        fontWeight: "500",
        color: "#000"
    },
    inputStyle: {
        width: "90%",
        height: 52,
        borderWidth: 1,
        borderColor: "#B8B7C8",
        borderRadius: 14,
        alignSelf: "center",
        paddingHorizontal: 16,
        marginTop: 16
    }
})