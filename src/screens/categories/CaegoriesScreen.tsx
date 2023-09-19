import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import MText from '../../components/Text'
import { Size } from '../../constants'
import { Colors, Styles } from '../../styles'
import { Row } from '../../components/Wrapper'
import Svg from '../../assets/svg'
import ImageButton from '../../components/ImageButton'
import CategoryItem from './components/CategoryItem'
import BackHeader from '../auth/components/BackHeader'
import CustomScroll from '../../components/CustomScroll'

export const welcomeList = [
    { name: "Art & Culture" },
    { name: "Career & Business" },
    { name: "Community & Environment" },
    { name: "Practice a hobby with others" },
    { name: "Art & Culture" },
    { name: "Career & Business" },
    { name: "Community & Environment" },
    { name: "Practice a hobby with others" },
]

export default function CategoriesScreen({ navigation }: any) {
    const [loading, setLoading] = useState(false);

    function handleSubmit() {
        // dispatch(setUser({}));
        navigation?.navigate("InterestsScreen")
    }

    return (
        <CustomScroll style={styles.container}>
            <BackHeader onPress={() => { navigation?.goBack() }} />
            <Row style={Styles.marginTopMid}>
                <MText style={styles.titleWrapper}>Welcome</MText>
                <View style={Styles.horizontalMarginL}>
                    <Svg.HandShakeIcon />
                </View>
            </Row>
            <View style={styles.subtitleWrapper}>
                <MText style={styles.subtitleText}>
                    Select what you're looking for
                </MText>
            </View>

            {welcomeList.map((item, indx) => {
                return (
                    <CategoryItem item={item} key={indx} />
                );
            })}

            <ImageButton
                title="NEXT"
                onPress={handleSubmit}
                loading={loading}
            // style={styles.submitButton}
            />

            <MText />
        </CustomScroll>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Size.wWidth,
        backgroundColor: "#FFF",
        paddingHorizontal: 20,
        paddingVertical: "12%"
    },
    titleWrapper: {
        marginVertical: Size.vs,
        fontSize: 24,
        color: Colors.gray9,
        fontWeight: '500'
    },
    subtitleWrapper: {
        marginBottom: Size.s
    },
    subtitleText: {
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 22,
    },
    subtitleTextBold: {
        fontWeight: '800'
    },
    submitButton: {
        position: "absolute",
        bottom: -40
    }
})