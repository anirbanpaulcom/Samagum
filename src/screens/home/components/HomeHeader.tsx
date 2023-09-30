import { View, Text, TouchableOpacity, StyleSheet, TextInput, NativeSyntheticEvent, NativeTouchEvent } from 'react-native'
import React, { useState } from 'react'
import { Row, SpaceBetweenRow } from '../../../components/Wrapper'
import Svg from '../../../assets/svg'
import MText from '../../../components/Text'
import { Colors } from '../../../styles'
import { Size } from '../../../constants'
import CustomDrawer from '../../../components/CustomDrawer'
import { useNavigation } from '@react-navigation/native'

interface HomeHeaderProps {
    searchInputCallback: ((e: NativeSyntheticEvent<NativeTouchEvent>) => void) | undefined
    onFilterPress: () => void;
}

export default function HomeHeader({ searchInputCallback, onFilterPress }: HomeHeaderProps) {
    const [openDrawer, setOpenDrawer] = useState(false);
    const navigation = useNavigation();

    return (
        <View style={styles.Container}>
            <SpaceBetweenRow>
                <TouchableOpacity onPress={() => setOpenDrawer(true)}>
                    <Svg.MenuIcon />
                </TouchableOpacity>

                <TouchableOpacity >
                    <Svg.SamagumIcon />
                </TouchableOpacity>

                <Row>
                    <TouchableOpacity>
                        <Svg.RocketExploreIcon />
                    </TouchableOpacity>
                </Row>
            </SpaceBetweenRow>

            <SpaceBetweenRow style={styles.searchContainer}>
                <Svg.SearchIcon width="24"  />
                <View style={styles.divider} />
                <TextInput
                    placeholder='Search.'
                    placeholderTextColor="#FFFFFF"
                    onChangeText={(val) => { }}
                    style={styles.searchInput}
                    onPressIn={searchInputCallback}
                />
                {/* <TouchableOpacity onPress={onFilterPress}>
                    <Row>
                        <Svg.FilterIcon />
                        <MText style={styles.Filters}>Filters</MText>
                    </Row>
                </TouchableOpacity> */}
            </SpaceBetweenRow>

            <CustomDrawer
                modalVisible={openDrawer}
                navigation={navigation}
                callback={() => { setOpenDrawer(false) }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        width: "100%",
        padding: 16,
        backgroundColor: Colors.primary,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    CurrentLocation: {
        fontSize: 12,
        fontWeight: "400",
        color: "#fff",
        opacity: 0.6,
        letterSpacing: 0.4,
    },
    CurrentLocationVal: {
        fontSize: 13,
        fontWeight: "400",
        color: "#F4F4FE",
        marginLeft: 8,
        marginTop: 2,
    },
    searchContainer: {
        width: Size.wWidth / 1.1,
        alignSelf: "center",
        borderRadius: 10,
        height: 51,
        backgroundColor: "#716BF8",
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 10,
        justifyContent:"flex-start"
    },
    divider: {
        width: 1,
        height: 20,
        backgroundColor: "#FFF",
        opacity: 0.2,
        marginHorizontal:10
    },
    searchInput: {
        fontSize: 16,
        fontWeight: "300",
        color: "#FFF",
        opacity: 0.3,
        width: Size.wWidth / 1.9
    },
    Filters: {
        fontSize: 12,
        fontWeight: "400",
        color: "#FFF",
        marginLeft: 6
    }
})