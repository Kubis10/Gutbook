const Book = (props) => {  

  let hero = "https://dummyimage.com/300/09f.png/fff";
  props = props.props;
  let res = props.formats;
  if(res == undefined){
    return(
      <div className="bookDetails">
        <div className="info">
          <h1>Loading...</h1>
        </div>
      </div>
    )
  }
  else{
      for (var key in res) {
        if (key === "image/jpeg") {
          if (res[key].endsWith("cover.medium.jpg")) {
            hero = res[key];
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
          props.authors.map((agent) => agent.name).join(", ")
          }</h2>
          <p>{props.description}</p>
          <p>You can view this book in one of following ways:</p>
            <ul>
              {
                Object.entries(res).map(([type, url]) => 
                {
                  if(type !== "image/jpeg"){
                    return (
                      <li key={type}>
                        <a href={url}>{type}</a>
                      </li>
                    )
                  }
                }
                )
              }
            </ul>
        </div>
      </div>
    );
  }
};

export default Book;
