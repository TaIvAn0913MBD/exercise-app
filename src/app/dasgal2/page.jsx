const Page = ()=>{
    const people = [
        { name: "Alice", age: 17 },
        { name: "Bob", age: 25 },
        { name: "Charlie", age: 19 },
        { name: "David", age: 16 }
      ];
    const olderThan18 = people.filter((person)=>{
        return person.age>18;
    })
    return(
        <div>
            <div>{olderThan18.map((person, index)=>{
                return(<div key={index}>
                    {person.name.toUpperCase()}</div>)
            })}</div>
        </div>
    )
}
export default Page