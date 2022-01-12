function Item(props){
  const item = props.item;/*Recibimos los datos*/
    return(
      <>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
    </>  
  )
    
}

export default Item;