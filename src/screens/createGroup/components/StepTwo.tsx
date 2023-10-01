import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomScroll from '../../../components/CustomScroll'
import ImageButton from '../../../components/ImageButton'
import MText from '../../../components/Text';
import MyCard from '../../../components/Wrapper/MyCard';
import images from '../../../assets/images';
import InputBox from '../../../components/InputBox';
import Svg from '../../../assets/svg';
import { Button } from 'react-native-paper';
import { Colors } from '../../../styles';
import { SearchTopicsApi, topicsListApi } from '../../../API/new api';

interface StepTwoProps {
    steps: number;
    setSteps: Function;
    visible: boolean;
}

export default function StepTwo({details, setDetails,steps, setSteps, visible }: StepTwoProps) {
    if (!visible) return null;

    const [topics, setTopics] = useState([]);
    const [selectTopics, setSelectTopics] = useState([]);

    useEffect(() => {
        topicsListApi((res) => {
            if (res !== null) {
                setTopics(res?.data);
            }
        });

    }, []);

    function handleSubmit() {
        setDetails({ ...details, topics });
        setSteps(3)
    }

    return (
        <>
            <CustomScroll>
                <View style={{ padding: 16 }}>
                    <MText style={styles.headText}>Step 2/4</MText>
                    <MyCard>
                        <Image
                            source={images.step2}
                            resizeMode="contain"
                            style={{ width: "100%", height: 28, marginVertical: 8 }}
                        />
                    </MyCard>

                    <MText style={styles.labelText}>
                        Choose a few topics that describe your group's interests
                    </MText>
                    <InputBox
                        value={selectTopics}
                        autoCapitalize="none"
                        onChangeText={(val) => {
                            setSelectTopics(val)
                        }}
                        placeholder='Search'
                        placeholderTextColor="#8D8D8D"
                        LeftIcon={<Svg.SearchBlueIcon />}
                        inputContainer={{ backgroundColor: "#F9F9F9" }}
                    />

                    <ScrollView style={{ flex: 1 }}>
                        <View style={styles.container}>
                            {
                                topics && topics.map((item: any, indx: number) => {
                                    return (
                                        <Button key={indx} style={styles.button}
                                            labelStyle={styles.buttonText}
                                            onPress={() => { }}
                                        >
                                            {item?.name}
                                        </Button>
                                    );
                                })
                            }
                        </View>
                    </ScrollView>
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
