const Page =()=>{
    const users = [
        { id: 1, username: "john123", email: "john@gmail.com" },
        { id: 2, username: "alex456", email: "alex@yahoo.com" },
        { id: 3, username: "kate789", email: "kate@gmail.com" }
    ];
    const newArr = users.filter((Users)=>{
        return Users.email.includes("gmail.com")
    })
    return(<div>
        {newArr.map((Users, index)=>{
            return(<div key={index}>{Users.username}</div>)
        })}
    </div>)

}
export default Page