import styles from "./Statistics.module.css";

const Statistics = () => {
  return (
    <div className={styles.mainWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableHeaderCell}>Repos</th>
            <th className={styles.tableHeaderCell}>Followers</th>
            <th className={styles.tableHeaderCell}>Following</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.tableDataCell}>8</td>
            <td className={styles.tableDataCell}>4280</td>
            <td className={styles.tableDataCell}>32</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
