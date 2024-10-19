import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/configureStore"
import { addLessonTitle, addModuleTitle } from "../redux/filteredCourses";
import FormSelect from "./FormSelect";



const ModuleComponent = () => {
    const [moduleTitle, setModuleTitle] =useState<string>("Variables and Data Types");
    const [selectedtitle, setSelectedtitle] = useState<string>('')
    const dispatch = useAppDispatch();
    
    const modules: any = useAppSelector(state => state.filteredCourses.course?.modules);

    const getModuleTitle = (title:string) => {
        setModuleTitle(title);
        dispatch(addModuleTitle(title))
    } 
    const selectedModule = modules.find((mod: any) => mod.title === moduleTitle);


    const getLessonTitle = (title:string) => {
        dispatch(addLessonTitle(title));
        setSelectedtitle(title);
    }

    const color = (title:string) => {
        if(selectedtitle === title){
            return "orange"
        }
    }

    return (
        <div className="row">
            <h1>modules</h1>
            <FormSelect items={modules} getTitle={getModuleTitle}/>
            <div className="py-5">
                {selectedModule && selectedModule.lessons.map((less:any, index:number) => {
                    return (
                        <div key={index} className="col-sm-6 pe-5 text-start">
                            <h5 style={{backgroundColor: color(less.title)}} role="button" onClick={() => getLessonTitle(less.title)}>lesson: {less.title}</h5>
                        </div>
                    )
                })}
            </div>
            <div className="row justify-content-start" >
                <div className="col-sm-5">
                    <p>⬆️</p>               
                    <p className="bg-warning " >Choose the lesson and then the lessons button for details</p>

                </div>
            </div>
        </div>
    )
}

export default ModuleComponent;