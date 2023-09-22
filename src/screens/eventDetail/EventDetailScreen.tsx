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
    const [eventData, setEventData] = useState([]);

    useEffect(() => {
        eventDetailsApi((result) => {
            if (result !== null) {
                setEventData(result?.data)
            }
        })
    }, []);


    return (
        <CustomScroll>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            {/* Background Image */}
            <EventDetailsHeader eventData={eventData} />

            {/* Detail Info */}
            <EventDetailsTitle title={eventData?.title} />

            {/* About Event */}
            <EventDetailsAbout />

            {/* Event Gallery */}
            <EventGallery
                title="Events"
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            />


            {/* Similar Events Don't have the Api */}
            <UpcommingEvents
                title="Similar Events"
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            />
            <MText />
        </CustomScroll>
    )
}

// const styles = 