import React, { useState, useCallback } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    Pressable,
    TouchableOpacity,
    Modal,
} from "react-native";
// import { useNavigation } from "@react-navigation/native";
import Frame from "./Frame";
import { Color, FontFamily, FontSize, Border } from "./GlobalStyles";

const Home = () => {
    const [frameButtonVisible, setFrameButtonVisible] = useState(false);
    // const navigation = useNavigation();

    const openFrameButton = useCallback(() => {
        setFrameButtonVisible(true);
    }, []);

    const closeFrameButton = useCallback(() => {
        setFrameButtonVisible(false);
    }, []);

    return (
        <>
            <View style={styles.home}>
                <View style={[styles.rectangleParent, styles.groupChildLayout]}>
                    <View style={[styles.groupChild, styles.groupChildShadowBox1]} />
                    <View style={styles.imGoingToShakeYParent}>
                        <Text style={[styles.imGoingTo, styles.goingTypo]}>
                            International Band Mu...
                        </Text>
                        <View style={[styles.minParent, styles.minPosition1]}>
                            <Text
                                style={[styles.min, styles.minTypo]}
                            >{`36 Guild Street London, UK `}</Text>
                            {/* <Image
                                style={[styles.groupItem, styles.groupLayout2]}
                                resizeMode="cover"
                                source={require("../assets/group-6.png")}
                            /> */}
                        </View>
                        <View style={styles.onlineEventWrapper}>
                            <Text style={styles.onlineEvent}>{`Online Event `}</Text>
                        </View>
                    </View>
                    {/* <Image
                        style={[styles.groupInner, styles.groupLayout1]}
                        resizeMode="cover"
                        source={require("../assets/group-33318.png")}
                    /> */}
                    <View style={[styles.rectangleGroup, styles.rectangleLayout3]}>
                        <View style={styles.rectangleView} />
                        {/* <Image
                            style={[styles.groupIcon, styles.iconLayout]}
                            resizeMode="cover"
                            source={require("../assets/group-18129.png")}
                        /> */}
                    </View>
                    <View style={[styles.rectangleContainer, styles.rectangleLayout2]}>
                        <View style={styles.groupChild1} />
                        <Text style={styles.armanRokni}>
                            <Text style={styles.armanRokniTxtContainer}>
                                <Text style={styles.text}>{`10
`}</Text>
                                <Text style={styles.june}>June</Text>
                            </Text>
                        </Text>
                    </View>
                </View>
                <View style={[styles.groupView, styles.groupChildLayout]}>
                    <View style={[styles.groupChild2, styles.groupChildShadowBox1]} />
                    <View style={styles.imGoingToShakeYParent}>
                        <Text style={[styles.imGoingTo, styles.goingTypo]}>
                            International Band Mu...
                        </Text>
                        <View style={[styles.minParent, styles.minPosition1]}>
                            <Text
                                style={[styles.min, styles.minTypo]}
                            >{`36 Guild Street London, UK `}</Text>
                            {/* <Image
                                style={[styles.groupItem, styles.groupLayout2]}
                                resizeMode="cover"
                                source={require("../assets/group-6.png")}
                            /> */}
                        </View>
                        <View style={styles.onlineEventWrapper}>
                            <Text style={styles.onlineEvent}>{`Online Event `}</Text>
                        </View>
                    </View>
                    {/* <Image
                        style={[styles.groupInner, styles.groupLayout1]}
                        resizeMode="cover"
                        source={require("../assets/group-33318.png")}
                    /> */}
                    <View style={[styles.rectangleGroup, styles.rectangleLayout3]}>
                        <View style={styles.rectangleView} />
                        {/* <Image
                            style={[styles.groupIcon, styles.iconLayout]}
                            resizeMode="cover"
                            source={require("../assets/group-18129.png")}
                        /> */}
                    </View>
                    <View style={[styles.rectangleContainer, styles.rectangleLayout2]}>
                        <View style={styles.groupChild1} />
                        <Text style={styles.armanRokni}>
                            <Text style={styles.armanRokniTxtContainer}>
                                <Text style={styles.text}>{`10
`}</Text>
                                <Text style={styles.june}>June</Text>
                            </Text>
                        </Text>
                    </View>
                </View>
                <View style={[styles.rectangleParent3, styles.rectangleParentLayout1]}>
                    <View style={styles.groupChildShadowBox} />
                    <View
                        style={[styles.imGoingToShakeYContainer, styles.goingPosition1]}
                    >
                        <Text style={[styles.imGoingTo, styles.goingTypo]}>
                            Jo Malone London’s Mo..
                        </Text>
                        <View style={[styles.minContainer, styles.minPosition1]}>
                            <Text style={[styles.min2, styles.minTypo]}>
                                Radius Gallery • Santa Cruz, CA
                            </Text>
                            {/* <Image
                                style={[styles.groupItem, styles.groupLayout2]}
                                resizeMode="cover"
                                source={require("../assets/group-6.png")}
                            /> */}
                        </View>
                    </View>
                    {/* <Image
                        style={[styles.groupChild10, styles.groupLayout1]}
                        resizeMode="cover"
                        source={require("../assets/group-333181.png")}
                    /> */}
                    <View style={[styles.rectangleParent4, styles.rectangleLayout3]}>
                        <View style={styles.rectangleView} />
                        {/* <Image
                            style={[styles.groupIcon, styles.iconLayout]}
                            resizeMode="cover"
                            source={require("../assets/group-181291.png")}
                        /> */}
                    </View>
                    <View style={[styles.rectangleParent5, styles.rectangleLayout2]}>
                        <View style={styles.groupChild1} />
                        <Text style={styles.armanRokni}>
                            <Text style={styles.armanRokniTxtContainer}>
                                <Text style={styles.text}>{`10
`}</Text>
                                <Text style={styles.june}>June</Text>
                            </Text>
                        </Text>
                    </View>
                </View>
                <View style={[styles.rectangleParent6, styles.rectangleParentLayout1]}>
                    <View style={styles.groupChildShadowBox} />
                    <View
                        style={[styles.imGoingToShakeYContainer, styles.goingPosition1]}
                    >
                        <Text style={[styles.imGoingTo, styles.goingTypo]}>
                            Jo Malone London’s Mo..
                        </Text>
                        <View style={[styles.minContainer, styles.minPosition1]}>
                            <Text style={[styles.min2, styles.minTypo]}>
                                Radius Gallery • Santa Cruz, CA
                            </Text>
                            {/* <Image
                                style={[styles.groupItem, styles.groupLayout2]}
                                resizeMode="cover"
                                source={require("../assets/group-6.png")}
                            /> */}
                        </View>
                    </View>
                    {/* <Image
                        style={[styles.groupChild10, styles.groupLayout1]}
                        resizeMode="cover"
                        source={require("../assets/group-333181.png")}
                    /> */}
                    <View style={[styles.rectangleParent4, styles.rectangleLayout3]}>
                        <View style={styles.rectangleView} />
                        {/* <Image
                            style={[styles.groupIcon, styles.iconLayout]}
                            resizeMode="cover"
                            source={require("../assets/group-181291.png")}
                        /> */}
                    </View>
                    <View style={[styles.rectangleParent5, styles.rectangleLayout2]}>
                        <View style={styles.groupChild1} />
                        <Text style={styles.armanRokni}>
                            <Text style={styles.armanRokniTxtContainer}>
                                <Text style={styles.text}>{`10
`}</Text>
                                <Text style={styles.june}>June</Text>
                            </Text>
                        </Text>
                    </View>
                </View>
                {/* <Image
                    style={[styles.riliveLineIcon, styles.riliveIconPosition1]}
                    resizeMode="cover"
                    source={require("../assets/riliveline.png")}
                /> */}
                {/* <Image
                    style={[styles.riliveLineIcon1, styles.riliveIconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/riliveline.png")}
                /> */}
                <Text
                    style={[styles.onlineEvent2, styles.onlineTypo]}
                >{`Online Event `}</Text>
                <Text
                    style={[styles.onlineEvent3, styles.onlineTypo]}
                >{`Online Event `}</Text>
                {/* <Image
                    style={[styles.riliveLineIcon2, styles.riliveIconPosition]}
                    resizeMode="cover"
                    source={require("../assets/riliveline.png")}
                /> */}
                {/* <Image
                    style={[styles.riliveLineIcon3, styles.riliveIconPosition]}
                    resizeMode="cover"
                    source={require("../assets/riliveline.png")}
                /> */}
                <View style={[styles.popularParent, styles.popularParentPosition]}>
                    <Text style={[styles.popular, styles.popularTypo]}>Your Group</Text>
                    <View style={[styles.allCopyParent, styles.groupChild27Layout]}>
                        <Text style={[styles.allCopy, styles.inviteLayout]}>See All</Text>
                        {/* <Image
                            style={[styles.vectorIcon, styles.minPosition1]}
                            resizeMode="cover"
                            source={require("../assets/vector-1.png")}
                        /> */}
                    </View>
                </View>
                <View
                    style={[styles.rectangleParent9, styles.rectangleParentPosition1]}
                >
                    <View style={[styles.groupChild20, styles.groupChildPosition]} />
                    {/* <Image
                        style={[styles.womensLeadership, styles.iconLayout]}
                        resizeMode="cover"
                        source={require("../assets/womens-leadership.png")}
                    /> */}
                    <View style={[styles.groupWrapper, styles.groupWrapperLayout]}>
                        <View style={[styles.imGoingToShakeYParent2, styles.goingPosition]}>
                            <Text style={[styles.imGoingToContainer, styles.timeTypo]}>
                                <Text
                                    style={styles.sgsitsAlumniChapter}
                                >{`SGSITS Alumni Chapter - Indore - `}</Text>
                                <Text style={styles.johnDoe}>John Doe</Text>
                            </Text>
                            <View style={styles.minParent2}>
                                <Text style={[styles.min4, styles.minPosition]}>
                                    Indore, Madhya Pradesh, India
                                </Text>
                                <Text style={[styles.min5, styles.minPosition]}>
                                    1 Members - Public Group
                                </Text>
                                {/* <Image
                                    style={[styles.groupChild21, styles.groupLayout2]}
                                    resizeMode="cover"
                                    source={require("../assets/group-61.png")}
                                /> */}
                            </View>
                        </View>
                    </View>
                    {/* <Image
                        style={[styles.favoriteActiveIcon, styles.iconLayout]}
                        resizeMode="cover"
                        source={require("../assets/favorite-active.png")}
                    /> */}
                </View>
                <View
                    style={[styles.rectangleParent10, styles.rectangleParentPosition1]}
                >
                    <View style={[styles.groupChild22, styles.groupChildPosition]} />
                    {/* <Image
                        style={[styles.womensLeadership, styles.iconLayout]}
                        resizeMode="cover"
                        source={require("../assets/womens-leadership.png")}
                    /> */}
                    <View style={[styles.groupWrapper, styles.groupWrapperLayout]}>
                        <View style={[styles.imGoingToShakeYParent2, styles.goingPosition]}>
                            <Text style={[styles.imGoingToContainer, styles.timeTypo]}>
                                <Text
                                    style={styles.sgsitsAlumniChapter}
                                >{`SGSITS Alumni Chapter - Indore - `}</Text>
                                <Text style={styles.johnDoe}>John Doe</Text>
                            </Text>
                            <View style={styles.minParent2}>
                                <Text style={[styles.min4, styles.minPosition]}>
                                    Indore, Madhya Pradesh, India
                                </Text>
                                <Text style={[styles.min5, styles.minPosition]}>
                                    1 Members - Public Group
                                </Text>
                                {/* <Image
                                    style={[styles.groupChild21, styles.groupLayout2]}
                                    resizeMode="cover"
                                    source={require("../assets/group-61.png")}
                                /> */}
                            </View>
                        </View>
                    </View>
                    {/* <Image
                        style={[styles.favoriteActiveIcon, styles.iconLayout]}
                        resizeMode="cover"
                        source={require("../assets/favorite-active1.png")}
                    /> */}
                </View>
                <View style={[styles.homeChild, styles.homeChildPosition]} />
                <View style={[styles.homeInner, styles.homeInnerLayout]}>
                    <View style={[styles.rectangleParent11, styles.homeInnerLayout]}>
                        <View style={[styles.groupChild24, styles.homeInnerLayout]} />
                        {/* <Image
                            style={[styles.searchIcon, styles.searchIconLayout]}
                            resizeMode="cover"
                            source={require("../assets/search.png")}
                        /> */}
                        <Text style={styles.search}>Search...</Text>
                        <View style={[styles.lineView, styles.capIconLayout]} />
                        <TouchableOpacity
                            style={[styles.groupFrame, styles.groupLayout]}
                            activeOpacity={0.2}
                        // onPress={() => navigation.navigate("Filter")}
                        >
                            <View style={[styles.groupParent, styles.groupLayout]}>
                                {/* <Image
                                    style={[styles.groupChild25, styles.searchIconLayout]}
                                    resizeMode="cover"
                                    source={require("../assets/group-18240.png")}
                                /> */}
                                <Text style={styles.filters}>Filters</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View
                    style={[styles.combinedShape2Parent, styles.rectangleParentPosition1]}
                >
                    <View style={styles.combinedShape2}>
                        <View style={styles.combinedShape}>
                            <View style={[styles.rectangle, styles.rectangleLayout]} />
                            <View style={[styles.rectangleCopy5, styles.rectangleLayout]} />
                            <View style={[styles.rectangleCopy6, styles.rectangleLayout]} />
                        </View>
                    </View>
                    {/* <Image
                        style={[styles.groupChild26, styles.frameParentPosition]}
                        resizeMode="cover"
                        source={require("../assets/group-18103.png")}
                    /> */}
                    <View style={[styles.frameParent, styles.frameParentPosition]}>
                        <View style={styles.currentLocationWrapper}>
                            <Text style={[styles.currentLocation, styles.homeChild1Position]}>
                                Current Location
                            </Text>
                        </View>
                        <Text style={[styles.dhakaBangladesh, styles.madisonAveNewTypo]}>
                            New Yourk, USA
                        </Text>
                    </View>
                </View>
                {/* <Image
                    style={[styles.icon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/.png")}
                /> */}
                <View style={styles.vectorParent}>
                    {/* <Image
                        style={[styles.rectangleIcon, styles.iconLayout]}
                        resizeMode="cover"
                        source={require("../assets/rectangle-83.png")}
                    /> */}
                    <Text style={styles.explore}>Explore</Text>
                    {/* <Image
                        style={[styles.groupChild27, styles.groupChild27Layout]}
                        resizeMode="cover"
                        source={require("../assets/group-33336.png")}
                    /> */}
                    <View
                        style={[
                            styles.uiElements1HomeIndicatorWrapper,
                            styles.groupChildPosition,
                        ]}
                    >
                        <View
                            style={[
                                styles.uiElements1HomeIndicator,
                                styles.groupChildPosition,
                            ]}
                        >
                            <View style={[styles.barsHomeIndicatorOnLig, styles.homeLayout]}>
                                <View style={[styles.homeIndicator, styles.homeLayout]} />
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.ovalParent}
                        activeOpacity={0.2}
                        onPress={openFrameButton}
                    >
                        {/* <Image
                            style={styles.ovalIcon}
                            resizeMode="cover"
                            source={require("../assets/oval.png")}
                        /> */}
                        <Text style={styles.addBoxMaterial}></Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.iconlyboldcalendarParent}
                    activeOpacity={0.2}
                // onPress={() => navigation.navigate("EventDetails")}
                >
                    {/* <Image
                        style={[styles.iconlyboldcalendar, styles.iconLayout]}
                        resizeMode="cover"
                        source={require("../assets/iconlyboldcalendar.png")}
                    /> */}
                    <Text style={styles.events}>Events</Text>
                </TouchableOpacity>
                <View style={[styles.barsStatusBarIphoneL, styles.homeChildPosition]}>
                    <View style={styles.battery}>
                        <View style={styles.border} />
                        {/* <Image
                            style={[styles.capIcon, styles.capIconLayout]}
                            resizeMode="cover"
                            source={require("../assets/cap1.png")}
                        /> */}
                        <View style={styles.capacity} />
                    </View>
                    {/* <Image
                        style={styles.wifiIcon}
                        resizeMode="cover"
                        source={require("../assets/wifi1.png")}
                    /> */}
                    {/* <Image
                        style={styles.cellularConnectionIcon}
                        resizeMode="cover"
                        source={require("../assets/cellular-connection1.png")}
                    /> */}
                    <View style={[styles.timeStyle, styles.timeLayout]}>
                        <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
                    </View>
                </View>
                <View
                    style={[styles.rectangleParent12, styles.rectangleParentPosition]}
                >
                    <View style={[styles.groupChild28, styles.groupChildShadowBox1]} />
                    <View style={styles.imGoingToShakeYParent}>
                        <Text style={[styles.imGoingTo, styles.goingTypo]}>
                            International Band Mu...
                        </Text>
                        <View style={[styles.minParent, styles.minPosition1]}>
                            <Text
                                style={[styles.min, styles.minTypo]}
                            >{`36 Guild Street London, UK `}</Text>
                            {/* <Image
                                style={[styles.groupItem, styles.groupLayout2]}
                                resizeMode="cover"
                                source={require("../assets/group-6.png")}
                            /> */}
                        </View>
                        <View style={styles.onlineEventWrapper}>
                            <Text style={styles.onlineEvent}>{`Online Event `}</Text>
                        </View>
                    </View>
                    {/* <Image
                        style={[styles.groupInner, styles.groupLayout1]}
                        resizeMode="cover"
                        source={require("../assets/group-33318.png")}
                    /> */}
                    <View style={[styles.rectangleGroup, styles.rectangleLayout3]}>
                        <View style={styles.rectangleView} />
                        {/* <Image
                            style={[styles.groupIcon, styles.iconLayout]}
                            resizeMode="cover"
                            source={require("../assets/group-18129.png")}
                        /> */}
                    </View>
                    <View style={[styles.rectangleContainer, styles.rectangleLayout2]}>
                        <View style={styles.groupChild1} />
                        <Text style={styles.armanRokni}>
                            <Text style={styles.armanRokniTxtContainer}>
                                <Text style={styles.text}>{`10
`}</Text>
                                <Text style={styles.june}>June</Text>
                            </Text>
                        </Text>
                    </View>
                </View>
                <View
                    style={[styles.rectangleParent15, styles.rectangleParentPosition]}
                >
                    <View style={[styles.groupChild34, styles.groupChildShadowBox1]} />
                    <View style={[styles.imGoingToShakeYParent5, styles.goingPosition1]}>
                        <Text style={[styles.imGoingTo, styles.goingTypo]}>
                            Jo Malone London’s Mo..
                        </Text>
                        <View style={[styles.minContainer, styles.minPosition1]}>
                            <Text style={[styles.min2, styles.minTypo]}>
                                Radius Gallery • Santa Cruz, CA
                            </Text>
                            {/* <Image
                                style={[styles.groupItem, styles.groupLayout2]}
                                resizeMode="cover"
                                source={require("../assets/group-6.png")}
                            /> */}
                        </View>
                    </View>
                    {/* <Image
                        style={[styles.groupInner, styles.groupLayout1]}
                        resizeMode="cover"
                        source={require("../assets/group-333181.png")}
                    /> */}
                    <View style={[styles.rectangleGroup, styles.rectangleLayout3]}>
                        <View style={styles.rectangleView} />
                        {/* <Image
                            style={[styles.groupIcon, styles.iconLayout]}
                            resizeMode="cover"
                            source={require("../assets/group-181291.png")}
                        /> */}
                    </View>
                    <View style={[styles.rectangleContainer, styles.rectangleLayout2]}>
                        <View style={styles.groupChild1} />
                        <Text style={styles.armanRokni}>
                            <Text style={styles.armanRokniTxtContainer}>
                                <Text style={styles.text}>{`10
`}</Text>
                                <Text style={styles.june}>June</Text>
                            </Text>
                        </Text>
                    </View>
                </View>
                <View style={[styles.popularGroup, styles.popularParentPosition]}>
                    <Text style={[styles.popular, styles.popularTypo]}>
                        Upcoming Events
                    </Text>
                    <View style={[styles.allCopyParent, styles.groupChild27Layout]}>
                        <Text style={[styles.allCopy, styles.inviteLayout]}>See All</Text>
                        {/* <Image
                            style={[styles.vectorIcon, styles.minPosition1]}
                            resizeMode="cover"
                            source={require("../assets/vector-1.png")}
                        /> */}
                    </View>
                </View>
                <View style={[styles.popularContainer, styles.popularParentPosition]}>
                    <Text style={[styles.popular, styles.popularTypo]}>Your Events</Text>
                    <View style={[styles.allCopyParent, styles.groupChild27Layout]}>
                        <Text style={[styles.allCopy, styles.inviteLayout]}>See All</Text>
                        {/* <Image
                            style={[styles.vectorIcon, styles.minPosition1]}
                            resizeMode="cover"
                            source={require("../assets/vector-1.png")}
                        /> */}
                    </View>
                </View>
                <View style={[styles.popularParent1, styles.popularParentPosition]}>
                    <Text style={[styles.popular, styles.popularTypo]}>
                        All Event near you
                    </Text>
                    <View style={[styles.allCopyParent, styles.groupChild27Layout]}>
                        <Text style={[styles.allCopy, styles.inviteLayout]}>See All</Text>
                        {/* <Image
                            style={[styles.vectorIcon, styles.minPosition1]}
                            resizeMode="cover"
                            source={require("../assets/vector-1.png")}
                        /> */}
                    </View>
                </View>
                <View style={[styles.rectangle1, styles.homeItemPosition]} />
                {/* <Image
                    style={[styles.homeItem, styles.homeItemPosition]}
                    resizeMode="cover"
                    source={require("../assets/group-33650.png")}
                /> */}
                <View style={styles.internationalGalaMParent}>
                    <Text style={[styles.internationalGalaM, styles.popularTypo]}>
                        Invite your friends
                    </Text>
                    <Text style={[styles.madisonAveNew, styles.madisonAveNewTypo]}>
                        Get $20 for ticket
                    </Text>
                    <View style={styles.groupChild43} />
                    <Text style={[styles.invite, styles.inviteLayout]}>Invite</Text>
                </View>
                <View style={[styles.icroundPeople, styles.icroundLayout]} />
                {/* <Image
                    style={[styles.icroundPeopleIcon, styles.icroundLayout]}
                    resizeMode="cover"
                    source={require("../assets/icroundpeople.png")}
                /> */}
                {/* <Image
                    style={[styles.riliveLineIcon4, styles.riliveIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/riliveline.png")}
                /> */}
                <Text
                    style={[styles.onlineEvent5, styles.onlineTypo]}
                >{`Online Event `}</Text>
                {/* <Image
                    style={[styles.riliveLineIcon5, styles.riliveIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/riliveline.png")}
                /> */}
                {/* <Image
                    style={[styles.vectorIcon1, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                /> */}
                <Text style={styles.text6}>6</Text>
                <View style={[styles.homeChild1, styles.homeChild1Position]} />
                {/* <Image
                    style={[styles.searchIcon1, styles.searchIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/search1.png")}
                /> */}
                <Text style={[styles.best15Rock, styles.best15RockPosition]}>
                    Explore groups you may like
                </Text>
                <Text
                    style={[styles.nowPlaying, styles.best15RockPosition]}
                >{`Find groups which match your interests `}</Text>
                {/* <Image
                    style={[styles.vectorIcon2, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/vector1.png")}
                /> */}
            </View>

            <Modal animationType="fade" transparent visible={frameButtonVisible}>
                <View style={styles.frameButtonOverlay}>
                    <Pressable style={styles.frameButtonBg} onPress={closeFrameButton} />
                    <Frame onClose={closeFrameButton} />
                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    groupChildLayout: {
        height: 255,
        width: 237,
        position: "absolute",
    },
    groupChildShadowBox1: {
        shadowOpacity: 1,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        backgroundColor: Color.secondaryWhite100,
    },
    goingTypo: {
        fontFamily: FontFamily.poppinsMedium,
        textAlign: "left",
        fontWeight: "500",
    },
    minPosition1: {
        opacity: 0.5,
        position: "absolute",
    },
    minTypo: {
        color: Color.gray_200,
        fontFamily: FontFamily.poppinsRegular,
        fontSize: FontSize.size_smi,
        marginTop: -10,
        textAlign: "left",
        top: "50%",
        position: "absolute",
    },
    groupLayout2: {
        height: 16,
        width: 16,
        left: 0,
        position: "absolute",
    },
    groupLayout1: {
        height: 131,
        width: 218,
        left: 9,
        position: "absolute",
    },
    rectangleLayout3: {
        height: 30,
        width: 30,
        left: 189,
        position: "absolute",
    },
    iconLayout: {
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: "hidden",
    },
    rectangleLayout2: {
        height: 47,
        left: 17,
        width: 45,
        position: "absolute",
    },
    rectangleParentLayout1: {
        height: 352,
        width: 242,
        left: 277,
        position: "absolute",
    },
    goingPosition1: {
        left: "6.61%",
        width: "93.39%",
        right: "0%",
        height: 85,
        top: "50%",
        position: "absolute",
    },
    riliveIconPosition1: {
        left: "10.67%",
        right: "84.53%",
    },
    riliveIconLayout1: {
        bottom: "-3.21%",
        top: "102.12%",
        width: "4.8%",
        height: "1.09%",
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    onlineTypo: {
        left: 315,
        color: Color.blueviolet_100,
        lineHeight: 19,
        fontSize: FontSize.size_xs,
        fontFamily: FontFamily.poppinsRegular,
        textAlign: "left",
        position: "absolute",
    },
    riliveIconPosition: {
        left: "78.13%",
        right: "17.07%",
    },
    popularParentPosition: {
        height: 34,
        right: "6.48%",
        width: "87.12%",
        left: "6.4%",
        top: "50%",
        position: "absolute",
    },
    popularTypo: {
        lineHeight: 34,
        color: Color.colorTypographyTitle,
        textAlign: "left",
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: "500",
        fontSize: FontSize.size_lg,
        left: "0%",
        top: "50%",
        position: "absolute",
    },
    groupChild27Layout: {
        height: 23,
        position: "absolute",
    },
    inviteLayout: {
        lineHeight: 23,
        position: "absolute",
    },
    rectangleParentPosition1: {
        right: "6.4%",
        width: "87.2%",
        left: "6.4%",
    },
    groupChildPosition: {
        bottom: "0%",
        right: "0%",
        left: "0%",
        position: "absolute",
        width: "100%",
    },
    groupWrapperLayout: {
        height: 89,
        top: "50%",
    },
    goingPosition: {
        marginTop: -44.5,
        left: "0%",
        position: "absolute",
    },
    timeTypo: {
        fontSize: FontSize.size_mini,
        top: "50%",
    },
    minPosition: {
        left: "10.84%",
        color: Color.slategray_100,
        fontSize: FontSize.size_xs,
        fontFamily: FontFamily.poppinsRegular,
        textAlign: "left",
        top: "50%",
        position: "absolute",
    },
    homeChildPosition: {
        width: 375,
        left: 0,
        position: "absolute",
    },
    homeInnerLayout: {
        height: 51,
        width: 330,
        position: "absolute",
    },
    searchIconLayout: {
        height: 24,
        width: 24,
        position: "absolute",
    },
    capIconLayout: {
        width: 1,
        position: "absolute",
    },
    groupLayout: {
        width: 63,
        height: 24,
        position: "absolute",
    },
    rectangleLayout: {
        backgroundColor: Color.gainsboro,
        borderRadius: Border.br_11xs_5,
        left: "100%",
        height: "12.5%",
        position: "absolute",
    },
    frameParentPosition: {
        height: 36,
        top: 0,
        position: "absolute",
    },
    homeChild1Position: {
        opacity: 0.7,
        position: "absolute",
    },
    madisonAveNewTypo: {
        fontSize: FontSize.size_smi,
        fontFamily: FontFamily.poppinsRegular,
        top: "50%",
        position: "absolute",
    },
    homeLayout: {
        height: 5,
        width: 134,
        left: "50%",
        position: "absolute",
    },
    timeLayout: {
        width: 54,
        position: "absolute",
    },
    rectangleParentPosition: {
        top: 257,
        height: 255,
        position: "absolute",
    },
    homeItemPosition: {
        left: "6.4%",
        position: "absolute",
    },
    icroundLayout: {
        height: 18,
        left: 130,
        width: 18,
        position: "absolute",
        overflow: "hidden",
    },
    riliveIconLayout: {
        bottom: "71.77%",
        top: "27.14%",
        width: "4.8%",
        height: "1.09%",
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    best15RockPosition: {
        left: "21.87%",
        fontFamily: FontFamily.poppinsRegular,
        textAlign: "left",
        position: "absolute",
    },
    groupChild: {
        elevation: 30,
        shadowRadius: 30,
        shadowColor: "rgba(80, 85, 136, 0.06)",
        borderRadius: Border.br_lg,
        shadowOpacity: 1,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        left: 0,
        top: 0,
        height: 255,
        width: 237,
        position: "absolute",
    },
    imGoingTo: {
        marginTop: -42.5,
        color: Color.black,
        textAlign: "left",
        fontSize: FontSize.size_lg,
        left: "0%",
        top: "50%",
        position: "absolute",
    },
    min: {
        left: "11.05%",
    },
    groupItem: {
        top: 2,
        height: 16,
        width: 16,
    },
    minParent: {
        width: "88.79%",
        right: "11.21%",
        height: 20,
        marginTop: 22.5,
        opacity: 0.5,
        left: "0%",
        top: "50%",
    },
    onlineEvent: {
        color: Color.blueviolet_100,
        lineHeight: 19,
        fontSize: FontSize.size_xs,
        fontFamily: FontFamily.poppinsRegular,
        textAlign: "left",
        left: 0,
        top: 0,
        position: "absolute",
    },
    onlineEventWrapper: {
        top: 36,
        left: 22,
        width: 74,
        height: 20,
        position: "absolute",
    },
    imGoingToShakeYParent: {
        width: "90.3%",
        right: "2.95%",
        left: "6.75%",
        height: 85,
        top: "50%",
        marginTop: 26.5,
        position: "absolute",
    },
    groupInner: {
        top: 9,
    },
    rectangleView: {
        borderRadius: Border.br_6xs,
        backgroundColor: Color.gray_400,
        height: 30,
        width: 30,
        left: 0,
        top: 0,
        position: "absolute",
    },
    groupIcon: {
        height: "46.67%",
        width: "46.99%",
        top: "26.67%",
        right: "26.34%",
        bottom: "26.67%",
        left: "26.67%",
        position: "absolute",
    },
    rectangleGroup: {
        top: 17,
    },
    groupChild1: {
        borderRadius: Border.br_3xs,
        height: 45,
        width: 45,
        backgroundColor: Color.gray_400,
        left: 0,
        top: 0,
        position: "absolute",
    },
    text: {
        lineHeight: 6,
        fontWeight: "700",
        fontFamily: FontFamily.poppinsBold,
        fontSize: FontSize.size_lg,
    },
    june: {
        lineHeight: 14,
        fontFamily: FontFamily.airbnbCerealApp,
        fontSize: FontSize.size_3xs,
        fontWeight: "500",
    },
    armanRokniTxtContainer: {
        width: "100%",
    },
    armanRokni: {
        marginTop: -20.34,
        width: "73.33%",
        left: "13.33%",
        color: Color.salmon,
        display: "flex",
        alignItems: "center",
        height: 44,
        textAlign: "center",
        textTransform: "uppercase",
        top: "50%",
        position: "absolute",
    },
    rectangleContainer: {
        top: 17,
    },
    rectangleParent: {
        top: 1156,
        left: 24,
        height: 255,
    },
    groupChild2: {
        elevation: 30,
        shadowRadius: 30,
        shadowColor: "rgba(80, 85, 136, 0.06)",
        borderRadius: Border.br_lg,
        shadowOpacity: 1,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        left: 0,
        top: 0,
        height: 255,
        width: 237,
        position: "absolute",
    },
    groupView: {
        top: 1496,
        left: 24,
        height: 255,
    },
    groupChildShadowBox: {
        top: 97,
        shadowOpacity: 1,
        elevation: 30,
        shadowRadius: 30,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowColor: "rgba(80, 85, 136, 0.06)",
        borderRadius: Border.br_lg,
        left: 0,
        height: 255,
        width: 237,
        position: "absolute",
        backgroundColor: Color.secondaryWhite100,
    },
    min2: {
        left: "9.29%",
    },
    minContainer: {
        right: "0%",
        height: 20,
        marginTop: 22.5,
        opacity: 0.5,
        left: "0%",
        top: "50%",
        width: "100%",
    },
    imGoingToShakeYContainer: {
        marginTop: 75,
    },
    groupChild10: {
        top: 106,
    },
    rectangleParent4: {
        top: 0,
    },
    rectangleParent5: {
        top: 114,
    },
    rectangleParent3: {
        top: 1059,
    },
    rectangleParent6: {
        top: 1399,
    },
    riliveLineIcon: {
        bottom: "17.38%",
        top: "81.53%",
        width: "4.8%",
        height: "1.09%",
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    riliveLineIcon1: {
        left: "10.67%",
        right: "84.53%",
    },
    onlineEvent2: {
        top: 1345,
    },
    onlineEvent3: {
        top: 1685,
    },
    riliveLineIcon2: {
        bottom: "17.38%",
        top: "81.53%",
        width: "4.8%",
        height: "1.09%",
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    riliveLineIcon3: {
        bottom: "-3.21%",
        top: "102.12%",
        width: "4.8%",
        height: "1.09%",
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    popular: {
        marginTop: -17,
        opacity: 0.84,
        color: Color.colorTypographyTitle,
    },
    allCopy: {
        marginTop: -11.5,
        textAlign: "right",
        color: Color.slategray_100,
        fontSize: FontSize.size_sm,
        fontFamily: FontFamily.poppinsRegular,
        left: "0%",
        top: "50%",
    },
    vectorIcon: {
        left: 51,
        borderRadius: Border.br_12xs,
        width: 6,
        height: 9,
        top: 9,
    },
    allCopyParent: {
        marginTop: -11,
        width: "17.67%",
        left: "82.33%",
        right: "0%",
        top: "50%",
    },
    popularParent: {
        marginTop: -133.5,
    },
    groupChild20: {
        top: "0%",
        height: "100%",
        bottom: "0%",
        shadowOpacity: 1,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        backgroundColor: Color.secondaryWhite100,
        elevation: 30,
        shadowRadius: 30,
        shadowColor: "rgba(80, 85, 136, 0.06)",
        borderRadius: Border.br_lg,
    },
    womensLeadership: {
        height: "82.14%",
        width: "24.16%",
        top: "8.93%",
        right: "72.78%",
        bottom: "8.93%",
        left: "3.06%",
        position: "absolute",
    },
    sgsitsAlumniChapter: {
        color: Color.colorTypographyTitle,
    },
    johnDoe: {
        color: Color.slategray_100,
    },
    imGoingToContainer: {
        width: "94.09%",
        marginTop: -44.5,
        left: "0%",
        position: "absolute",
        textAlign: "left",
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: "500",
    },
    min4: {
        marginTop: 2,
    },
    min5: {
        marginTop: -20,
    },
    groupChild21: {
        top: 23,
    },
    minParent2: {
        marginTop: 4.5,
        height: 40,
        right: "0%",
        left: "0%",
        top: "50%",
        position: "absolute",
        width: "100%",
    },
    imGoingToShakeYParent2: {
        height: 89,
        top: "50%",
        right: "0%",
        width: "100%",
    },
    groupWrapper: {
        marginTop: -46,
        width: "62.08%",
        right: "5.2%",
        left: "32.72%",
        position: "absolute",
    },
    favoriteActiveIcon: {
        height: "14.29%",
        width: "4.93%",
        top: "12.5%",
        right: "4.25%",
        bottom: "73.21%",
        left: "90.83%",
        position: "absolute",
    },
    rectangleParent9: {
        top: "44.58%",
        bottom: "48.64%",
        height: "6.78%",
        width: "87.2%",
        position: "absolute",
    },
    groupChild22: {
        top: "0%",
        height: "100%",
        bottom: "0%",
        shadowOpacity: 1,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        backgroundColor: Color.secondaryWhite100,
        elevation: 30,
        shadowRadius: 30,
        shadowColor: "rgba(80, 85, 136, 0.06)",
        borderRadius: Border.br_lg,
    },
    rectangleParent10: {
        top: "52.21%",
        bottom: "41.01%",
        height: "6.78%",
        width: "87.2%",
        position: "absolute",
    },
    homeChild: {
        borderBottomRightRadius: Border.br_14xl,
        borderBottomLeftRadius: Border.br_14xl,
        backgroundColor: "#4a43ec",
        height: 179,
        top: 0,
    },
    groupChild24: {
        borderRadius: 50,
        backgroundColor: "#5d56f3",
        left: 0,
        top: 0,
    },
    searchIcon: {
        left: 13,
        top: 14,
        overflow: "hidden",
    },
    search: {
        left: 57,
        fontSize: FontSize.size_base,
        letterSpacing: -1,
        opacity: 0.3,
        color: Color.secondaryWhite100,
        top: 14,
        fontFamily: FontFamily.poppinsRegular,
        textAlign: "left",
        position: "absolute",
    },
    lineView: {
        top: 16,
        left: 47,
        borderColor: "#7974e7",
        borderRightWidth: 1,
        height: 21,
        borderStyle: "solid",
    },
    groupChild25: {
        left: 0,
        top: 0,
    },
    filters: {
        top: 5,
        left: 27,
        fontSize: 12,
        height: 17,
        width: 36,
        color: Color.secondaryWhite100,
        fontFamily: FontFamily.poppinsRegular,
        textAlign: "left",
        position: "absolute",
    },
    groupParent: {
        left: 0,
        top: 0,
    },
    groupFrame: {
        left: 248,
        top: 14,
    },
    rectangleParent11: {
        left: 0,
        top: 0,
    },
    homeInner: {
        top: 93,
        left: 21,
    },
    rectangle: {
        top: "270.83%",
        bottom: "-183.33%",
        right: "-100%",
        backgroundColor: Color.gainsboro,
        borderRadius: Border.br_11xs_5,
        left: "100%",
        height: "12.5%",
        width: "100%",
    },
    rectangleCopy5: {
        width: "75%",
        top: "314.58%",
        right: "-75%",
        bottom: "-227.08%",
        backgroundColor: Color.gainsboro,
        borderRadius: Border.br_11xs_5,
        left: "100%",
        height: "12.5%",
    },
    rectangleCopy6: {
        top: "358.33%",
        bottom: "-270.83%",
        right: "-100%",
        backgroundColor: Color.gainsboro,
        borderRadius: Border.br_11xs_5,
        left: "100%",
        height: "12.5%",
        width: "100%",
    },
    combinedShape: {
        height: 19,
        width: 24,
        backgroundColor: Color.secondaryWhite100,
    },
    combinedShape2: {
        height: "53.33%",
        width: "7.34%",
        top: "22.22%",
        right: "92.66%",
        bottom: "24.44%",
        opacity: 0.94,
        left: "0%",
        position: "absolute",
    },
    groupChild26: {
        left: 291,
        width: 36,
    },
    currentLocation: {
        marginTop: -9,
        left: "1.87%",
        color: Color.secondaryWhite100,
        textAlign: "center",
        fontSize: FontSize.size_xs,
        fontFamily: FontFamily.poppinsRegular,
        top: "50%",
    },
    currentLocationWrapper: {
        height: "44.44%",
        width: "87.7%",
        right: "11.48%",
        bottom: "55.56%",
        left: "0.82%",
        top: "0%",
        position: "absolute",
        overflow: "hidden",
    },
    dhakaBangladesh: {
        marginTop: -2,
        left: "9.02%",
        color: "#f4f4fe",
        textAlign: "center",
        fontFamily: FontFamily.poppinsRegular,
    },
    frameParent: {
        left: 102,
        width: 122,
        overflow: "hidden",
    },
    combinedShape2Parent: {
        height: "2.18%",
        top: "2.67%",
        bottom: "95.15%",
        position: "absolute",
    },
    icon: {
        height: "0.3%",
        width: "2.67%",
        top: "3.03%",
        right: "34.13%",
        bottom: "96.67%",
        left: "63.2%",
        opacity: 0.9,
        position: "absolute",
    },
    rectangleIcon: {
        height: "79.28%",
        top: "10.81%",
        bottom: "9.91%",
        right: "0%",
        left: "0%",
        position: "absolute",
        width: "100%",
    },
    explore: {
        top: "56.76%",
        left: "22.67%",
        color: Color.mediumslateblue_100,
        textAlign: "center",
        fontSize: FontSize.size_xs,
        fontFamily: FontFamily.poppinsRegular,
        position: "absolute",
    },
    groupChild27: {
        top: 39,
        left: 95,
        width: 23,
    },
    homeIndicator: {
        marginLeft: -67,
        bottom: 0,
        borderRadius: Border.br_81xl,
        backgroundColor: Color.darkslategray,
    },
    barsHomeIndicatorOnLig: {
        marginTop: 3,
        marginLeft: -66.5,
        top: "50%",
        overflow: "hidden",
    },
    uiElements1HomeIndicator: {
        top: "0%",
        height: "100%",
        bottom: "0%",
    },
    uiElements1HomeIndicatorWrapper: {
        height: "30.63%",
        top: "69.37%",
        opacity: 0.1,
    },
    frameButtonOverlay: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(113, 113, 113, 0.3)",
    },
    frameButtonBg: {
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
    },
    ovalIcon: {
        width: 86,
        height: 86,
        zIndex: 0,
    },
    addBoxMaterial: {
        left: "28.26%",
        fontSize: FontSize.size_xl,
        fontFamily: FontFamily.material,
        zIndex: 1,
        color: Color.secondaryWhite100,
        marginTop: -10,
        textAlign: "left",
        top: "50%",
        position: "absolute",
    },
    ovalParent: {
        left: 164,
        flexDirection: "row",
        top: 0,
        position: "absolute",
    },
    vectorParent: {
        height: "6.72%",
        top: "94%",
        bottom: "-0.73%",
        right: "0%",
        left: "0%",
        position: "absolute",
        width: "100%",
    },
    iconlyboldcalendar: {
        height: "54.76%",
        width: "58.97%",
        right: "20.51%",
        bottom: "45.24%",
        left: "20.51%",
        top: "0%",
        position: "absolute",
    },
    events: {
        top: "57.14%",
        color: Color.darkslategray,
        textAlign: "center",
        fontSize: FontSize.size_xs,
        fontFamily: FontFamily.poppinsRegular,
        left: "0%",
        position: "absolute",
    },
    iconlyboldcalendarParent: {
        height: "2.54%",
        width: "10.4%",
        top: "96.37%",
        right: "22.67%",
        bottom: "1.09%",
        left: "66.93%",
        opacity: 0.2,
        position: "absolute",
    },
    border: {
        right: 2,
        borderRadius: 3,
        borderColor: "#fff",
        borderWidth: 1,
        width: 22,
        opacity: 0.35,
        height: 11,
        borderStyle: "solid",
        top: 0,
        position: "absolute",
    },
    capIcon: {
        top: 4,
        right: 0,
        height: 4,
        opacity: 0.4,
    },
    capacity: {
        right: 4,
        borderRadius: 1,
        height: 7,
        width: 18,
        top: 2,
        position: "absolute",
        backgroundColor: Color.secondaryWhite100,
    },
    battery: {
        right: 15,
        height: 11,
        width: 24,
        top: 17,
        position: "absolute",
    },
    wifiIcon: {
        width: 15,
        height: 11,
    },
    cellularConnectionIcon: {
        width: 17,
        height: 11,
    },
    time: {
        marginTop: -3.5,
        letterSpacing: 0,
        fontWeight: "600",
        fontFamily: FontFamily.sFProText,
        color: Color.secondaryWhite100,
        fontSize: FontSize.size_mini,
        top: "50%",
        textAlign: "center",
        left: 0,
    },
    timeStyle: {
        top: 7,
        height: 21,
        left: 21,
    },
    barsStatusBarIphoneL: {
        top: -1,
        height: 44,
    },
    groupChild28: {
        elevation: 30,
        shadowRadius: 30,
        shadowColor: "rgba(80, 85, 136, 0.06)",
        borderRadius: Border.br_lg,
        shadowOpacity: 1,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        left: 0,
        top: 0,
        height: 255,
        width: 237,
        position: "absolute",
    },
    rectangleParent12: {
        top: 257,
        width: 237,
        left: 24,
    },
    groupChild34: {
        elevation: 30,
        shadowRadius: 30,
        shadowColor: "rgba(80, 85, 136, 0.06)",
        borderRadius: Border.br_lg,
        shadowOpacity: 1,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        left: 0,
        top: 0,
        height: 255,
        width: 237,
        position: "absolute",
    },
    imGoingToShakeYParent5: {
        marginTop: 26.5,
        width: "93.39%",
    },
    rectangleParent15: {
        width: 242,
        left: 277,
        top: 257,
    },
    popularGroup: {
        marginTop: -612.5,
    },
    popularContainer: {
        marginTop: 286.5,
    },
    popularParent1: {
        marginTop: 626.5,
    },
    rectangle1: {
        height: "7.69%",
        width: "87.47%",
        top: "32.77%",
        right: "6.13%",
        bottom: "59.54%",
        borderRadius: Border.br_xs,
        backgroundColor: "rgba(0, 248, 255, 0.16)",
    },
    homeItem: {
        height: "9.93%",
        width: "93.6%",
        top: "32.34%",
        bottom: "57.72%",
        right: "0%",
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: "hidden",
    },
    internationalGalaM: {
        marginTop: -48,
        color: Color.colorTypographyTitle,
    },
    madisonAveNew: {
        marginTop: -14,
        width: "82.1%",
        color: "#484d70",
        fontFamily: FontFamily.poppinsRegular,
        textAlign: "left",
        left: "0%",
    },
    groupChild43: {
        top: 64,
        borderRadius: Border.br_8xs,
        backgroundColor: Color.colorPrimaryCyanSecondary,
        width: 72,
        height: 32,
        left: 0,
        position: "absolute",
    },
    invite: {
        top: 68,
        left: 18,
        color: Color.secondaryWhite100,
        textTransform: "uppercase",
        fontSize: FontSize.size_xs,
        textAlign: "left",
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: "500",
    },
    internationalGalaMParent: {
        marginTop: -271.5,
        width: "43.2%",
        right: "45.6%",
        left: "11.2%",
        height: 96,
        top: "50%",
        position: "absolute",
    },
    icroundPeople: {
        top: 795,
    },
    icroundPeopleIcon: {
        top: 921,
    },
    riliveLineIcon4: {
        left: "10.67%",
        right: "84.53%",
    },
    onlineEvent5: {
        top: 447,
    },
    riliveLineIcon5: {
        left: "78.13%",
        right: "17.07%",
    },
    vectorIcon1: {
        height: "0.64%",
        width: "4.4%",
        top: "48.38%",
        right: "60.73%",
        bottom: "50.98%",
        left: "34.87%",
        position: "absolute",
    },
    text6: {
        top: 50,
        left: 336,
        fontSize: 7,
        color: Color.secondaryWhite100,
        fontFamily: FontFamily.poppinsRegular,
        textAlign: "left",
        position: "absolute",
    },
    homeChild1: {
        height: "3.88%",
        top: "60.39%",
        bottom: "35.74%",
        borderRadius: Border.br_mini,
        shadowColor: "rgba(0, 0, 0, 0.07)",
        shadowRadius: 10,
        elevation: 10,
        right: "6.4%",
        width: "87.2%",
        left: "6.4%",
        shadowOpacity: 1,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        backgroundColor: Color.secondaryWhite100,
        opacity: 0.7,
    },
    searchIcon1: {
        top: 1017,
        left: 42,
        overflow: "hidden",
    },
    best15Rock: {
        top: "61.18%",
        color: Color.gray_300,
        fontSize: FontSize.size_sm,
    },
    nowPlaying: {
        top: "62.39%",
        color: Color.slategray_200,
        fontSize: FontSize.size_3xs,
    },
    vectorIcon2: {
        height: "0.73%",
        width: "1.87%",
        top: "61.96%",
        right: "11.73%",
        bottom: "37.31%",
        left: "86.4%",
        position: "absolute",
    },
    home: {
        flex: 1,
        height: 1651,
        overflow: "hidden",
        width: "100%",
        backgroundColor: Color.secondaryWhite100,
    },
});

export default Home;