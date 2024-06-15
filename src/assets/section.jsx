import List from './list'

function Section(props) {
    const {movieList} = props;
    return ( 
        <div class="container">
            {movieList.map(categories => {
                <section class="movies-section">
                            <h2>{categories.category}</h2>
                            <List/>
                </section>
            })}
        </div>
    );
  }
  
  export default Section
