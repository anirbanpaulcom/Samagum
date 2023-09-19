import React from 'react'
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

export default function GroupDetailsScreen() {
    return (
        <CustomScroll>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            {/* Background Image */}
            <GroupDetailsHeader />

            {/* Detail Info */}
            <GroupDetailsTitle
                title="International Band Music Concert"
                membersCount='275'
            />

            {/* About Group */}
            <GroupDetailsAbout
                title="Organizer"
                subTitle="Nobuaki Kondo and 5 others"
            />

            {/* UpcommingEvents */}
            <UpcommingEvents
                title="Events"
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            />

            {/* Group Discussion */}
            <GroupDiscussion
                title="Discussion"
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            />

            <GroupHighlights
                title="Highlights"
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
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