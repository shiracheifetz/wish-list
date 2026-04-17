import ListItem from './ListItem';

function List(props) {
    return(
        <main>
            <h4>My Wish List:</h4>
            <div className="wish-list">
                <ul>
                    {props.items.map((item) => (
                        <ListItem listItem={item}/>
                    ))}
                </ul>
            </div>
            
        </main>
    )
}

export default List

