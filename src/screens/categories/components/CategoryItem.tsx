import { Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import MyCard from '../../../components/Wrapper/MyCard'
import { Styles } from '../../../styles'
import { Row, SpaceBetweenRow } from '../../../components/Wrapper';
import MText from '../../../components/Text';
import images from '../../../assets/images';
import CheckSVG from '../../../components/svg/CheckSVG';

interface CategoryItemProps {
    item: any;
}

export default function CategoryItem({ item }: CategoryItemProps) {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <MyCard style={styles.container} onPress={() => { setIsChecked(!isChecked) }}>
            <SpaceBetweenRow>
                <Row>
                    <Image
                        source={images?.category}
                        style={styles.categoryImage}
                    />
                    <MText style={styles.text}>Practice a hobby with others</MText>
                </Row>
                <CheckSVG isChecked={isChecked} />
            </SpaceBetweenRow>
        </MyCard>
    )
}

const styles = StyleSheet.create({
    container: {
        ...Styles.marginTopMid,
        padding: 4,
        borderRadius: 14,
        paddingRight: 12
    },
    text: {
        fontSize: 12,
        fontWeight: "400",
        marginLeft: 18
    },
    categoryImage: {
        width: 74,
        height: 56,
    }
})