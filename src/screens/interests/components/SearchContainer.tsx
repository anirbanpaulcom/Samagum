import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Row, SpaceBetweenRow } from '../../../components/Wrapper'
import InputBox from '../../../components/InputBox'
import { Size } from '../../../constants';
import Svg from '../../../assets/svg';
import { Colors, Styles } from '../../../styles';
import MText from '../../../components/Text';

export const MyList = [
    "Walking Tours",
    "Performing Arts",
    "Cultural Activities",
    "Art Gallrey",
    "More..."
];

export default function SearchContainer() {
    const [searchQuery, setSearchQuery] = useState("");
    return (
        <View>
            <SpaceBetweenRow>
                <InputBox
                    placeholder='Search for more interests...'
                    value={searchQuery}
                    onChangeText={(val) => {
                        setSearchQuery(val)
                    }}
                    secureTextEntry
                    placeholderTextColor="#8D8D8D"
                    inputStyle={styles.inputStyle}
                    inputContainer={styles.inputContainer}
                />

                <View style={styles.searchButton}>
                    <Svg.SearchIcon width="24" style={{ color: "#fff" }} />
                </View>
            </SpaceBetweenRow>

            <MText style={styles.titleWrapper}>Added</MText>

            <Row style={{ flexGrow: 1, flexWrap: "wrap" }}>
                {MyList.map((item, indx) => {
                    return (
                        <TouchableOpacity style={styles.itemButton} key={indx}>
                            <MText style={styles.itemButtonText}>{item}</MText>
                            <CrossButton />
                        </TouchableOpacity>
                    )
                })}
            </Row>

            <MText style={styles.titleWrapper}>Art & Culture</MText>

            <Row style={{ flexGrow: 1, flexWrap: "wrap" }}>
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

            <MText style={styles.titleWrapper}>Career & Business</MText>

            <Row style={{ flexGrow: 1, flexWrap: "wrap" }}>
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

const CrossButton = () => {
    return (
        <View style={styles.crossbtn}>
            <Svg.CrossIcon />
        </View>
    );
}

const styles = StyleSheet.create({
    searchButton: {
        width: 57,
        height: 57,
        borderRadius: 16,
        backgroundColor: Colors.primary,
        ...Styles.centered,
    },
    inputStyle: {
        paddingLeft: 20,
        fontSize: 12,
        marginTop: 0
    },
    inputContainer: {
        height: 60, width: Size.wWidth / 1.38
    },
    titleWrapper: {
        fontSize: 16,
        fontWeight: "600",
        color: "#595959",
        marginTop: 20
    },
    itemButton: {
        backgroundColor: Colors.primary,
        // width: Size.wWidth / 3.6,
        paddingLeft: 14,
        paddingRight: 6,
        height: 40,
        borderRadius: 8,
        ...Styles.centered,
        flexDirection: "row",
        alignItems: "center",
        marginRight: 8,
        marginTop: 9,
    },
    itemButtonText: {
        fontSize: 14,
        fontWeight: "400",
        color: "#fff"
    },
    crossbtn: {
        width: 15, height: 15, borderRadius: 100,
        backgroundColor: "#fff",
        ...Styles.centered,
        margin: 5,
        marginLeft: 8,
        marginTop: 7
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
})