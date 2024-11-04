'use client'
import { cn, useBoolean } from "pol-ui";
 
const Video = ({ index, data: { mp4, date }, width }: {
  index: number;
  data: {
    mp4: string;
    date: string;
  };
  width: number;
}) => {

  
   const videoName:string = mp4;
  const {value:loading,setFalse:stopLoading} = useBoolean(true)
    return(
        <div key={index} className={cn("relative w-full project-cascade h-full rounded-lg bg-white dark:bg-black overflow-hidden", {
        "animate-pulse": loading,
  })}>
      
    <video
    preload="none"
    autoPlay
    onCanPlay={stopLoading}
    muted
    loop
    width={width}
    className="object-cover w-full h-full"
  >
    <source src={`/media/concepts/${videoName}.mp4`} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
   <p className="absolute bottom-2 right-2 text-sm text-secondary-300 mix-blend-difference">
      {date}
  </p>
</div>

)};


export default Video;