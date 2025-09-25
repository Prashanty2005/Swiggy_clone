import { useState } from "react";
import { addItems,IncrementItems,DecrementItems } from "../stored/CartSlicer";
import { useDispatch, useSelector } from "react-redux";

export default function RestInfo({ restData }) {
  const pricePaise = restData?.defaultPrice ?? restData?.price ?? 0;
  const rating = restData?.ratings?.aggregatedRating?.rating ?? "N/A";
  const ratingCount = restData?.ratings?.aggregatedRating?.ratingCountV2 ?? 0;

  // const [count,setCount]=useState(0);
  const items=useSelector(state=> state.cartSlice?.items);

  const element=items?.find(item=> item.id=== restData?.id);

  const count=element ? element.quantity: 0

  const dispatch= useDispatch();

  function handleAddItems(){
  
    dispatch(addItems(restData));
  }

  function handleIncrementItems(){

    dispatch(IncrementItems(restData));
  }

  function handleDecrementItems(){
    dispatch(DecrementItems(restData));
  }

  return (
    <>
      <div className="flex w-full justify-between mb-2 pb-2">
        <div className="w-[70%]">
          <p className="text-2xl text-gray-700 mb-1">{restData?.name}</p>
          <p className="text-xl">
            {pricePaise ? (pricePaise / 100).toFixed(2) : "Price not available"}
          </p>
          <span className="text-green-600">{rating}</span>
          <span>({ratingCount})</span>
          <p>{restData?.description}</p>
        </div>
        <div className="w-[20%] relative h-42">
          {restData?.imageId && (
            <img
              className="w-full h-36 object-cover"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/${restData.imageId}`}
              alt={restData?.name}
            />
          )}
          {
            count===0? (<button className="absolute bottom-1 left-19 text-green-600 py-2 px-6 shadow-md bg-white rounded-xl text-2xl" onClick={()=>handleAddItems()}>
            ADD
          </button>):(
          <div className="flex absolute gap-2 text-2xl bottom-1 left-19 text-green-500 py-2 px-6 shadow-md bg-white rounded-xl">
            <button onClick={()=>handleDecrementItems()}>-</button>
            <span>{count}</span>
            <button onClick={()=>handleIncrementItems()}>+</button>
          </div>
          )
          }
          
        </div>
      </div>
      <hr />
    </>
  );
}
