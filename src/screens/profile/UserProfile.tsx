import { StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomScroll from '../../components/CustomScroll'
import ProfileHeader from './components/ProfileHeader'
import ProfileInfo from './components/ProfileInfo'
import MText from '../../components/Text'
import Svg from '../../assets/svg'
import ProfileOrganizer from './components/ProfileOrganizer'
import ProfileGroupMembers from './components/ProfileGroupMembers'
import { getUserProfile } from '../../API/api'

export default function UserProfile({ navigation }: any) {
    const [profileData, setProfiledata] = useState([]);

    useEffect(() => {
        getUserProfile((res) => {
            if (res !== null) {
                if (res?.success === true) {
                    setProfiledata(res?.data)
                }
            }
        })
    }, []);

    return (
        <CustomScroll>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <ProfileHeader />

            <ProfileInfo
                btnText="Edit Profile"
                data={profileData}
                btnIcon={<Svg.EditBlueIcon />}
                onPress={() => { navigation?.navigate("EditProfileScreen", { data: profileData }) }}
            />

            <ProfileOrganizer
                title="Organizer"
                text="Start a new group"
                subText='Organize your own events '
                data={[1, 2]}
            />

            <ProfileGroupMembers
                title="Group Member (4)"
                data={[1, 2, 3, 4]}
            />
            <MText /><MText /><MText /><MText />
        </CustomScroll>
    )
}