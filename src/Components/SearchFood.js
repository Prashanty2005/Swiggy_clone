import { useState,useEffect } from "react";
import { useParams } from "react-router"

export default function SearchFood(){
    const {id}=useParams();
    const[food,setFood]= useState();
    const [RestData,setRestData]= useState();

    useEffect(()=>{
        
            async function fetchData() {
               
               const proxyServer = "http://localhost:8080/"
               const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
               const response = await fetch(proxyServer+swiggyAPI);
               const data = await response.json(); // this data is whole data of restaurent page
               const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;  // select all cards of data need to display like recommended, vegpizza title 
               const filterData = tempData?.filter((items)=> 'title' in items?.card?.card) // filter out all data and select those which includ title
               setRestData(filterData);
            }
       
            fetchData();
           },[])

    return(
        <>
        <div className="w-[80%] mx-auto mt-20">
            <input className="w-full pl-10 py-4 text-2xl bg-gray-300 border rounded-2xl" placeholder="Search Here" onChange={(e)=>setFood(e.target.value)}></input>
        </div>
        </>
    )
}