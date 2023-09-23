
export const createEventAPI = async (eventData: any, callBack: (result: any) => void) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 22|vHseWF95j1KzXsZPa4OmEnzgG2nWxLLvYbNFH4nDRDfBGT89p6qu62DDAPAkUq5ol4UuRGAOOmMFgiK8WO2m9QUBL48iGc8ybTTi");
    
    var formdata = new FormData();
    formdata.append("event_title", eventData.title);
    formdata.append("event_start_date", eventData.startDate);
    formdata.append("event_start_time", eventData.startTime);
    formdata.append("event_end_date", eventData.endDate);
    formdata.append("event_end_time", eventData.endTime);
    formdata.append("event_description", eventData.description);
    formdata.append("event_is_online", eventData.isOnlineEvent);
    formdata.append("event_online_meeting_link", "");
    formdata.append("event_address_name", eventData.address);
    formdata.append("event_address_location_name", "");
    formdata.append("event_address_address_1", "");
    formdata.append("event_address_lat", "");
    formdata.append("event_address_lng", "");
    formdata.append("event_address_country", "");
    formdata.append("event_address_state", "");
    formdata.append("event_address_city", "");
    formdata.append("event_address_zip", "");
    formdata.append("event_how_to_find_us", eventData.howToFindUs);
    formdata.append("optional_setting_allowed_guest", eventData.allowedQuests);
    formdata.append("event_rsvp_question", "");
    formdata.append("optional_setting_rsvp_question", "0");
    formdata.append("optional_setting_event_fee", "0");
    formdata.append("event_fee_method", "");
    formdata.append("event_fee_currency_id", "");
    formdata.append("event_fee_amount", eventData.eventFees);
    formdata.append("event_fee_additional_refund_policy", "");
    formdata.append("event_featured_photo_file", eventData.eventImage);
    formdata.append("status", "publish");
     
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("https://dev.samagum.com/api/v1/group/create_event?group=demo-group-from-api-1", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
};


export const addBioAPI = async ( data :any) => {
    try {
      const token = await Auth.getLocalStorageData("token");
  
      if (token !== null) {
        const headers = {
            'Authorization': `Bearer 22|vHseWF95j1KzXsZPa4OmEnzgG2nWxLLvYbNFH4nDRDfBGT89p6qu62DDAPAkUq5ol4UuRGAOOmMFgiK8WO2m9QUBL48iGc8ybTTi`,
        };
  
        const response = await axios.post(
            "https://dev.samagum.com/api/v1/account/update-details",
            data,
          { headers }
        );
  
        console.log('\n\n addBioAPI result:', response.data);
      return response.data;
    } else {
      console.error('Token not found');
      return null;
    }
  } catch (error) {
    console.error('\n\n addBioAPI error:', error);
    return null;
  }
};


export const getEditProfileDetails = async (data: any) => {
try {
const token = await Auth.getLocalStorageData("token");
  
      if (token !== null) {
        const headers = {
            'Authorization': `Bearer 22|vHseWF95j1KzXsZPa4OmEnzgG2nWxLLvYbNFH4nDRDfBGT89p6qu62DDAPAkUq5ol4UuRGAOOmMFgiK8WO2m9QUBL48iGc8ybTTi`,
        };
  
        const response = await axios.post(
            "https://dev.samagum.com/api/v1/account/personal-details",
            data,
          { headers }
        );
  
        console.log('\n\n getEditProfileDetails result:', response.data);
      return response.data;
    } else {
      console.error('Token not found');
      return null;
    }
  } catch (error) {
    console.error('\n\n getEditProfileDetails error:', error);
    return null;
  }
};


export const updateUserProfile = async (data: any) => {
    try {
      const token = await Auth.getLocalStorageData("token");
  
      const headers = {
        'Authorization': `Bearer ${token}`,
      };
  
      const formdata = new FormData();
      formdata.append("first_name", data?.firstName);
      formdata.append("last_name", data?.lastName);
      formdata.append("email", data?.email);
      formdata.append("phone", data?.phone);
      formdata.append("birthdate", data?.dob);
      formdata.append("gender", data?.gender);
      formdata.append("country", data?.country);
      formdata.append("city", data?.city);
  
      const response = await axios.post("https://dev.samagum.com/api/v1/account/update-details", formdata, {
        headers,
      })
  
      console.log('updateUserProfile result:', response.data);
    } catch (error) {
      console.error('updateUserProfile error:', error);
    }
}


export const eventDetailsApi = async (callBack: (result: any) => void) => {
    
      const token = await Auth.getLocalStorageData("token");
      
  
      if (token !== null) {
        const headers = {
          'Authorization': `Bearer 22|vHseWF95j1KzXsZPa4OmEnzgG2nWxLLvYbNFH4nDRDfBGT89p6qu62DDAPAkUq5ol4UuRGAOOmMFgiK8WO2m9QUBL48iGc8ybTTi`,
        };
  
        var formdata = new FormData();
        
        var requestOptions = {
          method: 'GET',
          headers: headers,
          body: formdata,
          redirect: 'follow'
        };
        
        fetch("https://dev.samagum.com/api/v1/group/event/57", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
}
}



export const changePasswordApi = async (currentPassword: any,newPassword: any,callBack: (result: any) => void) => {
    
    const token = await Auth.getLocalStorageData("token");
    

    if (token !== null) {
      const headers = {
        'Authorization': `Bearer 22|QM5SkoDhkmLjCU3WZQZmHYqPWJDZDxL9MDbeWPt5YTiIWjzAvkfAPWX5BCoZ5WeGbSpeHugklKWm5FBw0F70Whn4UF1EDL1oNVd7`,
    };


    
    var formdata = new FormData();
    formdata.append("old_password", currentPassword);
    formdata.append("new_password", newPassword);
    formdata.append("new_password_confirmation", newPassword);
    
    var requestOptions = {
      method: 'POST',
      headers: headers,
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("https://dev.samagum.com/api/v1/account/update-password", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
 }
}

export const AddFavEvent = async (eventData: any,callBack: (result: any) => void) => {

    const token = await Auth.getLocalStorageData("token");
    

    if (token !== null) {
      const headers = {
        'Authorization': `Bearer ${token}`,
    };

var formdata = new FormData();
formdata.append("event_title", "Test EVent from API");
formdata.append("event_start_date", "2023-09-15");
formdata.append("event_start_time", "12:25:00");
formdata.append("event_end_date", "2023-09-17");
formdata.append("event_end_time", "11:00:00");
formdata.append("event_description", "Test desc");
formdata.append("event_is_online", "1");
formdata.append("event_online_meeting_link", "https://google.com");
formdata.append("event_address_name", "");
formdata.append("event_address_location_name", "");
formdata.append("event_address_address_1", "");
formdata.append("event_address_lat", "");
formdata.append("event_address_lng", "");
formdata.append("event_address_country", "");
formdata.append("event_address_state", "");
formdata.append("event_address_city", "");
formdata.append("event_address_zip", "");
formdata.append("event_how_to_find_us", "0");
formdata.append("event_rsvp_question", "");
formdata.append("event_allowed_guests", "10");
formdata.append("event_fee_method", "");
formdata.append("event_fee_currency_id", "");
formdata.append("event_fee_amount", "");
formdata.append("event_fee_additional_refund_policy", "");
formdata.append("optional_setting_allowed_guest", "0");
formdata.append("optional_setting_rsvp_question", "0");
formdata.append("optional_setting_event_fee", "0");
formdata.append("event_featured_photo_file", fileInput.files[0], "K2 Colorfil TJF-Terra Red.png");

var requestOptions = {
  method: 'POST',
  headers: headers,
  body: formdata,
  redirect: 'follow'
};

fetch("https://dev.samagum.com/api/v1/group/create_event?group=testing-api", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

    }

}

export const joinGroupApi = async (group_id: any,callBack: (result: any) => void) => {

    const token = await Auth.getLocalStorageData("token");
    

    if (token !== null) {
      const headers = {
        'Authorization': `Bearer ${token}`,
    };

var formdata = new FormData();
formdata.append("group_id", group_id);

var requestOptions = {
  method: 'POST',
  headers: headers,
  body: formdata,
  redirect: 'follow'
};

fetch("https://dev.samagum.com/api/v1/group/join", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

}}
