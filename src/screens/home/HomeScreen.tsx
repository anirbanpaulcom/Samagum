import { View, StatusBar, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeHeader from './components/HomeHeader'
import { Colors } from '../../styles'
import images from '../../assets/images'
import { Size } from '../../constants'
import { Container } from '../../components/Wrapper'
import MText from '../../components/Text'
import styles from './styles'
import UpcommingEvents from './components/UpcommingEvents'
import MyGroups from './components/MyGroups'
import CustomScroll from '../../components/CustomScroll'
import ExploreGroups from './components/ExploreGroups'
import FeatureGroup from './components/FeatureGroup'
import MostActiveGroup from './components/MostActiveGroup'
import FilterModal from './components/FilterModal'
import { fetchHomeDataAfterLogin } from '../../API/api'

export default function HomeScreen({ navigation }: any) {
    const [showFilterModal, setShowFilterModal] = useState(false);
    const [homeData, setHomeData] = useState<any>([]);

    useEffect(() => {
        fetchHomeDataAfterLogin((res) => {
            if (res !== null) {
                setHomeData(res?.data)
            }
        })
    }, []);

    return (
        <Container>
            <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
            <View style={styles.container}>
                {/* Header */}
                <HomeHeader
                    searchInputCallback={() => { navigation?.navigate("SearchScreen") }}
                    onFilterPress={() => { setShowFilterModal(true) }}
                />
                <CustomScroll>
                    {/* Upcomming Events */}
                    <UpcommingEvents
                        title="Upcoming Events"
                        data={homeData?.upcoming_online_events}
                    />
                    <MText />

                    <Image
                        source={images.home_invite} resizeMode="stretch"
                        style={{ width: Size.wWidth / 1.1, height: 140, alignSelf: "center" }}
                    />

                    <MyGroups
                        title="My Group's"
                        data={homeData?.events_from_groups_you_organize}
                    />

                    <ExploreGroups />

                    <UpcommingEvents
                        title="My Events"
                        data={homeData?.events_from_groups_you_organize}
                    />

                    <UpcommingEvents
                        title="All Event near you"
                        data={homeData?.events_from_groups_you_organize}
                    />

                    <UpcommingEvents
                        title="Event That May intrest you"
                        data={homeData?.events_from_groups_you_organize}
                    />

                    <FeatureGroup
                        title="Feature Group"
                        data={homeData?.events_from_groups_you_organize}
                    />

                    <FeatureGroup
                        title="Most Active Group"
                        data={homeData?.events_from_groups_you_organize}
                    />

                    <MostActiveGroup
                        title="Most Active Group"
                        data={homeData?.events_from_groups_you_organize}
                    />

                    <View style={{ height: 80 }} />
                </CustomScroll>
            </View>

            <FilterModal
                visible={showFilterModal}
                setVisible={setShowFilterModal}
            />
        </Container>
    )
}
