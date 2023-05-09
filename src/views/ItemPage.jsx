import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchItems } from '../store/actions/itemActions'
import TableItem from '../components/TableItem'
import { Link } from 'react-router-dom'


export default function ItemPage (){
    const dispatch = useDispatch()
    const items = useSelector((state) => state.items)
    console.log(items, "dari itempage");
    
    useEffect(() => {
        dispatch (fetchItems())
    }, [dispatch])
    return (
        <div className="ml-[80px] mt-[40px] mb-[80px] mr-[80px]">
            <div className="px-4 py-2 text-2xl text-black">Data PDF</div>
            <button className="bg-red-700 text-white hover:bg-white hover:text-black text-md duration-200 font-semibold mr-2 px-4 py-1 rounded-xl mb-2"><i className="pr-1 fa-solid fa-plus"></i> <Link to="/add">Add New PDF</Link></button>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-white uppercase bg-green-700 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Link
                            </th>
                            <th>
                                <i className="item-center fa-regular fa-pen-to-square"></i>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((el, i) => {
                            return <TableItem key = {el.id} el={el} itemNumber={i+1}/>
                        })}
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}