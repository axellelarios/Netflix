
function Section(props) {
    const {data} = props;
    return ( 
        <div class="container">
            {data.map(categories => {
                <section class="movies-section">
                            <h2>{categories.category}</h2>
                            <List/>
                </section>
            })}
        </div>
    );

  }
  
  export default Section
