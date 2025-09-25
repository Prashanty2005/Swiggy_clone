import { useEffect, useState } from "react"
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";

export default function Restaurant(){
    const[RestData,setRestData]= useState([]);
    const[Rating,setRating]= useState(false);
    const[Veg,setVeg]=useState(false);
    const[Fdelivery,setFdelivery]=useState(false);

    useEffect(()=>{
        async function fetchData() {
          const proxyServer="http://localhost:8080/";
          const swiggyAPI="https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true"
          const response= await fetch(proxyServer+swiggyAPI);
          const data= await response.json();
          setRestData(data.data.cards[1].card.card.gridElements?.infoWithStyle.restaurants);
        }

        fetchData();
    },[])
    //Shimmer Effect 
    if(RestData?.length==0)
        return <Shimmer></Shimmer>

    if(Fdelivery)
    {
        return(
            <>
            <div className="w-[80%] mt-15 mb-15 flex justify-center gap-2 ">
            <button className={`bg-gray-300 px-2 py-4 text-2xl font-bold ${Rating===true? "bg-gray-500":"bg-gray-300"}`} onClick={()=>setRating(Rating===true?false:true)}>Rating 4+</button>
            <button className={`bg-gray-300 px-2 py-4 text-2xl font-bold${Veg===true?"bg-gray-500":"bg-gray-300" }`} onClick={()=>setVeg(Veg===true?false: true)}>Pure veg</button>
            <button className={`bg-gray-300 px-2 py-4 text-2xl font-bold ${Fdelivery===true?"bg-gray-500":"bg-gray-300"}`} onClick={()=>setFdelivery(Fdelivery===true?false:true)}>Fast Delivery</button>
            </div>
            <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
            {
                RestData?.filter((rest)=>(rest?.info?.sla?.slaString)).map((restInfo)=> <RestCard key={restInfo.info.id} restInfo={restInfo} Rating={Rating} Veg={Veg} Fdelivery={Fdelivery}></RestCard>)
            }
            </div>
            </>
        )
    }

    if(Rating){
        return(
            <>
            <div className="w-[80%] mt-15 mb-15 flex justify-center gap-2 ">
            <button className={`bg-gray-300 px-2 py-4 text-2xl font-bold ${Rating===true? "bg-gray-500":"bg-gray-300"}`} onClick={()=>setRating(Rating===true?false:true)}>Rating 4+</button>
            <button className={`bg-gray-300 px-2 py-4 text-2xl font-bold${Veg===true?"bg-gray-500":"bg-gray-300" }`} onClick={()=>setVeg(Veg===true?false: true)}>Pure veg</button>
            <button className={`bg-gray-300 px-2 py-4 text-2xl font-bold ${Fdelivery===true?"bg-gray-500":"bg-gray-300"}`} onClick={()=>setFdelivery(Fdelivery===true?false:true)}>Fast Delivery</button>
            </div>
            <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
            {
                RestData?.filter((rest)=>(rest?.info?.avgRating)> 4.5).map((restInfo)=> <RestCard key={restInfo.info.id} restInfo={restInfo} Rating={Rating} Veg={Veg} Fdelivery={Fdelivery}></RestCard>)
            }
            </div>
            </>
        )
    }
    return(
        <>
        <div className="w-[80%] mt-15 mb-15 flex justify-center gap-2 ">
          <button className={`bg-gray-300 px-2 py-4 text-2xl font-bold ${Rating===true? "bg-gray-500":"bg-gray-300"}`} onClick={()=>setRating(Rating===true?false:true)}>Rating 4+</button>
          <button className={`bg-gray-300 px-2 py-4 text-2xl font-bold${Veg===true?"bg-gray-500":"bg-gray-300" }`} onClick={()=>setVeg(Veg===true?false: true)}>Pure veg</button>
          <button className={`bg-gray-300 px-2 py-4 text-2xl font-bold ${Fdelivery===true?"bg-gray-500":"bg-gray-300"}`} onClick={()=>setFdelivery(Fdelivery===true?false:true)}>Fast Delivery</button>
        </div>

        <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
            {
                RestData?.map((restInfo)=> <RestCard key={restInfo.info.id} restInfo={restInfo} Rating={Rating} Veg={Veg} Fdelivery={Fdelivery}></RestCard>)
            }
        </div>
        </>
    )
} 


// restaurent page will open on clicking cart food delivery on restaurent