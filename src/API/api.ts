import Auth from "../constants/Auth";

export const BASE_URL = "https://saurav.tech/NewsAPI/";

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

export const updateUserProfile = async (data: any, callBack: (result: any) => void) => {
    var myHeaders = new Headers();
    await Auth.getLocalStorageData("token")
        .then((token) => {
            if (token !== null) {
                myHeaders.append("Authorization", `Bearer ${token}`);
            }
        })
        .catch((error) => { });

    var formdata = new FormData();
    formdata.append("first_name", data?.firstName);
    formdata.append("last_name", data?.lastName);
    formdata.append("email", data?.email);
    formdata.append("phone", data?.phone);
    formdata.append("birthdate", data?.dob);
    formdata.append("gender", data?.gender);
    // formdata.append("profile_picture", fileInput.files[0], "/D:/images/Documents/documents/passport_size_pic.png");
    formdata.append("profile_picture", "/D:/images/Documents/documents/passport_size_pic.png");
    formdata.append("username", data?.email?.split("@")[0]);
    formdata.append("timezone", "America/Belem");
    formdata.append("bio", "Enjoy your favorite dishe and a lovely your friends and family and have a great time. Food from local food trucks will be available for purchase. Read More");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    fetch("https://dev.samagum.com/api/v1/account/update-details", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log('\n\n updateUserProfile result: ', result)
            callBack(result)
        })
        .catch(error => {
            callBack(null)
            console.log('\n\n updateUserProfile error: ', error)
        });
}

export async function getEventDiscussion(callBack: (result: any) => void) {
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

export function createGroupDiscussion(groupTitle: string, groupContent: string, callBack: (result: any) => void) {
    var myHeaders = new Headers();
    // await Auth.getLocalStorageData("token")
    //     .then((token) => {
    //         if (token !== null) {
    //             myHeaders.append("Authorization", `Bearer ${token}`);
    //         }
    //     })
    //     .catch((error) => { });
    myHeaders.append("Authorization", "Bearer 3|wK58Dkd3zVzATkeBs3EyFDrlsyIyDxFnKZMiGnOhCdEkZiHBNyrHLQBQMLdP9XMPuyDLmBMo13x8re7ryFXEd3zRKfX5ht6ZhpEl");

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

export function deleteGroupDiscussion(discussion_id: string, callBack: (result: any) => void) {
    var myHeaders = new Headers();
    // await Auth.getLocalStorageData("token")
    //     .then((token) => {
    //         if (token !== null) {
    //             myHeaders.append("Authorization", `Bearer ${token}`);
    //         }
    //     })
    //     .catch((error) => { });
    myHeaders.append("Authorization", "Bearer 3|wK58Dkd3zVzATkeBs3EyFDrlsyIyDxFnKZMiGnOhCdEkZiHBNyrHLQBQMLdP9XMPuyDLmBMo13x8re7ryFXEd3zRKfX5ht6ZhpEl");

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

export function getGroupHighlights(callBack: (result: any) => void) {
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
    // myHeaders.append("Authorization", "Bearer 3|QkysqA0FuRHqK9qede2SKdaWYWg0fErEMESQMoLbMJEg9eVvud0ZT8vKu4bONae2l6B2oVyfsRVuVw5nsbRyQ7rQtripSdWZq9Of");

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
