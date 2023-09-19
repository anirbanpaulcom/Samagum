import React, { useState } from 'react';
import {
    Animated,
    FlatList,
    GestureResponderEvent,
    Image,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Auth from '../constants/Auth';
import { Size } from '../constants';
import { Colors, Styles } from '../styles';
import svg from '../assets/svg';
import { SpaceBetweenRow } from '../components/Wrapper';

export default function IntroScreen({ navigation }: any) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slider = React.useRef(null);

    const [sliders, ,] = useState([
        {
            image: svg.FirstBannerIcon,
            title: "Explore Upcoming and Nearby Events",
            info: "In publishing and graphic design, Lorem is a placeholder text commonly"
        },
        {
            image: svg.SecondBannerIcon,
            title: "Web Have Modern Events Calendar Feature",
            info: "In publishing and graphic design, Lorem is a placeholder text commonly"
        },
        {
            image: svg.ThirdBannerIcon,
            title: "To Look Up More Events or Activities Nearby By Map",
            info: "In publishing and graphic design, Lorem is a placeholder text commonly"
        },
    ]);

    const SliderItem = ({ item }: any) => {
        return (
            <View style={styles.card}>
                <item.image />
            </View>
        );
    };

    const completeAppIntro = async () => {
        Auth.setIntro('true')
            .then(() => {
                navigation.navigate('LoginScreen');
            })
            .catch((error) => {
                console.log("Error in saving intro screen data: ", error);
            })
    };

    const changeSliderIndex = (index: number) => {
        const sliderLength = sliders?.length - 1;
        if (sliderLength >= index) {
            setCurrentIndex(index);
            slider.current.scrollToIndex({
                index: index,
                animated: true,
            });
        }
        if (index > 2) {
            completeAppIntro();
        }
    };

    const itemWidth = Size.wWidth;



    return (
        <>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <View style={styles.container}>
                <FlatList
                    ref={slider}
                    getItemLayout={(data, index) => ({
                        length: itemWidth,
                        offset: itemWidth * index,
                        index,
                    })}
                    snapToInterval={itemWidth}
                    horizontal={true}
                    data={sliders}
                    renderItem={SliderItem}
                    scrollEnabled={false}
                    decelerationRate="fast"
                    bounces={false}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index?.toString()}
                />
                <View style={styles.content}>
                    <View style={styles.introDetailStyle}>
                        {renderTextAndInfo(currentIndex, sliders)}
                        {renderSkipAndNextBtn(
                            currentIndex,
                            changeSliderIndex,
                            completeAppIntro,
                            sliders
                        )}
                    </View>
                </View>
            </View>
        </>
    );
}

const renderTextAndInfo = (currentIndex: number, sliders: any) => {
    return (
        <>
            {sliders?.map((itm: any, indx: number) => {
                return (
                    currentIndex === indx && <View style={{ paddingHorizontal: 20 }}>
                        <Text style={styles.title}>{itm?.title}</Text>
                        <View style={{ marginVertical: 8 }}>
                            <Text style={styles.description}>
                                {itm?.info}
                            </Text>
                        </View>
                    </View>
                );
            })}
        </>
    );
};

const renderSkipAndNextBtn = (
    currentIndex: number,
    changeSliderIndex: Function,
    completeAppIntro: (event: GestureResponderEvent) => void,
    sliders: any,
) => {
    return (
        <SpaceBetweenRow style={styles.skipContainer}>
            <TouchableOpacity onPress={completeAppIntro}>
                <Text style={styles.skipBtnText}>{'Skip'}</Text>
            </TouchableOpacity>

            <View>
                <View style={{ marginTop: 50 }} />
                {renderDots(sliders, currentIndex, changeSliderIndex)}
            </View>

            <TouchableOpacity onPress={() => {
                const actualIndex = currentIndex + 1;
                changeSliderIndex(actualIndex);
            }}>
                <Text style={styles.nextBtnText}>{'Next'}</Text>
            </TouchableOpacity>
        </SpaceBetweenRow>
    );
};

function renderDots(sliders: any, currentIndex: number, changeSliderIndex: Function) {
    return (
        <View style={{ alignItems: 'center' }}>
            <View style={styles.dotsContainer}>
                {sliders.map((item: any, index: number) => {
                    return (
                        <TouchableOpacity key={`dot-${index}`} style={styles.dotStyle}
                            onPress={() => {
                                const actualIndex = currentIndex > 0 ? currentIndex - 1 : currentIndex;
                                changeSliderIndex(actualIndex);
                            }}
                        >
                            <Animated.View style={[styles.dot, {
                                backgroundColor: currentIndex === index ? "#fff" : "#ccc",
                            }]} />
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: '18%',
        justifyContent: 'space-between',
        height: '100%',
        alignItems: 'center',
        backgroundColor: "#fff"
    },
    content: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        ...Styles.centered,
        backgroundColor: Colors.primary,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    card: {
        width: Size.wWidth,
        height: '65%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: '500',
        color: '#fff',
        textAlign: "center",
        lineHeight: 30,
    },
    description: {
        fontSize: 14,
        fontWeight: '400',
        color: '#FFFFFF',
        textAlign: "center",
        lineHeight: 20,
        marginTop: 12
    },
    dot: {
        borderRadius: 20,
        backgroundColor: 'blue',
        marginHorizontal: 10,
        width: 9, height: 9
    },
    dotsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 10,
        position: 'absolute',
        bottom: 20,
    },
    introDetailStyle: {
        paddingHorizontal: 28,
        paddingTop: 50,
        paddingBottom: 34,
        width: Size.wWidth,
        justifyContent: 'space-between',
    },
    skipBtnText: {
        fontSize: 18,
        fontWeight: '300',
        color: '#dcdcdc',
    },
    nextBtnText: {
        fontSize: 18,
        fontWeight: '400',
        color: '#fff',
    },
    nextBtn: {
        width: 40,
        height: 40,
        backgroundColor: Colors.pink,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    skipContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        marginTop: 28
    },
    dotStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 14,
        height: 14,
        marginHorizontal: 4,
        borderRadius: 100,
    }
});