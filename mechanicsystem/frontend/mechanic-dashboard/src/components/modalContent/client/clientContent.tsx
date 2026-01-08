import styles from './clientContent.module.css';


function ClientContent() {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Client System Modal Content</h2>
      <div className={styles.boxContent}>
        <p>Client registration form will go here.</p>
      </div>
      <div className={styles.boxContent}>
        <p>Client registration form will go here.</p>
      </div>
      <div className={styles.boxContent}>
        <p>Client registration form will go here.</p>
      </div>
    </div>
  );
}

export default ClientContent;