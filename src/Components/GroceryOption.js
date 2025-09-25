import {GroceryGridCard} from "../Utils/Grocery"
import Grocerycard from "./GroceryCard"

export default function GroceryOption(){


    return(
         <div className="mt-20 w-[80%] container mx-auto">
            <h1 className="font-bold text-3xl mb-4">Shop Groceries on Instamart</h1>
            <div className=" w-[80%] container mx-auto flex flex-nowrap  overflow-x-auto  gap-3">
                    {
                        GroceryGridCard.map((foodData)=><Grocerycard key={foodData.id} foodData={foodData}></Grocerycard>)
                    }
                  </div>
        </div>
    )
}