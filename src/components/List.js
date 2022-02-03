import Item from "./Item";

const list = [
  {
    title : 'React',
    url:'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    ObjectID: 0,
  },
  {
    title : 'Redux',
    url:'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    ObjectID: 1,
  }
];

function List({searchTerm}) {
  return (
    <ul>
      {list.filter(item => item.title.toLowerCase().includes(searchTerm)).map(function (item) {
        return (/*Le pasamos el objeto item al componente*/
          <li key={item.ObjectID}>
            <Item item={item}/>
          </li>
        );
      })}
    </ul>
  );
}

export default List;





//Otra forma de hacerlo sin usar el map, poner nombre abajo y listo

/*const items = [];
for (const item of list){
  items.push(
    <li key={item.ObjectID}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </li>
  )
}*/