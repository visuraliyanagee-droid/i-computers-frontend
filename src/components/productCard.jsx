export default function ProductCard(props){

    console.log(props.name);
    return(
        <div>
            <h1>{props.name}</h1>
            <img src="https://picsum.photos/id/237/200/300"   /><br/>
            <img src="https://picsum.photos/seed/picsum/200/300" />

            <p>price LKR:{props.price}</p>
        </div>
        
    );
}
