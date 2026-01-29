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
              <p>Name</p>
            </label>
            <label className={styles.label}> 
              <p>Address</p>
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
              <p>Phone</p>
            </label>
            <label className={styles.label}> 
              <p>Document</p>
            </label>
          </div>
          <div className={styles.boxInput}>
            <input className={styles.inputLarge2} type="text" placeholder="Phone" />
            <input className={styles.inputSmall2} type="text" placeholder="Document" />
            <input className={styles.checkbox} type="checkbox" />
          </div>
        </div>
      </div>
      <div className={styles.lineBreak}/>
      <div className={styles.boxContent}>
        <div className={styles.boxTitle}>
          <h2 className={styles.h2}>Register Vehicle</h2>
        </div>
        <div className={styles.boxFormsRv}>
          <div className={styles.boxForms01}>
            <input className={styles.inputMedium} type="text" placeholder="Vehicle Brand" />
            <input className={styles.inputMediumLarge} type="text" placeholder="Vehicle Model" />
            <input className={styles.inputMedium} type="date" placeholder="Vehicle year" />
          </div>
          <div className={styles.boxForms02}>
            <input className={styles.inputMedium} type="text" placeholder="Car license plate" />
            <input className={styles.inputMediumLarge} type="text" placeholder="Document client" />
          </div>
        </div>
      </div>
      <div className={styles.lineBreak}/>
      <div className={styles.boxContent}>
        <p>Client registration form will go here.</p>
      </div>
    </div>


    // crie rotas de componentes para cada parte do formulario de cliente e veiculo e pra o modal completo
  );
}

export default ClientContent;