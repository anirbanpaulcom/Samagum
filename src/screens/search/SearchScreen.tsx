import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import SearchHeader from './container/SearchHeader'
import { Container } from '../../components/Wrapper'
import SearchBar from './container/SearchBar'
import MText from '../../components/Text'
import { welcomeList } from '../categories/CaegoriesScreen'
import CategoryItem from '../categories/components/CategoryItem'
import CustomScroll from '../../components/CustomScroll'

export default function SearchScreen() {
    return (
        <Container>
            <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
            <SearchHeader />
            <SearchBar />
            <CustomScroll>
                <View style={{ padding: 20 }}>
                    <MText style={styles.title}>Browser categories</MText>

                    {welcomeList.map((item, indx) => {
                        return (
                            <CategoryItem item={item} key={indx} />
                        );
                    })}
                </View>
            </CustomScroll>
        </Container>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "500",
        color: "#000"
    }
})