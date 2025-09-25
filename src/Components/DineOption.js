import { DineoutRestaurants } from "../Utils/DineData"
import DineCard from "./DineCard"
export default function DineOption(){


    return(
        <>
        <div className="w-[80%] mx-auto mt-20">
            <h2 className="font-bold text-3xl mb">Discover best restaurant on Dineout</h2>
            <div className="flex flex-nowrap overflow-x-auto mt-5 gap-4 mb-20">
            {
                DineoutRestaurants.map((grocery)=><DineCard key={grocery?.info?.id} grocery={grocery} ></DineCard>)
            }
            </div>
        </div>
        </>
    )
}