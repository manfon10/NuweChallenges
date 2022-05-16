import styles from './App.module.css';
import { Comets, Numbers, InformationPage, Venus } from './components';

function App() {
  return (
    <>
      <section className={styles.info}>
        <InformationPage />
      </section>
      <section className={styles.container}>
        <Comets 
          style={styles.cometTwo} 
        />
        <Numbers style={styles} />
        <Venus 
          style={styles.venus} 
        />
      </section>
    </>
  );
}

export default App;
