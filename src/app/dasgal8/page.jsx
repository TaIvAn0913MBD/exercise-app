import { TRACE_OUTPUT_VERSION } from "next/dist/shared/lib/constants";

const Page =()=>{
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const newArr = numbers.filter((numbers)=>{
        return numbers%2==0
    })
return(<div>
    {newArr.map((number, index)=>{
        return(<div key={index}>{number*number}</div>)
    })}
</div>)
}
export default Page