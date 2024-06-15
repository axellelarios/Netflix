

function List(props) {
    const {movieImage} = props; 
    return (
        <div class="card carroussel">
            {movieImage.images.map(image => {
                return (
                    <div  class="card-item">
                        <img src={image}/> 
                    </div>  
                ); 
            })}
        </div>
    );

  }
  
  export default List
