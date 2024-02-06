import { poeple } from "./data";
import { getImageUrl } from "./utils";

export default function List() {
  const listItems = poeple.map(
    item => (
      <li key={item.id} >
        <img src={getImageUrl(item)}
          alt={item.id} />
        <p>
          <b>{item.name}:</b><br/>
          {' ' + item.profession + ' '}
          known for {item.accomplishment}
        </p>
      </li>
    )
  )

  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  )
}