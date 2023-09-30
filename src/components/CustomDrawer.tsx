import React, { useEffect, useState } from 'react';
import {
    Modal,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
} from 'react-native';
import { Size } from '../constants';
import MText from './Text';
import Button from './Button';
import Svg from '../assets/svg';
import Auth from "../constants/Auth";
import { useNavigation } from '@react-navigation/native';
import { LogoutApi } from '../API/new api';
import HomeScreen from '../screens/home/HomeScreen';
import { getUserProfile } from '../API/api';



interface CustomDrawerProps {
    modalVisible: boolean;
    callback: () => void;
    navigation: any;
}

const CustomDrawer = ({ modalVisible, callback }: CustomDrawerProps) => {
    const navigation = useNavigation();


    const [data, setData] = useState([]);

    useEffect(() => {
        getUserProfile((res) => {
            if (res !== null) {
                if (res?.success === true) {
                    setData(res?.data)
                }
            }
        })
    }, []);

   const SignOut = async ()=>{
    await LogoutApi();
    navigation.navigate('LoginScreen');
   }


   const HandleSetting = ()=>{
     navigation.navigate('SettingsScreen');
   }

   const HandleMygroups = ()=>{
    navigation.navigate('GroupsScreen');
  }

  const HandleMyEvents = ()=>{
    navigation.navigate('ImOrganizingScreen');
  }

  const HandlePinedEvents = ()=>{
    navigation.navigate('MyWatchListScreen');
  }


    return (
        <View style={{ alignItems: 'flex-start' }}>
            <Modal
                animationType="fade"
                transparent={true}
                onDismiss={callback}
                visible={modalVisible}
                onRequestClose={callback}>
                <TouchableHighlight
                    style={styles.centeredView}
                    onPress={() => {
                        callback();
                    }}
                    underlayColor="transparent">
                    <View style={styles.modalView}>
                        <Image
                            source={{ uri: data?.image }}
                            style={{ width: 60, height: 60, borderRadius: 100 }}
                        />
                        <MText style={styles.userName}>{data?.first_name + " " + data?.last_name}</MText>
                        <Button
                            title="My Group"
                            mode="text"
                            SvgIcon={<Svg.UserIcon />}
                            textStyle={styles.btnText}
                            style={styles.button}
                            onPress={HandleMygroups}

                        />

                        <Button
                            title="My Event"
                            mode="text"
                            SvgIcon={<Svg.UserIcon />}
                            textStyle={styles.btnText}
                            style={styles.button}
                            onPress={HandleMyEvents}
                        />

                        <Button
                            title="Upgrade Plan"
                            mode="text"
                            SvgIcon={<Svg.PaymentIcon />}
                            textStyle={styles.btnText}
                            style={styles.button}
                        />

                        <Button
                            title="Pinned  Events"
                            mode="text"
                            SvgIcon={<Svg.WishlistIcon />}
                            textStyle={styles.btnText}
                            style={styles.button}
                            onPress={HandlePinedEvents}
                        />

                        <Button
                            title="Contact Us"
                            mode="text"
                            SvgIcon={<Svg.MailOIcon />}
                            textStyle={styles.btnText}
                            style={styles.button}
                        />

                        <Button
                            title="Settings"
                            mode="text"
                            SvgIcon={<Svg.SettingsIcon />}
                            textStyle={styles.btnText}
                            style={styles.button}
                            onPress={HandleSetting}
                        />

                        <Button
                            title="Help & FAQs"
                            mode="text"
                            SvgIcon={<Svg.HelpIcon />}
                            textStyle={styles.btnText}
                            style={styles.button}
                        />

                        <Button
                            title="Sign Out"
                            mode="text"
                            SvgIcon={<Svg.SignoutIcon />}
                            textStyle={styles.btnText}
                            style={styles.button}
                            onPress={SignOut}
                        />

                        <Button
                            title="Upgrade Pro"
                            SvgIcon={<Svg.UpgradeIcon />}
                            textStyle={styles.upgradeText}
                            style={styles.upgradeButton}
                            background='#00F8FF33'
                        />
                    </View>
                </TouchableHighlight>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'rgba(0,0,0,0.6)',
        width: Size.wWidth,
        height: Size.wHeight,
    },
    modalView: {
        backgroundColor: 'white',
        padding: 24,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: Size.wWidth / 1.3,
        height: Size.wHeight,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    },
    userName: {
        fontSize: 18,
        fontWeight: "500",
        color: "#000",
        marginTop: 16,
        marginBottom: 12
    },
    btnText: {
        fontSize: 16,
        fontWeight: "400",
        color: "#000",
        marginLeft: 16
    },
    upgradeText: {
        fontSize: 14,
        fontWeight: "400",
        color: "#00F8FF",
        marginLeft: 12
    },
    button: {
        alignItems: "flex-start",
        marginVertical: 2.8
    },
    upgradeButton: {
        alignItems: "center",
        marginVertical: 2.8,
        width: 160,
        height: 46,
        justifyContent: "center",
        position: "absolute",
        bottom: 32,
        left: 28
    }
});

export default CustomDrawer;