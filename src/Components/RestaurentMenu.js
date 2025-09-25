import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard"
import { Link } from "react-router";


export default function RestaurantMenu(){
   
    let {id} = useParams();

    const [RestData, setRestData] = useState(null);
    const [selected,setSelected]= useState(null);
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
          <Link to={`/city/delhi/${id}/search`}>
          <p className="w-full text-center py-4 rounded-2xl bg-gray-200">Search For Dishes</p>
          </Link>
        </div>

        <div className="w-[80%] mx-auto mt-20">
          <div className="w-[80%] flex gap-1 mt-15 mb-15 ">
        <button className={`text-2xl py-2 px-8 mr-4 border rounded-2xl ${selected==='veg'? "bg-green-600": "bg-gray-100"}`} onClick={()=>setSelected(selected==='veg'?null:'veg')} >Veg </button>
        <button className={`text-2xl py-2 px-4 mr-2 border rounded-2xl ${selected==='Non-veg'? "bg-red-600": "bg-gray-100"}`} onClick={()=>setSelected(selected==='Non-veg'?null:'Non-veg')}>Non-Veg</button>
        </div>
          
          {
            RestData?.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} MenuItems={menuItems?.card?.card} foodSelected={selected}></MenuCard>)
            // menu card will show all data present in indivial list like recommended list  print all sych list 
          }
        </div>
      </>
    )

}