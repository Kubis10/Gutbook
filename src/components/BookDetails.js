const Book = (props) => {  

  let hero = "https://dummyimage.com/300/09f.png/fff";
  props = props.props;
  if(props.resources == undefined){
    return(
      <div className="bookDetails">
        <div className="info">
          <h1>Loading...</h1>
        </div>
      </div>
    )
  }
  else{
    if(props.resources.length) {
      for (let i = 0; i < props.resources.length; i++) {
        if (props.resources[i].type === "image/jpeg") {
          if (props.resources[i].uri.endsWith("cover.medium.jpg")) {
            hero = props.resources[i].uri;
          }
        }
      }
    }
    console.log(props);
  
    return (
      <div className="bookDetails">
        <div className="image-container">
          <img src={hero} alt="Cover" />
        </div>
        <div className="info">
          <h1>{props.title}</h1>
          <h2>{
          props.agents.map((agent) => agent.person).join(", ")
          }</h2>
          <h2>{props.bookshelves.map((bookshelf) => bookshelf).join(", ")}</h2>
          <p>{props.description}</p>
            <ul>
              {
                props.resources.map((resource) => resource.uri).join(", ")
              }
            </ul>
        </div>
      </div>
    );
  }
};

export default Book;
