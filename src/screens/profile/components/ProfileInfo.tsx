import { View, Text, Image, StyleSheet, TextInput, ImageBackground} from 'react-native'
import React, { useState } from 'react' 
import images from '../../../assets/images'
import MText from '../../../components/Text'
import Button from '../../../components/Button';
import Svg from '../../../assets/svg';
import { Row } from '../../../components/Wrapper';
import { MyList } from '../../interests/components/SearchContainer';
import { TouchableOpacity } from 'react-native';
import { Colors, Styles } from '../../../styles';
import { addBioAPI } from '../../../API/new api';
import { useNavigation } from '@react-navigation/native';
import svg from '../../../assets/svg';

// import { Button } from 'react-native-paper'

interface ProfileInfoProps {
    btnText: string;
    btnIcon: any;
    data: any;
    onPress?: () => void;
}

export default function ProfileInfo({ btnIcon, btnText, data, onPress }: ProfileInfoProps) {
    const navigation = useNavigation();

    
    const [newBio, setNewBio] = useState('');
    const [bioField, setBioField] = useState(false);
   

    const handleOpenAbout = () =>{
        setBioField(true);
    }

    const handleBioAdd = async () => {
        try {
          const result = await addBioAPI(newBio);
          setBioField(false);
          if (result !== null) {
            console.log('Bio updated successfully:', result);
          } else {
            console.error('Error updating bio');
          }
        } catch (error) {
          console.error('An error occurred while updating bio:', error);
        }
      };


    return (
        <View>
           
            {data?.profile
                ? (
                   <ImageBackground
                    source={{ uri: data?.profile }}
                    style={styles.profile}
                >
                    <TouchableOpacity style={styles.edit} onPress={() => { }}>
                        <Svg.EditPencilIcon />
                    </TouchableOpacity>
                </ImageBackground>
                )
                : (<ImageBackground
                    source={images.profile}
                    style={styles.profile}
                >
                    <TouchableOpacity style={styles.edit} onPress={() => { }}>
                        <Svg.EditPencilIcon />
                    </TouchableOpacity>
                </ImageBackground>
            )
            }

            <MText style={styles.userName}>{data?.first_name + " " + data?.last_name}</MText>
        <Row>
        <MText style={styles.bio}>Personal Info</MText> 
        <TouchableOpacity style={styles.infoedit} onPress={onPress}>
            <Svg.EditPencil/>
        </TouchableOpacity>
        </Row>

        <Row>
        <MText style={styles.bioText}>
            General
        </MText>
        <TouchableOpacity style={styles.infoedit} onPress={onPress}>
            <Svg.DownArrow/>
        </TouchableOpacity>
        </Row>
            <Row>
        <MText style={styles.bioText}>
        Contact Details
        </MText>
        <TouchableOpacity style={styles.infoedit} onPress={onPress}>
            <Svg.DownArrow/>
        </TouchableOpacity>
        </Row>
        <Row>
        <MText style={styles.bioText}>
        Miscellaneous
        </MText>
        <TouchableOpacity style={styles.infoedit} onPress={onPress}>
            <Svg.DownArrow/>
        </TouchableOpacity>
        </Row>

        <Row>
        <MText style={styles.bio}>About</MText>
        <TouchableOpacity style={[styles.infoedit]} onPress={handleOpenAbout}>
            {bioField? <MText onPress={handleBioAdd}>Ok</MText> : 
            <Svg.EditPencil/>
            }
        </TouchableOpacity>
        </Row>

        {bioField ?
            <TextInput
            placeholder='Add Bio'
            placeholderTextColor={Colors.primary}
            style={styles.inputStyle}
            onChangeText={(text) => setNewBio(text)}
          /> :
        <MText style={styles.bioText}>
                {data?.bio || "Introduce yourself to others on Samagum. This can be short and simple."}
        </MText>
    }  


            <MText style={styles.bio}>Inclinations</MText>
            <Row style={{ flexGrow: 1, flexWrap: "wrap", marginHorizontal: 20, marginVertical: 10 }}>
                {MyList.map((item, indx) => {
                    return (
                        <TouchableOpacity style={styles.artAndCulture} key={indx}>
                            <MText style={styles.artAndCultureText}>{item}</MText>
                            <View style={{ marginLeft: 4, marginTop: 2 }}>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </Row>

        <Row>
        <MText style={styles.bio}>Social Links</MText>
        <TouchableOpacity style={[styles.infoedit]} onPress={() => navigation.navigate("SocialLinksScreen")}>
            <Svg.EditPencil/>
        </TouchableOpacity>
        </Row> 
        <Row style={{ flexGrow: 1, flexWrap: "wrap",justifyContent:"space-around" ,marginHorizontal: 20, marginVertical: 15 }}>
         <svg.FacebookIcon />
         <svg.LinkedinIcon />
         <svg.Twitter />
         </Row>
        </View>
    )
}

const styles = StyleSheet.create({
    profile: {
        width: 96,
        height: 96,
        borderRadius: 100,
        marginTop: -50,
        alignSelf: "center",
        borderColor: "blue",
    },
    userName: {
        fontSize: 24,
        color: "#000",
        textAlign: "center",
        marginVertical: 8
    },
    messageBtn: {
        borderRadius: 10,
        alignSelf: "center",
        paddingHorizontal: 16
    },
    bio: {
        fontSize: 18,
        fontWeight: "500",
        color: "#120D26",
        marginHorizontal: 20,
        marginTop: 40
    },
    bioText: {
        fontSize: 14,
        color: "#3C3E56",
        lineHeight: 22,
        marginHorizontal: 20,
        marginTop: 8
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
    inputStyle: {
        width: "90%",
        height: 52,
        borderWidth: 1,
        borderColor: "#B8B7C8",
        borderRadius: 14,
        alignSelf: "center",
        paddingHorizontal: 16,
        marginTop: 16
    },
    edit: {
        width: 28,
        height: 28,
        borderRadius: 12,
        backgroundColor: Colors.primary,
        ...Styles.centered,
        position: "absolute",
        bottom: 4,
        right: 4
    },
    infoedit: {
        width: 20,
        height: 20,
        borderRadius: 10,
        position: "absolute",
        bottom: 4,
        right: 4,
        marginHorizontal: 15,
    }
})