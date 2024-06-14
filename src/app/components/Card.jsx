/**
 * @author Lai Yi Qun <B11117006@gemail.yuntech.edu.tw>
 */
import Image from "next/image"
export default function CustomCard({item}){
    return(
        <div className="border">
            <Image width={500} height={500} src={item.Picture.PictureUrl1} alt={item.Picture.PictureDescription1}/>
            <div>{item.ScenicSpotName}</div>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.ScenicSpotName}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {item.DescriptionDetail}
              </p>
              <button type="button" 
                class="text-white 
                  bg-gradient-to-r
                  from-purple-500
                  to-pink-500
                  hover:bg-gradient-to-l
                  focus:ring-4
                  focus:outline-none
                  focus:ring-purple-200
                  dark:focus:ring-purple-800
                  font-medium
                  rounded-lg
                  text-sm
                  px-5
                  py-2.5
                  text-center
                  me-2
                  mb-2"
                >
                More Imformation
              </button>
        </div>
    )
}