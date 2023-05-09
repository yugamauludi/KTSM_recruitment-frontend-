import {
    FETCH_ITEMS_PENDING,
    FETCH_ITEMS_SUCCESS,
    FETCH_ITEMS_REJECT,
    baseUrl
} from "./type"

const fetchItemPending = () => ({
    type: FETCH_ITEMS_PENDING
})
const fetchItemSuccess = (responseJson) => ({
    type: FETCH_ITEMS_SUCCESS,
    payload: responseJson

})
const fetchItemReject = (errorMessage) => ({
    type: FETCH_ITEMS_REJECT,
    payload: errorMessage
})

export const fetchItems = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchItemPending())
            const response = await fetch(`${baseUrl}/pdf`, {
                method: "GET",
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
            const data = await response.json()
            console.log(data, 'ini dari action');
            dispatch(fetchItemSuccess(data))
        } catch (error) {
            dispatch(fetchItemReject(error))
            console.log(error);
        }
    }
}

export const addNewItem = (formValue) => {
    return async (dispatch) => {
        try {
            let response = await fetch(baseUrl + '/pdf', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    access_token: localStorage.getItem('access_token')
                },
                body: JSON.stringify(formValue)
            })
            let responseJson = await response.json()
            if (!response.ok) {
                throw responseJson
            }
            console.log(responseJson);
            return responseJson
        } catch (error) {
            console.log(error);
            throw error
        }
    }
}

export const deleteItem = (id) => {
    return async (dispatch, getState) => {
        try {
            let response = await fetch ( baseUrl + '/pdf/' + id, {
                method : 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    access_token: localStorage.getItem('access_token')
                }
            })
            let data = await response.json()
            let items = getState().item.items
            let payload = items.filter(el => el.id !== id)
            dispatch(fetchItemSuccess())
            return data
        } catch (error) {
            console.log(error);
        }
    }
}   