import { View, StyleSheet, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import MText from '../../components/Text'
import { Size } from '../../constants';
import Button from '../../components/Button';
import Row from '../../components/Row';
import { Colors, Styles } from '../../styles';
import { useDispatch } from 'react-redux';
import CustomLoader, { CustomPanel } from '../../components/CustomLoader';
import Svg from '../../assets/svg';
import svg from '../../assets/svg';
import CustomSwitch from '../../components/CustomSwitch';
import { SpaceBetweenRow } from '../../components/Wrapper';
import InputBox from '../../components/InputBox';
import ImageButton from '../../components/ImageButton';
import Toast from 'react-native-simple-toast';
import Auth from '../../constants/Auth';
import { setUser } from '../../redux/reducer/user';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';


const loginList = [
    {
        icon: svg.GoogleIcon,
    },
    {
        icon: svg.AppleIcon,
    },
    {
        icon: svg.XXXIcon,
    },
    {
        icon: svg.FacebookIcon,
    },
    {
        icon: svg.LinkedinIcon,
    },
    {
        icon: svg.MailIcon,
    },
]

export default function LoginScreen({ navigation }: any) {
    const dispatch = useDispatch();

    const inputRef = React.useRef();
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)
    const [openSignin, setOpensignin] = useState(false)



    const openEmailSignin = ()=>{
        if(openSignin){
            setOpensignin(false);
        }
        else{
            setOpensignin(true);
        }
    }

    const handleLogin = () => {
        if (!phone && !password) {
            Toast.show("Please enter all fields", 1000)
            return;
        }
        // navigation?.navigate("VerifyOtpScreen", {
        //     phone: phone,
        // })

        var formdata = new FormData();
        formdata.append("email", phone);
        formdata.append("password", password);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        setLoading(true)
        fetch("https://dev.samagum.com/api/v1/login_process", requestOptions)
            .then(response => response.json())
            .then(async (result: any) => {
                if (result?.success === false) {
                    Toast.show(result?.message, 1000);
                    setLoading(false)
                } else if (result?.success === true) {
                    await Auth.setLocalStorageData('token', result?.data?.token)
                        .then(async () => {
                            await Auth.setLocalStorageData('account', result?.data)
                                .then(() => {
                                    dispatch(setUser(result?.data));
                                    setLoading(false)
                                    navigation.navigate('WelcomeScreen');
                                    Toast.show(result?.message, 1000);
                                }).catch((e) => {
                                    setLoading(false)
                                    Toast.show("Oops! Something went wrong", 1000)
                                });
                        }).catch((e) => {
                            setLoading(false)
                            console.log("\n\n handleLogin catch2 error: ", e);
                            Toast.show("Oops! Something went wrong", 1000)
                        });
                }
            })
            .catch(error => {
                console.log('error', error)
                setLoading(false)
            });
    }

    // useEffect(() => {
    //     setLoading(false)
    // }, [])


    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor='transparent' barStyle="dark-content" />

            <Svg.LogoIcon />

            <Row style={{width:"100%",marginTop:10,paddingHorizontal:10,paddingVertical:10, justifyContent:"space-evenly", alignItems:"center" }}>
                <TouchableOpacity style={{width:75, height:55, backgroundColor:"#FFFFFF", justifyContent:"center", alignItems:"center", borderRadius:10}}>
                    <svg.GoogleIcon />
                </TouchableOpacity>
                <TouchableOpacity style={{width:75, height:55, backgroundColor:"#FFFFFF", justifyContent:"center", alignItems:"center", borderRadius:10}}>
                <svg.AppleIcon />
                </TouchableOpacity>
                <TouchableOpacity style={{width:75, height:55, backgroundColor:"#FFFFFF", justifyContent:"center", alignItems:"center", borderRadius:10}}>
                <svg.XXXIcon />
                </TouchableOpacity>
            </Row>

            <Row style={{width:"100%",paddingHorizontal:10,paddingVertical:10, justifyContent:"space-evenly" , alignItems:"center" }}>
            <TouchableOpacity style={{width:75, height:55, backgroundColor:"#FFFFFF", justifyContent:"center", alignItems:"center", borderRadius:10}}>
                  <svg.FacebookIcon />
            </TouchableOpacity>
                <TouchableOpacity style={{width:75, height:55, backgroundColor:"#FFFFFF", justifyContent:"center", alignItems:"center", borderRadius:10}}>
                <svg.LinkedinIcon />
                </TouchableOpacity>                
                <TouchableOpacity onPress={openEmailSignin} style={{width:75, height:55, backgroundColor:"#FFFFFF", justifyContent:"center", alignItems:"center", borderRadius:10}}>
                <svg.MailIcon />
                </TouchableOpacity> 
            </Row>

        {openSignin &&  

        <View style={{justifyContent:"center", alignItems:"center",width:"100%"}}>
        
        <MText style={styles.heading}>Sign in</MText>

            <InputBox
                inputRef={inputRef}
                value={phone}
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(val) => {
                    setPhone(val)
                }}
                placeholder='Enter email or phone'
                placeholderTextColor="#8D8D8D"
                LeftIcon={<Svg.UserIcon />}
            />

            <InputBox
                inputRef={inputRef}
                value={password}
                keyboardType="default"
                onChangeText={(val) => {
                    setPassword(val)
                }}
                secureTextEntry
                placeholder='Your Password'
                placeholderTextColor="#8D8D8D"
                LeftIcon={<Svg.LockIcon />}
            />

            <Row style={{ width: "100%", marginTop:10 }}>
                <View style={{width:"50%", alignItems:"flex-start"}}>
                <CustomSwitch
                    title="Remember Me"
                    onPress={() => { }}
                />
                </View>
                <TouchableOpacity
                    onPress={() => { navigation?.navigate("ForgotPasswordScreen") }}
                    style={{width:"50%", alignItems:"flex-end"}}
                >
                    <Text style={{fontWeight:400,color:'#5669FF'}}>Forgot Password?</Text>
                </TouchableOpacity>
            </Row>

            <ImageButton
                title="SIGN IN"
                onPress={handleLogin}
            />

            <Row style={{marginTop:50, justifyContent:"center"}}>
                <MText style={styles.alreadyAUser}>Don’t have an account?  </MText>
                <TouchableOpacity
                    onPress={() => { navigation.navigate("signupInformationScreen") }}
                >
                    <Text style={{fontSize:15,fontWeight:400,color:'#5669FF'}}>Sign up</Text>
                </TouchableOpacity>
            </Row>
        </View>
        }

            <CustomPanel loading={loading} />
            <CustomLoader loading={loading} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Size.wWidth,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FBFBFC",
        paddingHorizontal: 20
    },
    heading: {
        fontSize: 24,
        fontWeight: "500",
        color: "#000",
        marginVertical: 20,
        alignSelf: "flex-start"
    },
    inputStyle: {
        width: Size.wWidth / 1.1,
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#E4DFDF",
        fontWeight: "400",
        fontSize: 14,
        height: 56,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#fff",
    },
    button: {
        width: Size.wWidth / 1.4,
        marginTop: 20,
        height: 60,
    },
    alreadyAUser: {
        fontSize: 14,
        fontWeight: "500",
        color: "#000"
    },
    alreadyLogin: {
        fontSize: 14,
        fontWeight: "500",
        color: Colors.primary
    },
    socialLogin: {
        width: 76,
        height: 56,
        borderRadius: 12,
        elevation: 4,
        shadowColor: "#E4DFDF",
        backgroundColor: "#fff",
        ...Styles.centered,
        margin: 12
    },
    continueWithEmail: {
        width: Size.wWidth / 1.48,
        height: 56,
        borderRadius: 12,
        elevation: 4,
        shadowColor: "#E4DFDF",
        backgroundColor: "#fff",
        ...Styles.centered,
        margin: 12
    },
    label: {
        fontSize: 14,
        fontWeight: "600",
        color: "#000",
        marginLeft: 8
    },
    forgotPassword: {
        fontSize: 14,
        fontWeight: "500",
        color: "#000",
        marginLeft: 8
    }
})