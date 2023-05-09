import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addNewItem } from "../store/actions/itemActions"

export default function FormAddNewItem() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formValue, setFormValue] = useState({
        title: '',
        link: ''
    })

    const submitForm = (e) => {
        e.preventDefault()
        dispatch(addNewItem(formValue))
        .then( data => {
            navigate('/')
        })
        .catch(error => {
            console.log(error);
        })
    }
    

    return (        
        <div className="flex justify-center items-center h-screen w-full bg-slate-50">
        <div className="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
            <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Add New PDF</h1>
            <form action="/" method="post" onSubmit={submitForm}>
                <div className="flex flex-col mb-4">
                    <label className="mb-2 font-bold text-lg text-gray-900" for="name" >PDF Title</label>
                    <input className="border py-2 px-3 text-grey-800" type="text" name="title" id="title" placeholder="PDF Title"
                    onChange={(e) => {
                        setFormValue({
                            ...formValue,
                            title: e.target.value
                        })
                    }}
                    />
                </div>
                
                <div className="flex flex-col mb-4">
                    <label className="mb-2 font-bold text-lg text-gray-900" for="description">Link</label>
                    <textarea className="border py-2 px-3 text-grey-800" type="text" name="Link" id="Link" placeholder="PDF Link"
                    onChange={(e) => {
                        setFormValue({
                            ...formValue,
                            link: e.target.value
                        })
                    }}
                    />
                </div>
                <button className="block bg-blue-600 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Submit</button>
            </form>
        </div>
        </div>
    )
}