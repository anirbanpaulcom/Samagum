import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import CustomScroll from '../../../components/CustomScroll'
import ImageButton from '../../../components/ImageButton'
import MText from '../../../components/Text';
import MyCard from '../../../components/Wrapper/MyCard';
import images from '../../../assets/images';
import InputBox from '../../../components/InputBox';
import Svg from '../../../assets/svg';

interface StepOneProps {
    steps: number;
    setSteps: Function;
    visible: boolean;
}

export default function StepOne({ details, setDetails,steps, setSteps, visible }: StepOneProps) {
    if (!visible) return null;

    const [location, setLocation] = useState("");

    function handleSubmit() {
        setDetails({ ...details, location });
        setSteps(2)
      
    }

    return (
        <>
            <CustomScroll>
                <View style={{ padding: 16 }}>
                    <MText style={styles.headText}>Step 1/4</MText>
                    <MyCard>
                        <Image
                            source={images.step1}
                            resizeMode="contain"
                            style={{ width: "100%", height: 28, marginVertical: 8 }}
                        />
                    </MyCard>

                    <MText style={styles.labelText}>First, set your group's location.</MText>
                    <InputBox
                        value={location}
                        autoCapitalize="none"
                        onChangeText={(val) => {
                            setLocation(val)
                        }}
                        placeholder='Location'
                        placeholderTextColor="#8D8D8D"
                        LeftIcon={<Svg.LocationFillIcon />}
                        inputContainer={{ backgroundColor: "#F9F9F9" }}
                    />
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
    }
})