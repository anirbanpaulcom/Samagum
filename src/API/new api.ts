import Auth from "../constants/Auth";


export const addBioAPI = async ( data :any) => {
      const token = await Auth.getLocalStorageData("token");
  
      if (token !== null) {
        const headers = {
          'Authorization': `Bearer ${token}`
        };
  
var formdata = new FormData();
formdata.append("bio", data ? data : '');

var requestOptions = {
  method: 'POST',
  headers: headers,
  body: formdata,
  redirect: 'follow'
};

fetch("https://dev.samagum.com/api/v1/account/update-details", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
      }
    }




export const getEditProfileDetails = async (data: any) => {

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

fetch("https://dev.samagum.com/api/v1/account/personal-details", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

      }}

export const updateUserProfile = async (data:any ,callBack: (result: any) => void) => {

    const token = await Auth.getLocalStorageData("token");

    const headers = {
      'Authorization': `Bearer ${token}`,
    };

var formdata = new FormData();
formdata.append("first_name", data?.firstName);
formdata.append("last_name", data?.lastName);
formdata.append("email", data?.email);
formdata.append("phone", data?.phone);
formdata.append("birthdate", data?.dob);
formdata.append("gender", data?.gender);
formdata.append("profile_picture", '');
formdata.append("username", data?.userName);
formdata.append("timezone", data?.timezone);
formdata.append("bio", null);

var requestOptions = {
  method: 'POST',
  headers: headers,
  body: formdata,
  redirect: 'follow'
};

fetch("https://dev.samagum.com/api/v1/account/update-details", requestOptions)
.then(response => response.text())
.then(result => {
  console.log(result);
  callBack(result); 
})
.catch(error => {
  console.log('error', error);
  callBack(null); 
});

  }

  
export const eventDetailsApi = async (id:any,callBack: (result: any) => void) => {
    
      const token = await Auth.getLocalStorageData("token");
      
  
      if (token !== null) {
        const headers = {
          'Authorization': `Bearer ${token}`
      };

      console.log(id,"sssssssssssdfff00")
  
        var formdata = new FormData();
        
        var requestOptions = {
          method: 'GET',
          headers: headers,
          body: formdata,
          redirect: 'follow'
        };
        
        fetch(`https://dev.samagum.com/api/v1/group/event/${id}`, requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log(result);
          callBack(result); 
        })
        .catch(error => {
          console.log('error', error);
          callBack(null); 
        });
}
}



export const changePasswordApi = async (currentPassword: any,newPassword: any,callBack: (result: any) => void) => {
    
    const token = await Auth.getLocalStorageData("token");
    

    if (token !== null) {
      const headers = {
        'Authorization': `Bearer ${token}`,
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
    .then(result => {
      console.log(result);
      callBack(result); 
    })
    .catch(error => {
      console.log('error', error);
      callBack(null); 
    });
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
.then(result => {
  console.log(result);
  callBack(result); 
})
.catch(error => {
  console.log('error', error);
  callBack(null); 
});

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
.then(result => {
  console.log(result);
  callBack(result); 
})
.catch(error => {
  console.log('error', error);
  callBack(null); 
});

}}


export const AddSocialMediaApi = async ( fbLink: any,TwLink: any,linkedinLink: any,instagramLink: any,callBack: (result: any) => void) => {

  const token = await Auth.getLocalStorageData("token");


  if (token !== null) {
    const headers = {
      'Authorization': `Bearer ${token}`,
  };

var formdata = new FormData();
formdata.append('facebook', fbLink ? fbLink : '');
formdata.append('instagram', instagramLink ? instagramLink : '');
formdata.append('twitter', TwLink ? TwLink : '');
formdata.append('linkedin', linkedinLink ? linkedinLink : '');


var requestOptions = {
  method: 'POST',
  headers: headers,
  body: formdata,
  redirect: 'follow'
};

fetch("https://dev.samagum.com/api/v1/account/update-social", requestOptions)
.then(response => response.text())
.then(result => {
  console.log(result);
})
.catch(error => {
  console.log('error', error);
});
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
.then(result => {
  console.log(result);
  callBack(result); 
})
.catch(error => {
  console.log('error', error);
  callBack(null); 
});


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
.then(result => {
  console.log(result);
  callBack(result); 
})
.catch(error => {
  console.log('error', error);
  callBack(null); 
});

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
    .then(result => {
      console.log(result);
      callBack(result); 
    })
    .catch(error => {
      console.log('error', error);
      callBack(null); 
    });
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
    formData.append("event_start_date", data?.startDate);
    formData.append("event_start_time", data?.startTime);
    formData.append("event_end_date", data?.endDate);
    formData.append("event_end_time", data?.endTime);
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
    .catch(error => {
      console.log('error', error);
    });
  }
};

export const notification = async (data: any, callBack: (result: any) => void) => {
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

fetch("https://dev.samagum.com/api/v1/profile/notifications", requestOptions)
.then(response => response.text())
.then(result => {
  console.log(result);
  callBack(result); 
})
.catch(error => {
  console.log('error', error);
  callBack(null); 
});

}}



export const CreateGroupApi = async (details: any, callBack: (result: any) => void) => {
  const token = await Auth.getLocalStorageData("token");

  if (token !== null) {
    const headers = {
      'Authorization': `Bearer ${token}`,
    };


var formdata = new FormData();
formdata.append("group_name", details?.name);
formdata.append("group_describe", details?.description);
formdata.append("selected_interests[]", details?.selectTopics );
formdata.append("selected_interests[]", "372");
formdata.append("place_name", "Mumbai Central, Mumbai, Maharashtra, India");
formdata.append("location_name", "Mumbai Central, Mumbai, Maharashtra, India");
formdata.append("formatted_address", "Mumbai Central, Mumbai, Maharashtra, India");
formdata.append("state", "Maharashtra");
formdata.append("city", "Konkan Division");
formdata.append("country", "India");
formdata.append("postal_code", "");
formdata.append("lat", "18.9690247");
formdata.append("lng", "72.8205292");

var requestOptions = {
  method: 'POST',
  headers: headers,
  body: formdata,
  redirect: 'follow'
};

fetch("https://dev.samagum.com/api/v1/create-group", requestOptions)
.then(response => response.text())
.then(result => {
  console.log(result);
})
.catch(error => {
  console.log('error', error);
});

  }}



  export const SearchTopicsApi = async (data: any, callBack: (result: any) => void) => {
    const token = await Auth.getLocalStorageData("token");
  
    if (token !== null) {
      const headers = {
        'Authorization': `Bearer ${token}`,
      };
  
      var requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
      };
  
      fetch("https://dev.samagum.com/api/v1/search/topics?search=Technology", requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log(result);
        })
        .catch(error => {
          console.log('error', error);
        });
    }
  }

  export const topicsListApi = async (callBack: (result: any) => void) => {
    const token = await Auth.getLocalStorageData("token");
  
    if (token !== null) {
      const headers = {
        'Authorization': `Bearer ${token}`,
      };

var requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow'
};

fetch("https://dev.samagum.com/api/v1/topics/list", requestOptions)
.then(response => response.json())
.then(result => {
  console.log(result);
  callBack(result); 
})
.catch(error => {
  console.log('error', error);
  callBack(null); 
});
    }}


export const getSocialDEtailsApi = async (callBack: (result: any) => void) => {
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

fetch("https://dev.samagum.com/api/v1/account/general/social", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


  }    }