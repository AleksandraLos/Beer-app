const BeerList = ({beer}) => {
    return ( <>
    
    {beer.map((beer)=> (
        <div className="row row-cols-1 row-cols-3">
        <div className="card w-25  ">
        <img src={beer.image_url} className="card-img-top" alt=""/>
        <div className="card-body">
          <h5 className="card-title">{beer.name}</h5>
          <p className="list-group-item">Tagline: {beer.tagline}</p>
          <p className="card-text">{beer.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Volume: {beer.volume.value} {beer.volume.unit} </li>
          <li className="list-group-item">First brewed: {beer.first_brewed}</li>
          <li className="list-group-item">Brewers tips: {beer.brewers_tips}</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">Food pairing</a>
          <a href="#" className="card-link">Ingredients</a>
        </div>
      </div>
      </div>
    ))}

    </> );
}
 
export default BeerList;