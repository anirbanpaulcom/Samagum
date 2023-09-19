import React from 'react'
import { SpaceBetweenRow } from '../../../components/Wrapper'
import MText from '../../../components/Text'
import styles from '../styles'
import Button from '../../../components/Button'
import Svg from '../../../assets/svg'

interface HomeSectionTitleProps {
    title: string;
    onPress?: () => void;
}

export default function HomeSectionTitle({ title, onPress }: HomeSectionTitleProps) {
    return (
        <SpaceBetweenRow>
            <MText style={styles.heading}>{title}</MText>
            <Button
                title="See All"
                textStyle={styles.seeAll}
                background='transparent'
                style={{ marginTop: 20, marginRight: 20 }}
                iconPosition="right"
                SvgIcon={<Svg.RightChevronIcon />}
                onPress={onPress}
            />
        </SpaceBetweenRow>
    )
}