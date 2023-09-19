import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Row, SpaceBetweenRow } from '../../../components/Wrapper'
import HeaderLeft from '../../../components/HeaderLeft'
import MText from '../../../components/Text'
import Svg from '../../../assets/svg'
import Button from '../../../components/Button'
import { useNavigation } from '@react-navigation/native'

interface SettingsHeaderProps {
    title: string;
}

export default function SettingsHeader({ title }: SettingsHeaderProps) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <SpaceBetweenRow>
                <Row>
                    <Button
                        SvgIcon={<Svg.BackIcon />}
                        background='#FFF'
                        style={{ marginRight: 20 }}
                        onPress={() => { navigation?.goBack() }}
                    />
                    <MText style={styles.title}>{title}</MText>
                </Row>
            </SpaceBetweenRow>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%", height: 54,
        paddingHorizontal: 20,
        justifyContent: "center",
        marginTop: 26
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
        color: "#120D26",
    },
})