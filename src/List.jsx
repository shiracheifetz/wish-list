import ListItem from './ListItem';

function List(props) {
    return(
        <main>
            <h4 className="my-wish-list">My Wish List:</h4>
            <div className="wish-list">
                <ul>
                    {props.items.map((item) => (
                        <ListItem key={item.id} listItem={item}/>
                    ))}
                </ul>
            </div>
            
        </main>
    )
}

export default List

