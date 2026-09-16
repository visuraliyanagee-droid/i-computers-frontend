export default function Test() {

    //hook 1

    let count=0;

    return(
        
        <div className="w-full h-150 bg-red-500 flex justify-center items-center">

            <div className="w-100 h-100 bg-blue-700 flex justify-center items-center">

                <button className="w-30 h-10 bg-red-900" onClick={
                    ()=>{
                    console.log("decrement")
                    count=count-1
                    console.log(count)

                }}>Decrement</button><br/>

                  <h1 className="w-10 h-10 text-5 text-center ">{count}</h1>


                <button className="w-30 h-10 bg-blue-900" onClick={
                    ()=>{
                    console.log("increment")
                    count=count+1
                    console.log(count)

                }}>Increment</button>
                
              
            </div>

        </div>

    )
}