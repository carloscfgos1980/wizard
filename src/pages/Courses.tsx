import CoursesComoponent from "../components/CoursesComoponent";


const Courses = () => {


    return (
        <div className="container-md p-5 w-75">
            <button className="btn btn-warning float-end" style={{ width: "300px"}}>Click the modulo button for details</button>
            <CoursesComoponent/>
        </div>
    )
}

export default Courses;