import React, { useEffect, useState } from 'react'
import GroupDetailsHeader from './components/GroupDetailsHeader'
import GroupDetailsTitle from './components/GroupDetailsTitle'
import GroupDetailsAbout from './components/GroupDetailsAbout'
import CustomScroll from '../../components/CustomScroll'
import UpcommingEvents from '../home/components/UpcommingEvents'
import GroupDiscussion from './components/GroupDiscussion'
import MText from '../../components/Text'
import { StatusBar } from 'react-native'
import GroupHighlights from './components/GroupHighlights'
import GroupRelatedTopics from './components/GroupRelatedTopics'
import { fetchGroupDetails, getAllGroupsYouOrganize } from '../../API/api'

export default function GroupDetailsScreen({ route }: any) {
    const groupName = route?.params?.groupName?.slug;
    const groupID = route?.params?.groupName?.id;
    const [groupDetailsData, setGroupDetailsData] = useState([]);
    const [EventsDataYouOrganize, setEventsDataYouOrganize] = useState<any>([]);

    useEffect(() => {
        fetchGroupDetails(groupName, (res) => {
            setGroupDetailsData(res?.data);
        });
    }, []);

    useEffect(() => {
        getAllGroupsYouOrganize((res) => {
            if (res !== null) {
                setEventsDataYouOrganize(res?.data)
            }
        })
    }, []);

    // console.log('====================================');
    // console.log('groupName: ', groupDetailsData, groupName);
    // console.log('====================================');

    return (
        <CustomScroll>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            {/* Background Image */}
            <GroupDetailsHeader />

            {/* Detail Info */}
            <GroupDetailsTitle
                title="International Band Music Concert"
                membersCount='275'
                groupData={route?.params?.groupName}
            />

            {/* About Group */}
            <GroupDetailsAbout
                title="Organizer"
                subTitle="Nobuaki Kondo and 5 others"
            />

            {/* UpcommingEvents */}
            <UpcommingEvents
                title="Events"
                data={EventsDataYouOrganize}
            />

            {/* Group Discussion */}
            <GroupDiscussion title="Discussion" />

            <GroupHighlights
                title="Highlights"
                text="The Buddhist Forum in japan"
                subText="10 oct 2023"
            />

            <GroupRelatedTopics
                title="Related Topics"
                data={[
                    "Walking Tours",
                    "Performing Arts",
                    "Cultural Activities",
                    "Art Gallrey",
                    "Walking Tours",
                    "Performing Arts",
                    "Cultural Activities",
                    "Art Gallrey",
                    "Walking Tours",
                    "Performing Arts",
                    "Cultural Activities",
                    "Art Gallrey",
                ]}
            />
            <MText />
        </CustomScroll>
    )
}

// const styles = 