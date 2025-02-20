import StarshipCard from "./StarshipCard"

const StarshipList = (props) => {

    let display =''
    if(props.search){
       let filterArr= props.starships.filter((s)=>{

            return props.search ===s.name

        })
       display=<div>{<StarshipCard starship={filterArr[0]} />}</div>
    }
    else{
        display= <div>
        <p>  Number of results: {props.starships.length}</p>
    {props.starships.map((starship) => (
        <StarshipCard starship={starship} />
    ))} 
       </div>

    }


    return (
        <>
            <h3>Starship List</h3>
            {props.starships ? (
                <>
                    {props.starships ?(display):('loading..')}
                </>
            ) : (
                'loading...'
            )}
        </>
    );



}

export default StarshipList