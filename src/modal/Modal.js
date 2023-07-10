import { useEffect, useState, useCallback } from 'react'
import styles from './Modal.module.css';
import { ClipLoader } from 'react-spinners';
import { RiCloseLine } from "react-icons/ri";
function Modal(props) {
    const [joke, setJoke] = useState (" ")
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const str = props.category;

    const getJoke = useCallback(
        async () => {
            console.log("Hello");
            try {
                setLoading(true);
                const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${props.category}`);
                const data = await response.json();
                setJoke(data.value);
                setLoading(false);
            } catch (error) {
                setError("Could'nt get your joke, Please try again later 😢");
            }
        },
        [props, setJoke, setError],
    )
    function closeModal(){
        setJoke(" ");
        props.close();
    }
    //Initial Joke Rendering
    useEffect(function () {
        getJoke();
    }, [getJoke,props.category]);

    return (
        <>
            {!error &&
                <div className={styles['modal-content']}>
                    <RiCloseLine onClick={()=>closeModal()} className={styles['close-btn']} />
                    <h2>{str.charAt(0).toUpperCase() + str.slice(1)}</h2>
                    <div className={styles['inner-content']}>
                        {loading && 
                        <div><ClipLoader className={styles['loader']} size={65} color="#36d7b7" /></div>
                        } 
                        {!loading && !error && <p>{joke}</p>} 
                        <button onClick={() => getJoke()}>Next Joke</button>
                    </div>
                </div>
            }
        </>        
    )
}          
                                

            
export default Modal;                