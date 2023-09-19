import { StyleSheet } from "react-native";
import { Size } from "../../constants";

export default StyleSheet.create({
    container: {
        width: "100%",
        height: Size.wHeight,
        backgroundColor: "#fff"
    },
    heading: {
        fontSize: 18,
        fontWeight: "500",
        color: "#120D26",
        marginTop: 26,
        marginLeft: 20,
        marginBottom: 8,
    },
    card: {
        padding: 10, borderRadius: 14,
        elevation: 9,
        shadowColor: "#CCC",
        backgroundColor: "#fff",
        marginVertical: 8, marginLeft: 20
    },
    seeAll: {
        fontSize: 12,
        fontWeight: "400",
        color: "#747688",
        marginRight: 4,
    },
    title: {
        fontSize: 18,
        fontWeight: "500",
        color: "#000",
        marginTop: 8,
    },
    OnlineEvent: {
        fontSize: 12,
        fontWeight: "400",
        color: "#3F38DD",
        marginLeft: 4
    },
    EventAddress: {
        fontSize: 12,
        fontWeight: "400",
        color: "#747688",
        marginLeft: 4
    },
    inviteContainer: {
        width: Size.wWidth / 1.1,
        borderRadius: 16,
        alignSelf: "center",
        backgroundColor: "#D6FEFF",
        alignItems: "flex-start"
    },
    inviteTitle: {
        fontSize: 18,
        fontWeight: "500",
        color: "#000",
    },
    invitediscount: {
        fontSize: 14,
        fontWeight: "400",
        color: "#484D70",
    },
    groupCard: {
        padding: 10, borderRadius: 14,
        elevation: 9,
        shadowColor: "#CCC",
        backgroundColor: "#fff",
        marginVertical: 8,
        marginHorizontal: 20,
    },
    groupCardTitle: {
        fontSize: 15,
        fontWeight: "500",
        color: "#120D26",
    },
    joinButton: {
        width: 80,
        height: 35,
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 14,
        marginBottom: 6,
    },
    joinButtonText: {
        fontSize: 15,
        fontWeight: "500",
    },
    calendarTabText: {
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 24,
        color: "#747688"
    }
});