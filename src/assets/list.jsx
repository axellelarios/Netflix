

function List() {
    return (
        <div class="card carroussel">
            {categories.images.map(image => {
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
