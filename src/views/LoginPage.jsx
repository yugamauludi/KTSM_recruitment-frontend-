import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { formLogin } from "../store/actions/userActions"

export default function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [data, setData] = useState ({
        email: '',
        password: ''
    })
    const submitLogin = (e) => {
        e.preventDefault()
        dispatch(formLogin(data))
        .then(data => {
            localStorage.setItem('access_token', data.access_token)
            localStorage.setItem('email', data.email)
            navigate('/')
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <section className="h-screen ml-[100px]">
            <div className="px-6 h-full text-gray-800">
                <div
                className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                >
                <div
                    className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                >
                    <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    className="w-full"
                    alt="Sample image"
                    />
                </div>
                <div className="xl:ml-[80px] mr-5 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                    <form onSubmit={submitLogin}>                       

                        <div
                            className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                        >
                            <p className="text-center font-semibold mx-4 mb-0">User Login</p>
                        </div>

                        {/* <!-- Email input --> */}
                        <div className="mb-6">
                            <input
                            type="text"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput2"
                            placeholder="Email address"
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    email: e.target.value
                                })
                            }}
                            />
                        </div>

                        {/* <!-- Password input --> */}
                        <div className="mb-6">
                            <input
                            type="password"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput2"
                            placeholder="Password"
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    password: e.target.value
                                })
                            }}
                            />
                        </div>
                        <div className="text-center lg:text-left">
                            <button
                            type="submit"
                            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                            >
                            Login
                            </button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
            </section>
    )
}

