import React from 'react';
import styles from './Card.module.css';
function Card(props) {
  const str = props.title;
  return (
    <div className={styles.card} onClick={()=>props.click(props.title)}>
        <h2>{str.charAt(0).toUpperCase() + str.slice(1)}</h2>
        <p>Unlimited Jokes On {str.charAt(0).toUpperCase() + str.slice(1)}</p>
    </div>
  )
}

export default Card