import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/configureStore";
import { addCourseId} from "../redux/filteredCourses";



const CoursesComoponent = () => {
    const [selectedId, setselectedId] = useState<number>(0)
    const {courseId} = useAppSelector(state => state.filteredCourses)
    const dispatch = useAppDispatch();
    const courses = useAppSelector(state => state.filteredCourses.courses);

    const selectedCourse = courses.find((course:any) => course.id === courseId);

    const getLessonId = (id: number) => {
        dispatch(addCourseId(id));
        setselectedId(id);
    }

    const color = (id:number) => {
        if(selectedId === id){
            return "orange"
        }
    }

    return (
        <div className="py-5">
            <div className="row justify-contenr-center align-content-center">
                <div className="courses col-sm-3">
                    <h1 className="dislpay">Courses</h1>
                    {courses &&                     <ol className="ps-5">
                        {courses.map((course:any) => {
                            return (
                                <div key={course.id}>
                                    <li className="text-start" style={{backgroundColor: color(course.id)}} role="button" onClick={() => getLessonId(course.id)}>{course.title}</li>
                                </div>
                            )
                        })}
                    </ol>}
                </div>
                <div className="details col-sm-4">
                    <h1>Details</h1>
                    <p>{selectedCourse?.title}</p>
                </div>
            </div>
        </div>
    )
}

export default CoursesComoponent;