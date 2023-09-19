import { View, Text, TouchableOpacity, StyleSheet, TextInput, NativeSyntheticEvent, NativeTouchEvent } from 'react-native'
import React from 'react'
import { Row, SpaceBetweenRow } from '../../../components/Wrapper'
import Svg from '../../../assets/svg'
import MText from '../../../components/Text'
import { Colors } from '../../../styles'
import { Size } from '../../../constants'

interface HomeHeaderProps {
    searchInputCallback: ((e: NativeSyntheticEvent<NativeTouchEvent>) => void) | undefined
    onFilterPress: () => void;
}

export default function HomeHeader({ searchInputCallback, onFilterPress }: HomeHeaderProps) {
    return (
        <View style={styles.Container}>
            <SpaceBetweenRow>
                <TouchableOpacity>
                    <Svg.MenuIcon />
                </TouchableOpacity>

                <Row>
                    <View>
                        <MText style={styles.CurrentLocation}>
                            Current Location {' '}
                            <Svg.DownChevronIcon />
                        </MText>
                        <MText style={styles.CurrentLocationVal}>New York, USA</MText>
                    </View>
                </Row>
            </SpaceBetweenRow>

            <SpaceBetweenRow style={styles.searchContainer}>
                <Svg.SearchIcon width="24" />
                <View style={styles.divider} />
                <TextInput
                    placeholder='Search.'
                    placeholderTextColor="#FFFFFF"
                    onChangeText={(val) => { }}
                    style={styles.searchInput}
                    onPressIn={searchInputCallback}
                />
                <TouchableOpacity onPress={onFilterPress}>
                    <Row>
                        <Svg.FilterIcon />
                        <MText style={styles.Filters}>Filters</MText>
                    </Row>
                </TouchableOpacity>
            </SpaceBetweenRow>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        width: "100%",
        padding: 16,
        backgroundColor: Colors.primary,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
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
        borderRadius: 30,
        height: 51,
        backgroundColor: "#5D56F3",
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 10
    },
    divider: {
        width: 1,
        height: 20,
        backgroundColor: "#FFF",
        opacity: 0.2
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