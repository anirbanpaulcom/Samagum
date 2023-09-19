import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import MyCard from '../../../components/Wrapper/MyCard'
import { Styles } from '../../../styles'
import { SpaceBetweenRow } from '../../../components/Wrapper';
import MText from '../../../components/Text';
import CheckSVG from '../../../components/svg/CheckSVG';

interface WelcomeItemProps {
    item: any;
}

export default function WelcomeItem({ item }: WelcomeItemProps) {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <MyCard style={Styles.marginTopXL} onPress={() => { setIsChecked(!isChecked) }}>
            <SpaceBetweenRow>
                <MText style={styles.text}>Practice a hobby with others</MText>
                <CheckSVG isChecked={isChecked} />
            </SpaceBetweenRow>
        </MyCard>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        fontWeight: "400",
    },
})