import React, { useEffect, useState } from 'react'
import EventDetailsHeader from './components/EventDetailsHeader'
import EventDetailsTitle from './components/EventDetailsTitle'
import EventDetailsAbout from './components/EventDetailsAbout'
import CustomScroll from '../../components/CustomScroll'
import UpcommingEvents from '../home/components/UpcommingEvents'
import EventGallery from './components/EventGallery'
import EventComments from './components/EventComments'
import MText from '../../components/Text'
import { StatusBar } from 'react-native'
import { eventDetailsApi } from '../../API/api'

export default function EventDetailScreen() {
    const [eventDetails, setEventDetails] = useState([]);

    useEffect(() => {
        eventDetailsApi((result) => {
            if (result !== null) {
                setEventDetails(result?.data)
            }
        })
        console.log(eventDetails, "000000000000000000000000000000000000",eventDetails.title, 'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm');
    }, 
    [eventDetails]);




    return (
        <CustomScroll>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            {/* Background Image */}
            <EventDetailsHeader />

            {/* Detail Info */}
            <EventDetailsTitle title={eventDetails?.title} />

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