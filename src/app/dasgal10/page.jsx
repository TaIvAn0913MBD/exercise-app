const Page = ()=>{
    const movies = [
        { title: "Movie A", rating: 6.8 },
        { title: "Movie B", rating: 7.5 },
        { title: "Movie C", rating: 8.2 },
        { title: "Movie D", rating: 5.5 }
    ];
    const newArr = movies.filter((films)=>{
        return films.rating > 7
    })
    let dundaj = 0;
    newArr.map((films)=>{
        return dundaj = dundaj + films.rating;
    })
    return(<div>{dundaj/newArr.length}</div>)
}
export default Page