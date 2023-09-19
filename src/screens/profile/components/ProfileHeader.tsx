import { View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import images from '../../../assets/images'
import { Row, SpaceBetweenRow } from '../../../components/Wrapper'
import HeaderLeft from '../../../components/HeaderLeft'
import Svg from '../../../assets/svg'
import { Colors, Styles } from '../../../styles'
import { useNavigation } from '@react-navigation/native'

interface ProfileHeaderProps {
    isEdit?: boolean;
    onEditPress?: () => void;
}

export default function ProfileHeader({ isEdit, onEditPress }: ProfileHeaderProps) {
    const navigation = useNavigation();

    return (
        <ImageBackground
            source={images.profile_cover}
            style={{ width: "100%", height: 244, paddingTop: 32 }}
        >
            <SpaceBetweenRow>
                <Row>
                    <HeaderLeft />
                </Row>

                <TouchableOpacity style={styles.savedIcon} onPress={() => {
                    navigation?.navigate("SettingsScreen")
                }}>
                    <Svg.ThreeDotsIcon />
                </TouchableOpacity>
            </SpaceBetweenRow>

            {isEdit && <TouchableOpacity style={styles.edit} onPress={onEditPress}>
                <Svg.EditPencilIcon />
            </TouchableOpacity>}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "500",
        color: "#fff",
    },
    savedIcon: {
        width: 36,
        height: 36,
        borderRadius: 10,
        backgroundColor: "#A57275",
        ...Styles.centered,
        marginRight: 16
    },
    edit: {
        width: 28,
        height: 28,
        borderRadius: 4,
        backgroundColor: Colors.primary,
        ...Styles.centered,
        position: "absolute",
        bottom: 10,
        right: 10
    }
})