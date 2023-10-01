import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import CustomScroll from '../../../components/CustomScroll'
import ImageButton from '../../../components/ImageButton'
import MText from '../../../components/Text';
import MyCard from '../../../components/Wrapper/MyCard';
import images from '../../../assets/images';
import InputBox from '../../../components/InputBox';
import Svg from '../../../assets/svg';
import { Button, RadioButton } from 'react-native-paper';
import { Colors } from '../../../styles';
import CustomRadioButton from '../../../components/CustomRadioButton';
import { RenderRadioBtn } from '../../settings/LanguagesSettings';
import { Row } from '../../../components/Wrapper';
import { RadioButtonUi } from '../../../components/IcUi';
import { CreateGroupApi } from '../../../API/new api';
import { useNavigation } from "@react-navigation/native";

interface StepFourProps {
    steps: number;
    setSteps: Function;
    visible: boolean;
}

export default function StepFour({ details, setDetails,steps, setSteps, visible }: StepFourProps) {
    if (!visible) return null;

    const navigation = useNavigation();


    const [description, setdescription] = useState("");
    const [checked, setChecked] = React.useState('public');

    function handleSubmit() {
        setDetails({ ...details, description});
        navigation.navigate("UpgraderProScreen");
        CreateGroupApi(details);
    }

    return (
        <>
            <CustomScroll>
                <View style={{ padding: 16 }}>
                    <MText style={styles.headText}>Step 4/4</MText>
                    <MyCard>
                        <Image
                            source={images.step4}
                            resizeMode="contain"
                            style={{ width: "100%", height: 28, marginVertical: 8 }}
                        />
                    </MyCard>

                    <MText style={styles.labelText}>
                        Now describe what your group will be about
                    </MText>
                    <MText style={styles.labelSteps}>
                        1. What's the purpose of the group?
                    </MText>
                    <MText style={styles.labelSteps}>
                        2. Who should join?
                    </MText>
                    <MText style={styles.labelSteps}>
                        3. What will you do at your events?
                    </MText>
                    <InputBox
                        value={description}
                        autoCapitalize="none"
                        onChangeText={(val) => {
                            setdescription(val)
                        }}
                        placeholder='Please write at least 50 Characters'
                        placeholderTextColor="#8D8D8D"
                        inputContainer={{ backgroundColor: "#F9F9F9", height: 222 }}
                    />

                    <MText style={styles.labelText}>
                        Want to make it :
                    </MText>
                    <Row>
                        <Row>
                            <RadioButton
                                value="public"
                                status={checked === 'public' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('public')}
                            />
                            <MText style={styles.radiobtnText}>Public</MText>
                        </Row>
                        <Row>
                            <RadioButton
                                value="private"
                                status={checked === 'private' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('private')}
                            />
                            <MText style={styles.radiobtnText}>Private</MText>
                        </Row>
                    </Row>

                    <ImageButton
                        title="Create Your Group"
                        onPress={handleSubmit}
                    />
                </View>
            </CustomScroll>
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
        marginBottom: 4,
        marginTop: 40
    },
    labelSteps: {
        fontSize: 12,
        fontWeight: "400",
        color: "#000",
        marginBottom: 4,
        marginTop: 4
    },
    radiobtnText: {
        fontSize: 12,
        fontWeight: "400",
        color: "#000",
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
    }
})