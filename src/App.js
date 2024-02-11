import { useState } from "react";
import { poeple } from "./data";
import { getImageUrl } from "./utils";

export default function Form() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing')

  if (status === 'success') {
    return <h1>That's right</h1>
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting')
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  function submitForm(answer) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let shouldError = answer.toLowerCase() !== 'lima';
        if (shouldError) {
          reject(new Error('wrong anser'));
        } else {
          resolve();
        }
      }, 1500)
    })
  }


  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is tere a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button disabled={answer.length === 0 || status === 'submitting'}>Submit</button>
        {error !== null && <p className="Error">{error.message}</p>}
      </form>
    </>
  )
}


function List() {
  const listItems = poeple.map(
    item => (
      <li key={item.id} >
        <img src={getImageUrl(item)}
          alt={item.id} />
        <p>
          <b>{item.name}:</b><br />
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