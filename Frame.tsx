import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Color, FontFamily, FontSize, Border } from "./GlobalStyles";

type FrameType = {
    onClose?: () => void;
};

const Frame = ({ onClose }: FrameType) => {
    return (
        <View style={styles.helloAshfakParent}>
            <Text style={[styles.helloAshfak, styles.helloTypo]}>Create Event</Text>
            <Text style={[styles.helloAshfak1, styles.helloTypo]}>Create Group</Text>
            {/* <Image
                style={[styles.frameChild, styles.frameChildLayout]}
                resizeMode="cover"
                source={require("../assets/group-18172.png")}
            /> */}
            {/* <Image
                style={[styles.elgroupIcon, styles.frameChildLayout]}
                resizeMode="cover"
                source={require("../assets/elgroup.png")}
            /> */}
            <View style={styles.frameItem} />
        </View>
    );
};

const styles = StyleSheet.create({
    helloTypo: {
        textAlign: "center",
        color: Color.colorTypographyTitle,
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: "500",
        fontSize: FontSize.size_xs,
        position: "absolute",
    },
    frameChildLayout: {
        width: "11.94%",
        height: "20.78%",
        position: "absolute",
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: "hidden",
    },
    helloAshfak: {
        top: "15.58%",
        left: "29.1%",
    },
    helloAshfak1: {
        top: "61.04%",
        left: "27.61%",
    },
    frameChild: {
        top: "16.88%",
        right: "74.63%",
        bottom: "62.34%",
        left: "13.43%",
    },
    elgroupIcon: {
        top: "62.34%",
        right: "76.12%",
        bottom: "16.88%",
        left: "11.94%",
    },
    frameItem: {
        height: "149.35%",
        width: "0.75%",
        top: "51.95%",
        right: "91.79%",
        bottom: "-101.3%",
        left: "7.46%",
        borderRadius: 3,
        backgroundColor: "#f0f0f0",
        transform: [
            {
                rotate: "-90deg",
            },
        ],
        position: "absolute",
    },
    helloAshfakParent: {
        borderRadius: Border.br_8xs,
        backgroundColor: Color.secondaryWhite100,
        shadowColor: "rgba(86, 105, 255, 0.1)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 30,
        elevation: 30,
        shadowOpacity: 1,
        borderStyle: "solid",
        borderColor: "#f0f0f0",
        borderWidth: 1,
        width: 134,
        height: 77,
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: "hidden",
    },
});

export default Frame;