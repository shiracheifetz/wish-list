import { ListItem } from './ListItem';

export function List(props) {
    const firstItem = props.items[0];
    return(
        <main>
            <h4>My Wish List</h4>
            <div className="wish-list">
                <ul>
                    {props.items.forEach((item) => (
                        <ListItem listItem={item}/>
                    ))}
                </ul>
            </div>
            
        </main>
    )
}

