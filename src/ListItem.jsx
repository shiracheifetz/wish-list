function ListItem(props) {
    return(
        <li key={props.id}>{props.listItem.value}</li>
    )
}

export default ListItem