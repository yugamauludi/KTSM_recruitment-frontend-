import { useDispatch } from "react-redux";
import { deleteItem } from "../store/actions/itemActions";



export default function TableItem({el, itemNumber}){

    const dispatch = useDispatch()
    const deleteItems = (id) => {
        dispatch(deleteItem(id))
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
    }
    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {itemNumber}
                </th>
                <td className="px-6 py-4">
                    {el.title}
                </td>
                <td className="px-6 py-4">
                    {el.link}
                </td>
                <td className="px-6 py-4">
                <br/>
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={() => {
                    deleteItems(el.id)
                }}
                >
                    Delete
                </button>
                </td>
            </tr>
        </>
    )
}