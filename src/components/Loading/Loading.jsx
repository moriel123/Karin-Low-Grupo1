
import {BeatLoader} from 'react-spinners'
export default function Loading(){
    return(
        <div className="container mx-auto flex justify-center items-center h-[50vh]">
            <BeatLoader color="#151515" size="20" />
        </div>
    )
}
