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


// ===================================== Done on 22/09/2023 ==================================================
export async function getAllGroupsYouOrganize(callBack: (result: any) => void) {
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

    fetch("https://dev.samagum.com/api/v1/my_events/from_groups_you_organize", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log('\n\n getAllGroupsYouOrganize result: ', result)
            callBack(result)
        })
        .catch(error => {
            callBack(null)
            console.log('\n\n getAllGroupsYouOrganize error: ', error)
        });
}


export async function fetchGroupDetails(group_name: string, callBack: (result: any) => void) {
    var myHeaders = new Headers();
    await Auth.getLocalStorageData("token")
        .then((token) => {
            if (token !== null) {
                myHeaders.append("Authorization", `Bearer ${token}`);
            }
        })
        .catch((error) => { });

    var formdata = new FormData();
    formdata.append("group_name", group_name);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    fetch("https://dev.samagum.com/api/v1/group-details", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log('\n\n fetchGroupDetails result: ', result)
            callBack(result)
        })
        .catch(error => {
            callBack(null)
            console.log('\n\n fetchGroupDetails error: ', error)
        });
}


export async function joinGroupAPI(group_id: string, callBack: (result: any) => void) {
    var myHeaders = new Headers();
    await Auth.getLocalStorageData("token")
        .then((token) => {
            if (token !== null) {
                myHeaders.append("Authorization", `Bearer ${token}`);
            }
        })
        .catch((error) => { });

    var formdata = new FormData();
    formdata.append("group_id", group_id);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    fetch("https://dev.samagum.com/api/v1/group/join", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log('\n\n joinGroupAPI result: ', result)
            callBack(result)
        })
        .catch(error => {
            callBack(null)
            console.log('\n\n joinGroupAPI error: ', error)
        });
}


export async function getAllGroupRelatedTopics(callBack: (result: any) => void) {
    var myHeaders = new Headers();
    // await Auth.getLocalStorageData("token")
    //     .then((token) => {
    //         if (token !== null) {
    //             myHeaders.append("Authorization", `Bearer ${token}`);
    //         }
    //     })
    //     .catch((error) => { });
    myHeaders.append("Authorization", "Bearer 3|wK58Dkd3zVzATkeBs3EyFDrlsyIyDxFnKZMiGnOhCdEkZiHBNyrHLQBQMLdP9XMPuyDLmBMo13x8re7ryFXEd3zRKfX5ht6ZhpEl");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://dev.samagum.com/api/v1/group/setting/topics?group=testing-api", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log('\n\n getAllGroupRelatedTopics result: ', result)
            callBack(result)
        })
        .catch(error => {
            callBack(null)
            console.log('\n\n getAllGroupRelatedTopics error: ', error)
        });
}


export async function getAllGroupMenbersCount(callBack: (result: any) => void) {
    var myHeaders = new Headers();
    // await Auth.getLocalStorageData("token")
    //     .then((token) => {
    //         if (token !== null) {
    //             myHeaders.append("Authorization", `Bearer ${token}`);
    //         }
    //     })
    //     .catch((error) => { });
    myHeaders.append("Authorization", "Bearer 3|wK58Dkd3zVzATkeBs3EyFDrlsyIyDxFnKZMiGnOhCdEkZiHBNyrHLQBQMLdP9XMPuyDLmBMo13x8re7ryFXEd3zRKfX5ht6ZhpEl");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://dev.samagum.com/api/v1/group/setting/members?group=testing-api", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log('\n\n getAllGroupMenbersCount result: ', result)
            callBack(result)
        })
        .catch(error => {
            callBack(null)
            console.log('\n\n getAllGroupMenbersCount error: ', error)
        });
}
// ===================================== Done on 22/09/2023 ==================================================


export const createEventAPI = async (data: any, callBack: (result: any) => void) => {
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


export const addBioAPI = async (data: any) => {
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


export const getEditProfileDetails = async (data: any) => {
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



export const changePasswordApi = async (newPassword: string, callBack: (result: any) => void) => {
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
