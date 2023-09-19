import * as React from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';
import images from '../assets/images';
import { Styles } from '../styles';

const slideList = [
    images.first_banner,
    images.first_banner,
    images.first_banner,
    images.first_banner,
    images.first_banner,
];

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

export default function IntroCarousel() {
    const isCarousel = React.useRef(null)

    const renderItem = ({ item, index }: any) => {
        return (
            <View style={styles.box} key={index}>
                <Image
                    source={item}
                    style={styles.image}
                />
            </View>
        );
    }

    return (
        <Carousel
            layout="default"
            layoutCardOffset={9}
            ref={isCarousel}
            data={slideList}
            renderItem={renderItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={160}
            inactiveSlideShift={0}
            useScrollView={true}
        />
    );
}

const styles = StyleSheet.create({
    box: {
        ...Styles.centered,
        paddingVertical: 14,
        paddingHorizontal: 10,
    },
    image: {
        height: 250, width: 160, borderRadius: 12
    }
})

// function Slide({ data }) {
//     return (
//         <View
//             style={{
//                 ...Styles.centered,
//                 paddingVertical: 14,
//                 paddingHorizontal: 10,
//             }}>
//             <Image
//                 source={data}
//                 style={{ height: 220, width: Size.wWidth - 20, borderRadius: 12 }}
//             />
//         </View>
//     );
// }

// export default function IntroCarousel() {
//     const [index, setIndex] = React.useState(0);
//     const indexRef = React.useRef(index);
//     indexRef.current = index;
//     const onScroll = React.useCallback((event) => {
//         const slideSize = event.nativeEvent.layoutMeasurement.width;
//         const index = event.nativeEvent.contentOffset.x / slideSize;
//         const roundIndex = Math.round(index);

//         const distance = Math.abs(roundIndex - index);

//         // Prevent one pixel triggering setIndex in the middle
//         // of the transition. With this we have to scroll a bit
//         // more to trigger the index change.
//         const isNoMansLand = 0.4 < distance;

//         if (roundIndex !== indexRef.current && !isNoMansLand) {
//             setIndex(roundIndex);
//         }
//     }, []);

//     // Use the index
//     React.useEffect(() => {
//         console.warn(index);
//     }, [index]);

//     return (
//         <FlatList
//             data={slideList}
//             style={{ flex: 1 }}
//             renderItem={({ item }) => {
//                 return <Slide data={item} />;
//             }}
//             pagingEnabled
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             onScroll={onScroll}
//             {...flatListOptimizationProps}
//         />
//     );
// }

// const flatListOptimizationProps = {
//     initialNumToRender: 0,
//     maxToRenderPerBatch: 1,
//     removeClippedSubviews: true,
//     scrollEventThrottle: 16,
//     windowSize: 2,
//     keyExtractor: e => e.id,
//     getItemLayout:
//         (_, index) => ({
//             index,
//             length: Size.wWidth,
//             offset: index * Size.wWidth,
//         })
// };
