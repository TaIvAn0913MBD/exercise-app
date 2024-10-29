const Page = ()=>{
    const employees = [
        { name: "John", salary: 60000 },
        { name: "Jane", salary: 45000 },
        { name: "Alex", salary: 75000 },
        { name: "Linda", salary: 30000 }
    ];
    const newArr = employees.filter((workers)=>{
        return workers.salary>50000;
    })
    return(
        <div>
            <div>{newArr.map((item, index)=>{
                return(<div key={index}>
                    {item.name.toUpperCase()}</div>)
            })}</div>
        </div>
    )
}
export default Page