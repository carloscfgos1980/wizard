import { useAppDispatch, useAppSelector } from "../redux/configureStore";
import { addCourseId } from "../redux/filteredCourses";
import Details from "./Details";


const CoursesComoponent = () => {
    const {courseId} = useAppSelector(state => state.filteredCourses)
    const dispatch = useAppDispatch();

    const courses = useAppSelector(state => state.filteredCourses.courses);

    const selectedCourse = courses.find((course:any) => course.id === courseId);


    const getLessonId = (id: number) => {
        dispatch(addCourseId(id))

    }


    return (
        <div>
            <div className="row justify-contenr-center align-content-center">
                <div className="courses col-sm-3">
                    <h1 className="dislpay">Courses</h1>
                    {courses &&                     <ol className="ps-5">
                        {courses.map((course:any) => {
                            return (
                                <div key={course.id}>
                                    <li className="text-start" role="button" onClick={() => getLessonId(course.id)}>{course.title}</li>
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