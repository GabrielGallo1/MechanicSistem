import styles from './clientContent.module.css';


function ClientContent() {
  return (
    <div className={styles.container}>
      <div className={styles.boxContent}>
        <div className={styles.boxTitle}>
          <h2 className={styles.h2}>Client System Modal Content</h2>
        </div>
        <div className={styles.boxForms}>
          <div className={styles.boxLabel}>
            <label className={styles.label}> 
              <p>dale</p>
            </label>
            <label className={styles.label}> 
              <p>dale</p>
            </label>
          </div>
          <div className={styles.boxInput}>
            <input className={styles.inputLarge1} type="text" placeholder="Name" />
            <input className={styles.inputSmall1} type="text" placeholder="Adress" />
          </div>
        </div>
        <div className={styles.boxForms}>
          <div className={styles.boxLabel}>
            <label className={styles.label}> 
              <p>dale</p>
            </label>
            <label className={styles.label}> 
              <p>dale</p>
            </label>
          </div>
          <div className={styles.boxInput}>
            <input className={styles.inputLarge2} type="text" placeholder="Phone" />
            <input className={styles.inputSmall2} type="text" placeholder="Document" />
          </div>
        </div>
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