import { BlogCard } from "../components/BlogCard"
import { FullBlog } from "../components/FullBlog"
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom" // to get parameter dynamically
import { Appbar } from "../components/Appbar"
import { Skeleton } from "../components/Skeleton"
import { Spinner } from "../components/Spinner"
import { Delete } from "../components/Delete"


export const Blog = () => {
    const { id } = useParams() // to get id dynamically form parameters 
    const{loading, blog} = useBlog({  // use blog hooks get gets the data from the database
        id: id || ""
    })
    if (loading){
        return(
            <div className="h-screen flex flex-col justify-center" >
             
             <div className="flex justify-center">
               <Spinner></Spinner>

             </div>
           
         
           </div>
  )  }
    return(
        <>
        
    <FullBlog blog={blog}/>
 <div className="flex justify-center mt-9"><Delete  id={`${id}`}/> </div>    
        </>
    )
} 