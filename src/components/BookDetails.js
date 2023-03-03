const Book = (props) => {  

  let hero = "https://dummyimage.com/300/09f.png/fff";
  props = props.props;
  console.log(props);

  return (
    <div className="book">
      <div className="image-container">
        <img src={hero} alt="Cover" />
      </div>
    </div>
  );
};

export default Book;
