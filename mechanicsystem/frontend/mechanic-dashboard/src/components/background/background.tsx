import styles from './background.module.css';

type Props = {
  onSelect: (type: 'client' | 'workorders' | 'mechanic' | null) => void;
};

function Background({ onSelect }: Props) {
  return (
    <main>
      <div className={styles.container}>

        <div className={styles.box} onClick={() => onSelect('client')}>
          <div className={styles.boxImage1}>
            <img
              className={styles.images}
              src="/images/client.png"
              alt="Client"
            />
          </div>
          <span className={styles.fontBackground}>Client</span>
        </div>

        <div className={styles.box} onClick={() => onSelect('workorders')}>
          <div className={styles.boxImage1}>
            <img
              className={styles.images}
              src="/images/workorders.png"
              alt="Workorders"
            />
          </div>
          <span className={styles.fontBackground}>Workorders</span>
        </div>

        <div className={styles.box} onClick={() => onSelect('mechanic')}>
          <div className={styles.boxImage1}>
            <img
              className={styles.images}
              src="/images/mechanic.png"
              alt="Mechanic System"
            />
          </div>
          <span className={styles.fontBackground}>Mechanic System</span>
        </div>

      </div>
    </main>
  );
}

export default Background;
