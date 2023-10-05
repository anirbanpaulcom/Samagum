import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MText from '../../components/Text'
import styles from './styles'
import InputBox from '../../components/InputBox'
import ImageButton from '../../components/ImageButton'
import { useNavigation } from '@react-navigation/native'
import BackHeader from './components/BackHeader'
import Toast from 'react-native-simple-toast';
import Row from '../../components/Row'
import Svg from '../../assets/svg'




export default function signupInformationScreen() {
    const [email, setEmail]= useState("")
    const [ password, setPassword] = useState("");
    const [ ConfirmPassword, setConfirmPassword] = useState("");
    const [ phone, setPhone]= useState("");

    // function handleOnPress() { navigation?.navigate("VerifyOtpScreen") }


    const [openSignout, setOpensignout] = useState(false)



    const openEmailSignout = ()=>{
        if(openSignout){
            setOpensignout(false);
        }
        else{
            setOpensignout(true);
        }
    }


    const handleLogin = () => {
        if (!email && !password && !ConfirmPassword && !phone) {
            Toast.show("Please enter all fields", 1000)
            return;
        }
        var formdata = new FormData();
        formdata.append("first_name", fullName?.split(" ")[0]);
        formdata.append("last_name", fullName?.split(" ")[1]);
        formdata.append("email", email);
        formdata.append("password", password);
        formdata.append("password_confirmation", ConfirmPassword);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        setLoading(true);
        fetch("https://dev.samagum.com/api/v1/register", requestOptions)
            .then(response => response.json())
            .then(async (result: any) => {
                console.log('\n\n\n\n registerregisterregister: ', result);
                setLoading(false);
                if (result?.success === true) {
                    Toast.show(result?.message, 1000);
                    navigation.navigate('LoginScreen');
                    // navigation?.navigate("VerifyOtpScreen", {
                    //     phone: "9988776655",
                    // })
                } else if (result?.success === false) {
                    Toast.show(result?.message, 1000);
                }
            })
            .catch(error => {
                console.log('error', error)
                setLoading(false)
            });
    }

    return (
        <View style={{width:"100%", height:"100%", alignItems:"center"}}>

            <View style={{width:"100%", height:"15%", justifyContent:"center", marginLeft:50}}>
            <BackHeader onPress={() => { navigation.goBack()}} />
            <MText style={[styles.heading,{marginTop:0}]}>Sign up Information</MText>
            </View>

        <View style={{height:"20%", width:"100%",justifyContent:"center",alignItems:"center"}}>
    
            <Row style={{width:"100%",marginTop:10,paddingHorizontal:10,paddingVertical:10, justifyContent:"space-evenly", alignItems:"center" }}>
                <TouchableOpacity style={{width:75, height:55, backgroundColor:"#FFFFFF", justifyContent:"center", alignItems:"center", borderRadius:10}}>
                    <Svg.GoogleIcon />
                </TouchableOpacity>
                <TouchableOpacity style={{width:75, height:55, backgroundColor:"#FFFFFF", justifyContent:"center", alignItems:"center", borderRadius:10}}>
                <Svg.AppleIcon />
                </TouchableOpacity>
                <TouchableOpacity style={{width:75, height:55, backgroundColor:"#FFFFFF", justifyContent:"center", alignItems:"center", borderRadius:10}}>
                <Svg.XXXIcon />
                </TouchableOpacity>
            </Row>

            <Row style={{width:"100%",paddingHorizontal:10,paddingVertical:10, justifyContent:"space-evenly" , alignItems:"center" }}>
            <TouchableOpacity style={{width:75, height:55, backgroundColor:"#FFFFFF", justifyContent:"center", alignItems:"center", borderRadius:10}}>
                  <Svg.FacebookIcon />
            </TouchableOpacity>
                <TouchableOpacity style={{width:75, height:55, backgroundColor:"#FFFFFF", justifyContent:"center", alignItems:"center", borderRadius:10}}>
                <Svg.LinkedinIcon />
                </TouchableOpacity>                
                <TouchableOpacity onPress={openEmailSignout} style={{width:75, height:55, backgroundColor:"#FFFFFF", justifyContent:"center", alignItems:"center", borderRadius:10}}>
                <Svg.MailIcon />
                </TouchableOpacity> 
            </Row>

        </View>    

        {openSignout && 

        <View style={{height:"50%"}}>

           <MText style={styles.heading}>Sign Up</MText>

            <View style={{ marginTop: 20 }}>
                <MText style={styles.labelText}>Email</MText>
                <InputBox
                    value={email}
                    keyboardType="email-address"
                    onChangeText={(val) => {
                        setEmail(val)
                    }}
                    placeholder='abc@email.com'
                    placeholderTextColor="#8D8D8D"
                    LeftIcon={<Svg.MessageIcon />}
                />
            </View>

            <View>
                <MText style={styles.labelText}>Phone</MText>
                <InputBox
                    value={phone}
                    onChangeText={(val) => {
                        setPhone(val)
                    }}
                    secureTextEntry
                    placeholder='Enter your Phone Number'
                    placeholderTextColor="#8D8D8D"
                />
            </View>

            <View>
                <MText style={styles.labelText}>Password</MText>
                <InputBox
                    value={password}
                    onChangeText={(val) => {
                        setPassword(val)
                    }}
                    secureTextEntry
                    placeholder='Password'
                    placeholderTextColor="#8D8D8D"
                    LeftIcon={<Svg.LockIcon />}
                />
            </View>

            <View>
                <MText style={styles.labelText}>Confirm Password</MText>
                <InputBox
                    value={ConfirmPassword}
                    onChangeText={(val) => {
                        setConfirmPassword(val)
                    }}
                    secureTextEntry
                    placeholder='Confirm password'
                    placeholderTextColor="#8D8D8D"
                    LeftIcon={<Svg.LockIcon />}
                />
            </View>
                <ImageButton
                    title="SIGN UP"
                    onPress={handleLogin}
                />

        </View>

        }
        </View>
    )
}