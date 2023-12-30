import styles from './page.module.css'

interface CounterProps {
    header: string;
    counter: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
    message: string;
    btnMessage: string;
}

export default function Counter(props: CounterProps) {
    return(
      <>
        {/* <h2>{props.header}</h2> */}
        <div className={styles.description}>
          <p>
            {props.message}
          </p>
           <button onClick={() => props.setCounter(props.counter +1)}>{props.btnMessage}</button>
          <p>{props.counter}</p>
        </div>
      </>    
    )
}