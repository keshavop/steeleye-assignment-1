import styles from "./ListRow.module.css";

const ListCell = ({ children,showdata,data }) => {

  return <tr className={styles.cell} onClick={()=>{showdata(data)}}>{children}</tr>;
};

export default ListCell;