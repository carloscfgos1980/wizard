


const FormSelect = ({items, getTitle}:any) => {
    console.log('items',items)
    return (
    <select
      className="form-select"
      aria-label="Default select example"
      defaultValue={"DEFAULT"}
      onChange={(e) => getTitle(e.target.value)}
    >
      <option value="DEFAULT" disabled>
        Open this select menu
      </option>
      {items.map((item: any, index: number) => {
        return (
          <option value={item.title} key={index}>
            {item.title}
          </option>
        );
      })}
    </select>
    )
}

export default FormSelect;