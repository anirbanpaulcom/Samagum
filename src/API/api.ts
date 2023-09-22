import Auth from "../constants/Auth";
import axios from 'axios';


//   Bearer 22|jDqpDXj4Fg5j6nhzboJzXfsd8JzkNxV1ZdjRa9b1edqNc2rVVsJ28UqoiFN6jRHQ2u37y1zZhYCccN1xqeAuaC2B8it3K5L0169e


export const BASE_URL = "https://dev.samagum.com/api/v1/";

export async function getNewGroupGroupsAPI() {
    var myHeaders = new Headers();
    await Auth.getLocalStorageData("token")
        .then((token) => {
            if (token !== null) {
                myHeaders.append("Authorization", `Bearer ${token}`);
            }
        })
        .catch((error) => { })

    var formdata = new FormData();
    formdata.append("group_name", "JEC Jabalpur - Engineering/B-COM/BBA");
    formdata.append("group_describe", "test");
    formdata.append("selected_interests[]", "453");
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
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    fetch("https://dev.samagum.com/api/v1/create-group", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

export async function getAllGroupsAPI(callBack: (result: any) => void) {
    var myHeaders = new Headers();
    await Auth.getLocalStorageData("token")
        .then((token) => {
            if (token !== null) {
                myHeaders.append("Authorization", `Bearer ${token}`);
            }
        })
        .catch((error) => { });

    // var formdata = new FormData();

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        // body: null,
        redirect: 'follow'
    };

    fetch("https://dev.samagum.com/api/v1/groups?tab=member&page=1", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log('\n\n getAllGroupsAPI result: ', result)
            callBack(result)
        })
        .catch(error => {
            callBack(null)
            console.log('\n\n getAllGroupsAPI error: ', error)
        });
}

export const getUserProfile = async (callBack: (result: any) => void) => {
    var myHeaders = new Headers();
    await Auth.getLocalStorageData("token")
        .then((token) => {
            if (token !== null) {
                myHeaders.append("Authorization", `Bearer ${token}`);
            }
        })
        .catch((error) => { });

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    await fetch("https://dev.samagum.com/api/v1/account/general", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log('\n\n getUserProfile result: ', result)
            callBack(result)
        })
        .catch(error => {
            callBack(null)
            console.log('\n\n getUserProfile error: ', error)
        });
}



export async function getEventDiscussion(callBack: (result: any) => void) {
    var myHeaders = new Headers();
    await Auth.getLocalStorageData("token")
        .then((token) => {
            if (token !== null) {
                myHeaders.append("Authorization", `Bearer ${token}`);
            }
        })
        .catch((error) => { });


    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://dev.samagum.com/api/v1/group/discussions/list?group=aru", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log('\n\n getEventDiscussion result: ')
            callBack(result)
        })
        .catch(error => {
            callBack(null)
            console.log('\n\n getEventDiscussion error: ', error)
        });
}

export async function createGroupDiscussion(groupTitle: string, groupContent: string, callBack: (result: any) => void) {
    var myHeaders = new Headers();
    await Auth.getLocalStorageData("token")
        .then((token) => {
            if (token !== null) {
                myHeaders.append("Authorization", `Bearer ${token}`);
            }
        })
        .catch((error) => { });

    var formdata = new FormData();
    formdata.append("group_title", groupTitle);
    formdata.append("group_content", groupContent);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    fetch("https://dev.samagum.com/api/v1/group/discussion/create?group=aru", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log('\n\n createGroupDiscussion result: ')
            callBack(result)
        })
        .catch(error => {
            callBack(null)
            console.log('\n\n createGroupDiscussion error: ', error)
        });
}

export async function deleteGroupDiscussion(discussion_id: string, callBack: (result: any) => void) {
    var myHeaders = new Headers();
    await Auth.getLocalStorageData("token")
        .then((token) => {
            if (token !== null) {
                myHeaders.append("Authorization", `Bearer ${token}`);
            }
        })
        .catch((error) => { });

    var formdata = new FormData();
    formdata.append("discussion_id", discussion_id);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    fetch("https://dev.samagum.com/api/v1/group/discussion/delete?group=aru", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log('\n\n deleteGroupDiscussion result: ')
            callBack(result)
        })
        .catch(error => {
            callBack(null)
            console.log('\n\n deleteGroupDiscussion error: ', error)
        });
}

export async function getGroupHighlights(callBack: (result: any) => void) {
    var myHeaders = new Headers();
    await Auth.getLocalStorageData("token")
        .then((token) => {
            if (token !== null) {
                myHeaders.append("Authorization", `Bearer ${token}`);
            }
        })
        .catch((error) => { });

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://dev.samagum.com/api/v1/group/photos/list?group=aru", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log('\n\n getGroupHighlights result: ')
            callBack(result)
        })
        .catch(error => {
            callBack(null)
            console.log('\n\n getGroupHighlights error: ', error)
        });
}

export async function fetchHomeDataAfterLogin(callBack: (result: any) => void) {
    var myHeaders = new Headers();
    await Auth.getLocalStorageData("token")
        .then((token) => {
            if (token !== null) {
                myHeaders.append("Authorization", `Bearer ${token}`);
            }
        })
        .catch((error) => { });

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://dev.samagum.com/api/v1/home-page", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log('\n\n fetchHomeDataWithLogin result: ')
            callBack(result)
        })
        .catch(error => {
            callBack(null)
            console.log('\n\n fetchHomeDataWithLogin error: ', error)
        });
}

export const getMyGroupsApi = async (callBack: (result: any) => void) => {
    var myHeaders = new Headers();
    await Auth.getLocalStorageData("token")
        .then((token) => {
            if (token !== null) {
                myHeaders.append("Authorization", `Bearer ${token}`);
            }
        })
        .catch((error) => { });

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    await fetch("https://dev.samagum.com/api/v1/group/setting/members?group=testing-api", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log('\n\n getMyGroupsApi result: ', result)
            callBack(result)
        })
        .catch(error => {
            callBack(null)
            console.log('\n\n getMyGroupsApi error: ', error)
        });
}


// ======================================= All apis on 22/09/2023 =================================================

export async function deleteGroupAPI(delete_reason: string, callBack: (result: any) => void) {
    var myHeaders = new Headers();
    await Auth.getLocalStorageData("token")
        .then((token) => {
            if (token !== null) {
                myHeaders.append("Authorization", `Bearer ${token}`);
            }
        })
        .catch((error) => { });

    var formdata = new FormData();
    formdata.append("delete_reason", "Other");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    fetch("https://dev.samagum.com/api/v1/group/setting/delete?group=test2", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log('\n\n deleteGroupAPI result: ', result)
            callBack(result)
        })
        .catch(error => {
            callBack(null)
            console.log('\n\n deleteGroupAPI error: ', error)
        });
}


export async function getGroupSponsorsList(callBack: (result: any) => void) {
    var myHeaders = new Headers();
    await Auth.getLocalStorageData("token")
        .then((token) => {
            if (token !== null) {
                myHeaders.append("Authorization", `Bearer ${token}`);
            }
        })
        .catch((error) => { });

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://dev.samagum.com/api/v1/group/setting/sponsors?group=testing-api", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log('\n\n getGroupSponsorsList result: ', result)
            callBack(result)
        })
        .catch(error => {
            callBack(null)
            console.log('\n\n getGroupSponsorsList error: ', error)
        });
}


export async function getGroupBasicDetails(callBack: (result: any) => void) {
    var myHeaders = new Headers();
    await Auth.getLocalStorageData("token")
        .then((token) => {
            if (token !== null) {
                myHeaders.append("Authorization", `Bearer ${token}`);
            }
        })
        .catch((error) => { });

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://dev.samagum.com/api/v1/group/setting/basic?group=demo-group-from-api", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log('\n\n getGroupBasicDetails result: ', result)
            callBack(result)
        })
        .catch(error => {
            callBack(null)
            console.log('\n\n getGroupBasicDetails error: ', error)
        });
}

export async function getGroupTopicsAPI(callBack: (result: any) => void) {
    var myHeaders = new Headers();
    await Auth.getLocalStorageData("token")
        .then((token) => {
            if (token !== null) {
                myHeaders.append("Authorization", `Bearer ${token}`);
            }
        })
        .catch((error) => { });

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://dev.samagum.com/api/v1/group/setting/topics?group=testing-api", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log('\n\n getGroupTopicsAPI result: ', result)
            callBack(result)
        })
        .catch(error => {
            callBack(null)
            console.log('\n\n getGroupTopicsAPI error: ', error)
        });
}


export async function getGroupContentVisibility(callBack: (result: any) => void) {
    var myHeaders = new Headers();
    var myHeaders = new Headers();
    await Auth.getLocalStorageData("token")
        .then((token) => {
            if (token !== null) {
                myHeaders.append("Authorization", `Bearer ${token}`);
            }
        })
        .catch((error) => { });

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://dev.samagum.com/api/v1/group/setting/content-visibility?group=testing-api", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log('\n\n getGroupContentVisibility result: ', result)
            callBack(result)
        })
        .catch(error => {
            callBack(null)
            console.log('\n\n getGroupContentVisibility error: ', error)
        });
}


export async function getGroupOptionalAPI(callBack: (result: any) => void) {
    var myHeaders = new Headers();
    await Auth.getLocalStorageData("token")
        .then((token) => {
            if (token !== null) {
                myHeaders.append("Authorization", `Bearer ${token}`);
            }
        })
        .catch((error) => { });

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://dev.samagum.com/api/v1/group/setting/optional?group=testing-api", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log('\n\n getGroupOptionalAPI result: ', result)
            callBack(result)
        })
        .catch(error => {
            callBack(null)
            console.log('\n\n getGroupOptionalAPI error: ', error)
        });
}


export async function groupMembersUpdateAPI(
    new_members_need_approved: string,
    new_members_need_pp: string,
    allow_members_create_discussion: string,
    welcome_message: string,
    callBack: (result: any) => void
) {
    var myHeaders = new Headers();
    await Auth.getLocalStorageData("token")
        .then((token) => {
            if (token !== null) {
                myHeaders.append("Authorization", `Bearer ${token}`);
            }
        })
        .catch((error) => { });

    var formdata = new FormData();
    formdata.append("new_members_need_approved", "1");
    formdata.append("new_members_need_pp", "0");
    formdata.append("allow_members_create_discussion", "0");
    formdata.append("welcome_message", "Testtttt");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    fetch("https://dev.samagum.com/api/v1/group/setting/members/update?group=testing-api", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log('\n\n groupMembersUpdateAPI result: ', result)
            callBack(result)
        })
        .catch(error => {
            callBack(null)
            console.log('\n\n groupMembersUpdateAPI error: ', error)
        });
}


export async function editSponsoredListAPI(sponsor_id: string, callBack: (result: any) => void) {
    var myHeaders = new Headers();
    await Auth.getLocalStorageData("token")
        .then((token) => {
            if (token !== null) {
                myHeaders.append("Authorization", `Bearer ${token}`);
            }
        })
        .catch((error) => { });

    var formdata = new FormData();
    formdata.append("sponsor_id", "4");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    fetch("https://dev.samagum.com/api/v1/group/setting/sponsor/edit?group=testing-api", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log('\n\n editSponsoredListAPI result: ', result)
            callBack(result)
        })
        .catch(error => {
            callBack(null)
            console.log('\n\n editSponsoredListAPI error: ', error)
        });
}


export async function addSponsorsListAPI(
    name: string,
    description: string,
    website: string,
    logo: any,
    callBack: (result: any) => void
) {
    var myHeaders = new Headers();
    await Auth.getLocalStorageData("token")
        .then((token) => {
            if (token !== null) {
                myHeaders.append("Authorization", `Bearer ${token}`);
            }
        })
        .catch((error) => { });

    var formdata = new FormData();
    formdata.append("name", "Arun Chouhan");
    formdata.append("description", "Food");
    formdata.append("website", "https://google.com");
    formdata.append("logo", logo);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    fetch("https://dev.samagum.com/api/v1/group/setting/sponsor/add?group=testing-api", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log('\n\n addSponsorsListAPI result: ', result)
            callBack(result)
        })
        .catch(error => {
            callBack(null)
            console.log('\n\n addSponsorsListAPI error: ', error)
        });
}


export async function deleteSponsorsListSPI(sponsor_id: string, callBack: (result: any) => void) {
    var myHeaders = new Headers();
    await Auth.getLocalStorageData("token")
        .then((token) => {
            if (token !== null) {
                myHeaders.append("Authorization", `Bearer ${token}`);
            }
        })
        .catch((error) => { });

    var formdata = new FormData();
    formdata.append("sponsor_id", "10");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    fetch("https://dev.samagum.com/api/v1/group/setting/sponsor/delete?group=testing-api", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log('\n\n deleteSponsorsListSPI result: ', result)
            callBack(result)
        })
        .catch(error => {
            callBack(null)
            console.log('\n\n deleteSponsorsListSPI error: ', error)
        });
}


export async function updateSponsorsListAPI(
    sponsor_id: string,
    name: string,
    description: string,
    website: string,
    logo: string,
    callBack: (result: any) => void
) {
    var myHeaders = new Headers();
    await Auth.getLocalStorageData("token")
        .then((token) => {
            if (token !== null) {
                myHeaders.append("Authorization", `Bearer ${token}`);
            }
        })
        .catch((error) => { });

    var formdata = new FormData();
    formdata.append("sponsor_id", "4");
    formdata.append("name", "Arun");
    formdata.append("description", "testetstetst");
    formdata.append("website", "https://google.com");
    formdata.append("logo", "JIfLelEBI/Screenshot 2023-08-12 123144.png");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    fetch("https://dev.samagum.com/api/v1/group/setting/sponsor/update?group=testing-api", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log('\n\n updateSponsorsListAPI result: ', result)
            callBack(result)
        })
        .catch(error => {
            callBack(null)
            console.log('\n\n updateSponsorsListAPI error: ', error)
        });
}


// ======================================= All apis on 22/09/2023 =================================================


export const createEventAPI = async (eventData: any, callBack: (result: any) => void) => {
    try {
        const token = await Auth.getLocalStorageData("token");

        if (token !== null) {
            const headers = {
                'Authorization': `Bearer 22|jDqpDXj4Fg5j6nhzboJzXfsd8JzkNxV1ZdjRa9b1edqNc2rVVsJ28UqoiFN6jRHQ2u37y1zZhYCccN1xqeAuaC2B8it3K5L0169e`,
            };

            const response = await axios.post(
                'https://dev.samagum.com/api/v1/group/create_event?group=demo-group-from-api-1',
                data,
                { headers }
            );

            console.log('\n\n createEvent result:', response.data);
            callBack(response.data);
        } else {
            callBack(null);
            console.error('Token not found');
        }
    } catch (error) {
        callBack(null);
        console.error('\n\n createEvent error:', error);
    }
};


export const addBioAPI = async (data) => {
    try {
        const token = await Auth.getLocalStorageData("token");

        if (token !== null) {
            const headers = {
                'Authorization': `Bearer 22|jDqpDXj4Fg5j6nhzboJzXfsd8JzkNxV1ZdjRa9b1edqNc2rVVsJ28UqoiFN6jRHQ2u37y1zZhYCccN1xqeAuaC2B8it3K5L0169e`,
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


export const getEditProfileDetails = async (data) => {
    try {
        const token = await Auth.getLocalStorageData("token");

        if (token !== null) {
            const headers = {
                'Authorization': `Bearer 22|jDqpDXj4Fg5j6nhzboJzXfsd8JzkNxV1ZdjRa9b1edqNc2rVVsJ28UqoiFN6jRHQ2u37y1zZhYCccN1xqeAuaC2B8it3K5L0169e`,
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
            'Authorization': `Bearer 22|jDqpDXj4Fg5j6nhzboJzXfsd8JzkNxV1ZdjRa9b1edqNc2rVVsJ28UqoiFN6jRHQ2u37y1zZhYCccN1xqeAuaC2B8it3K5L0169e`,
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
            'Authorization': `Bearer 22|jDqpDXj4Fg5j6nhzboJzXfsd8JzkNxV1ZdjRa9b1edqNc2rVVsJ28UqoiFN6jRHQ2u37y1zZhYCccN1xqeAuaC2B8it3K5L0169e`,
        };

        await axios.get(
            "https://dev.samagum.com/api/v1/group/event/57",
            { headers }
        ).then(result => {
            console.log('\n\n eventDetailsApi  result: ', result)
            callBack(result)
        })
            .catch(error => {
                callBack(null)
                console.log('\n\n eventDetailsApi  error: ', error)
            });
    }
}



export const changePasswordApi = async (newPassword, callBack: (result: any) => void) => {

    const token = await Auth.getLocalStorageData("token");

    if (token !== null) {
        const headers = {
            'Authorization': `Bearer 22|jDqpDXj4Fg5j6nhzboJzXfsd8JzkNxV1ZdjRa9b1edqNc2rVVsJ28UqoiFN6jRHQ2u37y1zZhYCccN1xqeAuaC2B8it3K5L0169e`,
        };

        var formdata = new FormData();
        formdata.append("new_password", newPassword);

        await axios.post(
            "https://dev.samagum.com/api/v1/account/update-password",
            formdata,
            { headers }
        ).then(result => {
            console.log('\n\n passwordchanging  result: ', result)
            callBack(result)
        })
            .catch(error => {
                callBack(null)
                console.log('\n\n passwordchanging  error: ', error)
            });
    }
}