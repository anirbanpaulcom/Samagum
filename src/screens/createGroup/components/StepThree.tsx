import { View, Text, StatusBar, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import CustomScroll from '../../../components/CustomScroll'
import ImageButton from '../../../components/ImageButton'
import MText from '../../../components/Text';
import MyCard from '../../../components/Wrapper/MyCard';
import images from '../../../assets/images';
import InputBox from '../../../components/InputBox';
import Svg from '../../../assets/svg';
import { Button } from 'react-native-paper';
import { Colors } from '../../../styles';
import { launchImageLibrary } from 'react-native-image-picker';
import { Image } from 'react-native-svg';


interface StepThreeProps {
    steps: number;
    setSteps: Function;
    visible: boolean;
}

export const ImageOption ={
    title: 'Select Image',
    type: 'library',
    options: {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    },
}

export default function StepThree({ details, setDetails, steps, setSteps, visible }: StepThreeProps) {
    if (!visible) return null;

    const [name, setName] = useState("");
    const [eventImage, setEventImage] = useState(null);

    const openGallary = async()=>{
        const image = await launchImageLibrary(ImageOption);
        console.log(image,"00000000000000000000000");
        setEventImage(image.assets[0].uri);
       }

    function handleSubmit() {
        setDetails({ ...details, name, eventImage });
        setSteps(4)
    }

    return (
        <>
            <CustomScroll>
                <View style={{ padding: 16 }}>
                    <MText style={styles.headText}>Step 3/4</MText>
                    <MyCard>
                        <Image
                            source={images.step3}
                            resizeMode="contain"
                            style={{ width: "100%", height: 28, marginVertical: 8 }}
                        />
                    </MyCard>

                    <MText style={styles.labelText}>
                        What will your group's name be?
                    </MText>
                    <InputBox
                        value={name}
                        autoCapitalize="none"
                        onChangeText={(val) => {
                            setName(val)
                        }}
                        placeholder='Name'
                        placeholderTextColor="#8D8D8D"
                        inputContainer={{ backgroundColor: "#F9F9F9" }}
                    />
                </View>

                <View style={{ padding: 16 }}>
    <MText style={styles.label}>Upload Group Picture</MText>
    <TouchableOpacity onPress={openGallary} style={styles.fileContainer}>
        {eventImage ? (
            <ImageBackground
                source={{ uri: eventImage }}
                style={{ width: "100%", height: "100%",borderRadius: 14 }}
            />
        ) : (
            <>
                <Svg.UploadFilledIcon />
                <Text style={styles.BrowseFile}>Browse File</Text>
            </>
        )}
    </TouchableOpacity>
    </View>
                
            </CustomScroll>

            <ImageButton
                title="NEXT"
                style={{ position: "absolute", bottom: 120 }}
                onPress={handleSubmit}
            />
        </>
    )
}

const styles = StyleSheet.create({
    headText: {
        fontSize: 14,
        fontWeight: "400",
        color: "#000",
        textAlign: "center",
        marginBottom: 16
    },
    labelText: {
        fontSize: 14,
        fontWeight: "500",
        color: "#000",
        marginBottom: -4,
        marginTop: 40
    },
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        // marginLeft: 18
    },
    button: {
        borderRadius: 5,
        margin: 6,
        borderWidth: 1,
        borderColor: Colors.blue,
    },
    buttonText: {
        color: Colors.blue,
        fontSize: 14,
        fontWeight: "400",
        marginBottom: 9,
        marginTop: 8,
        marginHorizontal: 18
    },
    label: {
        fontSize: 12,
        fontWeight: "500",
        color: "#120D26",
        marginBottom: -5,
        marginTop: 16
    },
    BrowseFile: {
        fontSize: 14,
        fontWeight: "400",
        color: "#747688",
    },
    fileContainer: {
        borderWidth: 1,
        borderColor: "#B8B7C8",
        width: "100%",
        height: 130,
        backgroundColor: "#FAFAFA",
        borderRadius: 14,
        marginTop: 10,
        justifyContent:"center",
        alignItems:"center"
    },
})