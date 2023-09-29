import Auth from "../constants/Auth";


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


export const AddSocialMediaApi = async ( fbLink: any,TwLink: any,linkedinLink: any,callBack: (result: any) => void) => {

  const token = await Auth.getLocalStorageData("token");


  if (token !== null) {
    const headers = {
      'Authorization': `Bearer ${token}`,
  };

var formdata = new FormData();
formdata.append("facebook", fbLink);
formdata.append("instagram", "li");
formdata.append("twitter", TwLink);
formdata.append("linkedin", linkedinLink);

var requestOptions = {
  method: 'POST',
  headers: headers,
  body: formdata,
  redirect: 'follow'
};

fetch("https://dev.samagum.com/api/v1/account/update-social", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }
}

export const LogoutApi = async (callBack: (result: any) => void) => {

  const token = await Auth.getLocalStorageData("token");


  if (token !== null) {
    const headers = {
      'Authorization': `Bearer ${token}`,
  };
  var formdata = new FormData();

var requestOptions = {
  method: 'GET',
  headers: headers,
  body: formdata,
  redirect: 'follow'
};


fetch("https://dev.samagum.com/api/v1/signout", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


  await Auth.setLocalStorageData("token", null);


}
}


export const ImOrganizingApi = async (callBack: (result: any) => void) => {

  const token = await Auth.getLocalStorageData("token");


  if (token !== null) {
    const headers = {
      'Authorization': `Bearer ${token}`,
  };

var formdata = new FormData();

var requestOptions = {
  method: 'GET',
  headers: headers,
  body: formdata,
  redirect: 'follow'
};

fetch("https://dev.samagum.com/api/v1/my_events/from_groups_you_organize", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  }}



export const MyGroupsApi = async (callBack: (result: any) => void) => {

    const token = await Auth.getLocalStorageData("token");
  
  
    if (token !== null) {
      const headers = {
        'Authorization': `Bearer ${token}`,
    }
    
    var formdata = new FormData();
    
    var requestOptions = {
      method: 'GET',
      headers: headers,
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("https://dev.samagum.com/api/v1/groups?tab=organizer&page=1", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}
}


export const createEventAPI = async (data: any, callBack: (result: any) => void) => {
  const token = await Auth.getLocalStorageData("token");

  if (token !== null) {
    const headers = {
      'Authorization': `Bearer ${token}`,
    };

    var formData = new FormData(); 

    formData.append("event_title", data?.title);
    formData.append("event_start_date", "2024-12-01");
    formData.append("event_start_time", "12:25");
    formData.append("event_end_date", "2024-12-02");
    formData.append("event_end_time", "11:00");
    formData.append("event_description", data?.description);
    formData.append("event_is_online", data.isOnlineEvent ? 1 : 0);
    formData.append("event_online_meeting_link", "https://google.com");
    formData.append("event_address_name", "rtre");
    formData.append("event_address_location_name", "sd");
    formData.append("event_address_address_1", "sdf");
    formData.append("event_address_lat", "");
    formData.append("event_address_lng", "");
    formData.append("event_address_country", "");
    formData.append("event_address_state", "");
    formData.append("event_address_city", "");
    formData.append("event_address_zip", "");
    formData.append("event_how_to_find_us", data?.howToFindUs);
    formData.append("optional_setting_allowed_guest", "0");
    formData.append("event_rsvp_question", data?.newTipsAvailable);
    formData.append("optional_setting_rsvp_question", "0");
    formData.append("optional_setting_event_fee", "0");
    formData.append("event_fee_method", data?.Method);
    formData.append("event_fee_currency_id", data?.currency);
    formData.append("event_fee_amount", data?.eventFees);
    formData.append("event_fee_additional_refund_policy", "");
    formData.append("event_featured_photo_file", {uri: data.eventImage, name: 'image.jpg', type: 'image/jpeg'});
    formData.append("status", "publish");

    console.log(data.eventImage, "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

    var requestOptions = {
      method: 'POST',
      headers: headers,
      body: formData,
      redirect: 'follow',
    };

    fetch("https://dev.samagum.com/api/v1/group/create_event?group=demo-group-from-api-1", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
      })
      .catch(error => console.log('error', error));
  }
};
