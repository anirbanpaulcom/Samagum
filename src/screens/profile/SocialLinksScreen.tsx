import { StyleSheet, View } from "react-native";
import MText from "../../components/Text";
import SettingsHeader from "../settings/container/SettingsHeader";
import { TextInput } from "react-native-gesture-handler";
import { Colors, Styles } from '../../styles'
import { useState } from "react";
import ImageButton from "../../components/ImageButton";
import { AddSocialMediaApi } from "../../API/new api";
import { useNavigation } from '@react-navigation/native'


export default function SocialLinksScreen() {
    const navigation = useNavigation();


    const [fbLink, setFbLink] = useState();
    const [linkedinLink, setLinkedinLink] = useState();
    const [TwLink, setTwLink] = useState();

    
    const HandleSocialMedia = ()=>{
        AddSocialMediaApi(fbLink, linkedinLink, TwLink)
        .then(() => {
            navigation?.goBack(); 
          })
          .catch(error => {
            console.error(error);
          })
    }

    return(

        <View >
           <SettingsHeader />
           <MText style={styles.Headtext}>Social Links</MText>
           <MText style={{marginHorizontal:20,marginVertical:10}}>Add Your Social Links</MText>


           <SocialLinkInput
                    placeholder={"FaceBook Link"}
                    label='FaceBook Link'
                    value={fbLink}
                    onChange={(val) => {
                        setFbLink(val)
                    }}
                />
                          <SocialLinkInput
                    placeholder={"Linkedin Link"}
                    label='Linkedin'
                    value={linkedinLink}
                    onChange={(val) => {
                        setLinkedinLink(val)
                    }}
                />
                    <SocialLinkInput
                    placeholder={"Twitter Link"}
                    label='Twitter'
                    value={TwLink}
                    onChange={(val) => {
                        setTwLink(val)
                    }}
                />

                <ImageButton
                    title="SAVE"
                    onPress={HandleSocialMedia}
                /> 

        </View>
    )


}

interface SocialLinkInputProps {
    label: string;
    value: string;
    onChange: ((text: string) => void) | undefined;
    placeholder: string;
}

function SocialLinkInput({ label, value, KeyboardType, onChange, placeholder }: SocialLinkInputProps) {
    return (
        <View style={{}}>
            <MText style={styles.label}>{label}</MText>
            <TextInput
                placeholder={placeholder}
                value={value}
                keyboardType={KeyboardType}
                placeholderTextColor={Colors.gray6}
                style={styles.inputStyle}
                onChangeText={onChange}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Headtext:{
        fontSize:25,
        fontWeight:"500",
        marginHorizontal:20,
    },
    inputStyle: {
        width: "90%",
        height: 52,
        borderWidth: 1,
        borderColor: "#B8B7C8",
        borderRadius: 14,
        alignSelf: "center",
        paddingHorizontal: 16,
        marginTop: 10,
        fontSize: 12,
        fontWeight: "400",
        color: "#3C3E56",
        backgroundColor: "#FAFAFA"
    },
    label: {
        fontSize: 12,
        fontWeight: "500",
        color: "#120D26",
        marginBottom: -5,
        marginTop: 16,
        marginLeft:20,
    },

    
})