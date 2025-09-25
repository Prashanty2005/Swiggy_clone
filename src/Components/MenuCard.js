import { useState } from "react"
import RestInfo from "./RestInfo"
export default function MenuCard({MenuItems,foodSelected}){

    const [isOpen,setIsopen]= useState(true);
    
    if("categories" in MenuItems)
    {

        return(
            <>
            <div className="w-full "> 
                {/* /this is sepate for those who have categories in it and in categories there are cards*/}
                <p className="text-3xl font-bold mb-4">{MenuItems?.title}</p>
                <div>
                    {
                        MenuItems?.categories?.map((items)=><MenuCard key={items?.title} MenuItems={items} foodSelected={foodSelected}></MenuCard> )
                    }
                </div>
            </div>
            </>
        )
    }
    if(!isOpen)
    {
        return(
        <div className="w-full ">
            <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{MenuItems?.title}</p>
            <button className="text-5xl mr-20 font-bold" onClick={()=>setIsopen(!isOpen)}>{isOpen? '>':'<'}</button>
            </div>
        </div>
        )
    }

    if(foodSelected==='veg'){
        return(
            <>
            <div className="w-full ">
            <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{MenuItems?.title}</p>
            <button className="text-3xl mr-10" onClick={()=>setIsopen(!isOpen)}>{isOpen? '>':'<'}</button>
            </div>
            <div>
                {
                    MenuItems?.itemCards?.filter((food)=>"isVeg" in food?.card?.info).map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info} ></RestInfo>)
                    // this will display each item in list like: recommended is main it is title and inside it is tandorri panner, pizza ,etz
                    //it will display each card like tandoori panner inside title
                }
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
            </div>
            </>
        )
    }

    if(foodSelected==='Non-veg'){
        return(
        <>
            <div className="w-full ">
            <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{MenuItems?.title}</p>
            <button className="text-3xl mr-10" onClick={()=>setIsopen(!isOpen)}>{isOpen? '>':'<'}</button>
            </div>
            <div>
                {
                    MenuItems?.itemCards?.filter((food)=>!("isVeg" in food?.card?.info)).map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info} ></RestInfo>)
                    // this will display each item in list like: recommended is main it is title and inside it is tandorri panner, pizza ,etz
                    //it will display each card like tandoori panner inside title
                }
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
            </div>
        </>
        )
    }
    return(
        <>
        
        <div className="w-full ">
            <div>
                <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{MenuItems?.title}</p>
            <button className="text-3xl mr-10" onClick={()=>setIsopen(!isOpen)}>{isOpen? '>':'<'}</button>
            </div>
                {
                    MenuItems?.itemCards?.map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info} ></RestInfo>)
                    // this will display each item in list like: recommended is main it is title and inside it is tandorri panner, pizza ,etz
                    //it will display each card like tandoori panner inside title
                }
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
        </>
    )

    
}