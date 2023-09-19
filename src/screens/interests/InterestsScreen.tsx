import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Size } from '../../constants'
import { Colors } from '../../styles'
import CustomScroll from '../../components/CustomScroll'
import BackHeader from '../auth/components/BackHeader'
import MText from '../../components/Text'
import SearchContainer from './components/SearchContainer'
import ImageButton from '../../components/ImageButton'
import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/reducer/user'

export default function InterestsScreen({ navigation }: any) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    function handleSubmit() {
        dispatch(setUser({}));
        // navigation?.navigate("Root")
    }

    return (
        <CustomScroll>
            <View style={styles.container}>
                <BackHeader onPress={() => { navigation?.goBack() }} />
                <MText style={styles.titleWrapper}>Interests</MText>
                <MText style={styles.subtitleText}>
                    Pick your favorite interests to find groups and events related to them
                </MText>

                <SearchContainer />

                <ImageButton
                    title="NEXT"
                    onPress={handleSubmit}
                    loading={loading}
                />
            </View>
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
    subtitleText: {
        fontSize: 13,
        fontWeight: "400",
        lineHeight: 20,
        marginTop: 4,
        width: "70%"
    },
    subtitleTextBold: {
        fontWeight: '800'
    },
    submitButton: {
        position: "absolute",
        bottom: -40
    },
})