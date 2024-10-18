import { useState } from "react";
import { useAppSelector } from "../redux/configureStore";
import FormSelect from "./FormSelect";


const Details = () => {
    const [lesson, setLesson] =useState<string>("Variables and Data Types");
    console.log('lesson:', lesson)

    const modules: any = useAppSelector(state => state.filteredCourses.course?.modules);

    const getLesson = (e: string) => {
        setLesson(e)
    }

    // const lessonDetails = modules.

    

    return (
        <div>
            <h1>Details</h1>
            {modules.map((mod:any, index: number) => {
                console.log('modulessss', mod)
                return (
                    <div key={index}>
                        <p>module: {mod.title}</p>
                        <FormSelect items={mod} getLesson={getLesson}/>
                        {mod.lessons.map((less:any, index: number) => {
                            console.log('less:', less)
                            if(less.title === lesson){
                                return(
                                    <div key={index}>
                                        <p>description:{less.description}</p>
                                        <p>topics: {less.topics}</p>
                                        {less.content.map((cn:any, index: number) => {
                                            return (
                                                <div key={index}>
                                                    <p>{index + 1}. content : {cn.type}</p>
                                                    <p>{index + 1}. Data : {cn.data}</p>
                                                </div>
                                            )
                                        })}
    
                                    </div>
    
    
                                ) 

                            }
                        })
                        }
                    </div>
                )
            })}

        </div>
    )
}
export default Details