import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import CustomScroll from '../../components/CustomScroll'
import ProfileHeader from './components/ProfileHeader'
import ProfileInfo from './components/ProfileInfo'
import ProfileGroups from './components/ProfileGroups'
import UpcommingEvents from '../home/components/UpcommingEvents'
import ProfileReviews from './components/ProfileReviews'
import MText from '../../components/Text'
import Svg from '../../assets/svg'

export default function OrganizerProfile() {
    return (
        <CustomScroll>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <ProfileHeader />

            <ProfileInfo
                btnText="Messages"
                btnIcon={<Svg.MessageBlueIcon />}
            />

            <ProfileGroups
                title="My Group's"
                data={[1, 2]}
            />

            <UpcommingEvents
                title="Events"
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            />

            <ProfileReviews
                title="Reviews"
                data={[1, 2]}
            />
            <MText /><MText /><MText /><MText />
        </CustomScroll>
    )
}