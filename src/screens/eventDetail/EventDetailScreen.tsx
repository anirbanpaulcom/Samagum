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
import { eventDetailsApi } from '../../API/new api'
import ImageButton from '../../components/ImageButton'

export default function EventDetailScreen({route}) {

    const { id } = route.params;

    const [data,setData]= useState("");


    useEffect(()=>{
        console.log(id,"ddddd")
         eventDetailsApi(id , (res)=>{
            console.log(res, "sssssssssssssssssss")
            if (res !== null) {
            setData(res)
            }
         })

        console.log(data,"ooooooooooooooooooooooooooooooooooooooooooooooooooo")
        
    },[data])



    return (
        <CustomScroll>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

            
                
            {/* Background Image */}
            <EventDetailsHeader data={data} />


            {/* Detail Info */}
            <EventDetailsTitle data={data} />

            {/* About Event */}
            <EventDetailsAbout data={data} />

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

            <ImageButton
                title="Get Ticket"
            />
            <MText />

        </CustomScroll>
    )
}