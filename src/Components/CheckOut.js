import { useSelector } from "react-redux"

export default function CheckOut(){

    const items=useSelector(state=> state.cartslice.items);

    return(
        <>
        {
            items.map(value => <div className="text-5xl" > {value.name}</div>)
        }
        </>
    )
}