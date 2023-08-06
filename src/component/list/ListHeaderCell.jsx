import styles from "./ListHeaderCell.module.css";

const ListHeaderCell = ({ children,currency }) => {
  return <th className={styles.cell}>{children}
  {currency !== "CUR" && <div className="currency">{currency}</div>}
  </th>;

};

export default ListHeaderCell;