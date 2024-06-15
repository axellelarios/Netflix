import List from './List'

function Section(props) {
    const {movieList} = props; 
    return ( 
        <div class="container">
            {movieList.map(categories => {
                return(
                    <section class="movies-section">
                                <h2>{categories.category}</h2>
                                <List movieImage= {categories} />
                    </section> 
                );
            })}
        </div> 
    );
  }
  
  export default Section
