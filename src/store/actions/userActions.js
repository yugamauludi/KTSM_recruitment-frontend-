import {
    baseUrl
} from "./type"

export const formLogin = (dataUser) => {
    // console.log('masuk sini');
    return async (dispatch) => {
        try {
            const data = await fetch(baseUrl + '/users/login', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataUser)
            })
            let dataJson = await data.json()
            // console.log(dataJson);
            if(!data.ok){
                throw dataJson
            }
            return dataJson
        } catch (error) {
            console.log(error);
            throw error
        }
    }
}