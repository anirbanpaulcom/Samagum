import React from 'react'
import EventDetailsHeader from './components/EventDetailsHeader'
import EventDetailsTitle from './components/EventDetailsTitle'
import EventDetailsAbout from './components/EventDetailsAbout'
import CustomScroll from '../../components/CustomScroll'
import UpcommingEvents from '../home/components/UpcommingEvents'
import EventGallery from './components/EventGallery'
import EventComments from './components/EventComments'
import MText from '../../components/Text'
import { StatusBar } from 'react-native'

export default function EventDetailScreen() {
    return (
        <CustomScroll>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            {/* Background Image */}
            <EventDetailsHeader />

            {/* Detail Info */}
            <EventDetailsTitle />

            {/* About Event */}
            <EventDetailsAbout />

            {/* Event Gallery */}
            <EventGallery
                title="Events"
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            />

            <EventComments />

            {/* Events */}
            <UpcommingEvents
                title="Events"
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            />
            <MText />
        </CustomScroll>
    )
}

// const styles = 