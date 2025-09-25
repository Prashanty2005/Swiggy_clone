export default function DineCard({grocery}){

    return(
        <>
        
        <div className="max-w-sm flex-none ">
            <a target="_blank" href={grocery.cta.link}>
            <div className="relative">
                <img className="w-80 h-50 object-cover" src={`https://media-assets.swiggy.com/swiggy/image/upload/${grocery?.info?.mediaFiles[0].url}`}></img>
                <p className="absolute bottom-2 left-1 text-xl text-white">{grocery.info.name}</p>
                <p className="absolute bottom-2 right-1 text-white text-xl">{grocery?.info?.rating?.value}</p>
                <div className="absolute bg-gradient-to-t from-black h-15 bottom-0 left-0 right-0 to-transparent "></div>
            </div>
            </a>
        </div>
        
        </>
    )
}