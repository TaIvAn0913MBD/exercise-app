const Page = ()=>{
    const names = ["John", "Rebecca", "Sam", "Alexander", "Kate"];
    const newArr = names.filter((names)=>{
        return names.length > 5;
    })
    return(<div>
        {newArr.map((name, index)=>{
            return (<div key={ index}>{name}</div>)
        })}
    </div>)
}
export default Page