


const FormSelect1 = ({items, getLesson}:any) => {
    console.log('items',items.lessons)
    return (
    <select
      className="form-select"
      aria-label="Default select example"
      defaultValue={"DEFAULT"}
      onChange={(e) => getLesson(e.target.value)}
    >
      <option value="DEFAULT" disabled>
        Open this select menu
      </option>
      {items.lessons.map((item: any, index: number) => {
        return (
          <option value={item.title} key={index}>
            {item.title}
          </option>
        );
      })}
    </select>
    )
}

export default FormSelect1;