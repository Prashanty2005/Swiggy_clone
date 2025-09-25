import { Link } from "react-router"
export default function RestCard({restInfo,Rating,Fdelivery,Veg}){
    return(
        <>
        <Link to={"/city/delhi/"+ restInfo?.info?.id}>
        <div className="max-w-[280px] gap-2 ml-1 transform transition duration-200 hover:scale-95">
        <img className="w-70 h-45 object-cover m-0.5 flex rounded-xl gap-2" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo.info.cloudinaryImageId}></img>

        <div className="w-[95%] mx-auto mt-3">
        <div className="font-bold text-xl ">{restInfo?.info?.name}</div>
        <div className="flex gap-1">
         <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-green-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
        <span className="text-lg">{restInfo?.info?.avgRating}</span>
        <span className="font-bold text-lg">{restInfo?.info?.sla?.slaString}</span>
        </div>
        <div className="text-gray-400 text-xl mt-1 overflow-hidden ">{restInfo?.info?.cuisines.join()}</div>
        </div>
        </div>
        </Link>
        </>
    )
}


//this will display all cards of restaurent js



//cuisines.join(): cuisines returns all element from array and display it on screen but there is no gap
//to create gap we use joins

//transform transition duration-200 hover:scale-95