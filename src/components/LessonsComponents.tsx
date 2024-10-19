import { useAppSelector } from "../redux/configureStore";



const LessonsComponents = () => {
    const modules: any = useAppSelector(state => state.filteredCourses.course?.modules);
    const moduleTitle = useAppSelector(state => state.filteredCourses.moduleTitle);

    const lessonTitle = useAppSelector(state => state.filteredCourses.lessonTitle);

    const selectedModule = modules.find((mod: any) => mod.title === moduleTitle);

    return(
        <div>
            {selectedModule.lessons.map((less:any, index:number) => {
                if(less.title === lessonTitle) {
                    return (
                        <div key={index}>
                            <div className="text-start pe-4">
                                <p>Title: {less.title}</p>
                                <p>description: {less.description}</p>
                            </div>
                            <div className="row">
                                <div className="col-10 col-sm-5">
                                    <h3 className="text-start">Topics:</h3>
                                    <ol>
                                        {less.topics.map((topic:any, index:number) =>
                                            <div key={index}>
                                                <li className="text-start">{topic}</li>
                                            </div> 
                                        )}

                                    </ol>
                                </div>
                                <div className="col-10 col-sm-5">
                                    <h3>Content</h3>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                            <th scope="col">Type</th>
                                            <th scope="col">Data</th>
                                            </tr>
                                        </thead>
                                        {less.content.map((cn: any, index:number) => {
                                            return (
                                                <tbody>
                                                    <tr key={index}>
                                                    <td className="text-start">{cn.type}</td>
                                                    <td className="text-start">{cn.data}</td>
                                                    </tr>
                                                </tbody>
                                            )
                                        })}
                                    </table>
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default LessonsComponents;