import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/configureStore";
import FormSelect from "../components/FormSelect";
import { addLesson } from "../redux/filteredCourses";




const Modules = () => {

    const [moduleTitle, setModuleTitle] =useState<string>("Variables and Data Types");
    const dispatch = useAppDispatch;

    const modules: any = useAppSelector(state => state.filteredCourses.course?.modules);
    // console.log('modules:', modules);
    // console.log('module title:', moduleTitle)

    const getModuleTitle = (title:string) => {
        setModuleTitle(title);
    } 

    // const getLessons = () => {
    //     dispatch(addLesson(modules.lessons))
    // }

    const selectedModule = modules.find((mod: any) => mod.title === moduleTitle);

    console.log('selected module:', selectedModule.lessons)




    return (
        <div>
            <h1>modules</h1>
            <FormSelect items={modules} getTitle={getModuleTitle}/>
            {/* <button >{selectedModule.title}</button> */}
            {selectedModule.lessons.map((less:any, index:number) => {
                return (
                    <div key={index}>
                        <p>lesson: {less.title}</p>
                    </div>
                )
            })}





        </div>
    )
}

export default Modules