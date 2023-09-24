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
import { fetchEventsThatYouJoined, fetchHomeDataAfterLogin, fetchMyAttendingEvents, fetchMySavedEvents } from '../../API/api'

export default function HomeScreen({ navigation }: any) {
    const [showFilterModal, setShowFilterModal] = useState(false);
    const [homeData, setHomeData] = useState<any>([]);
    const [attendingEvents, setAttendingEvents] = useState<any>([]);
    const [savedEvents, setSavedEvents] = useState<any>([]);
    const [EventsThatYouJoined, setEventsThatYouJoined] = useState<any>([]);

    useEffect(() => {
        fetchHomeDataAfterLogin((res) => {
            if (res !== null) {
                setHomeData(res?.data)
            }
        });

        fetchMyAttendingEvents((res) => {
            if (res !== null && res?.success?.toString() === "true") {
                setAttendingEvents(res?.data)
            }
        });

        fetchMySavedEvents((res) => {
            if (res !== null && res?.success?.toString() === "true") {
                setSavedEvents(res?.data)
            }
        });

        fetchEventsThatYouJoined((res) => {
            if (res !== null && res?.success?.toString() === "true") {
                setEventsThatYouJoined(res?.data)
            }
        });
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
                        title="i'm attending"
                        data={attendingEvents}
                    />
                    <MText />

                    <UpcommingEvents
                        title="Saved event"
                        data={savedEvents}
                    />
                    <MText />

                    <UpcommingEvents
                        title="Upcoming Events"
                        data={homeData?.upcoming_online_events}
                    />
                    <MText />

                    {/* <Image
                        source={images.home_invite} resizeMode="stretch"
                        style={{ width: Size.wWidth / 1.1, height: 140, alignSelf: "center" }}
                    /> */}

                    {/* <MyGroups
                        title="My Group's"
                        data={homeData?.events_from_groups_you_organize}
                    /> */}

                    {/* <ExploreGroups /> */}

                    <UpcommingEvents
                        title="Featured Events"
                        data={homeData?.events_from_groups_you_organize}
                    />

                    <UpcommingEvents
                        title="Near By Events"
                        data={homeData?.events_from_groups_you_organize}
                    />

                    <UpcommingEvents
                        title="Events from joined Groups"
                        data={EventsThatYouJoined}
                    />

                    <MyGroups
                        title="i'm organizing"
                        data={homeData?.events_from_groups_you_organize}
                    />

                    <FeatureGroup
                        title="Joined Groups"
                        data={EventsThatYouJoined}
                    />

                    <FeatureGroup
                        title="Most Vibrants Groups"
                        data={homeData?.events_from_groups_you_organize}
                    />

                    <MostActiveGroup
                        title="Your Calendar"
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
