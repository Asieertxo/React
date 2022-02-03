import "./Item.scss"

function Item(props){/*Item({ item })*//*Tambien puede ser asi*/
  const item = props.item;/*Recibimos los datos*/

  const pointsStyle = {/*Ponemos estilos a points*/
    color: "green",
    fontSize: "20px"
  }
    return(
      <>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span className="item-author">{item.author}</span>
        <span>{item.num_comments}</span>
        <span style={pointsStyle}>{item.points}</span>
      </>  
    )
  }

export default Item;