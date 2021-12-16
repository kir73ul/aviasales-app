import styles from "./tickets-list.module.scss";

interface NoElemsTypes { isTrue: boolean }

export const NoElems = ({ isTrue }: NoElemsTypes) => {
  return isTrue ? <div className={styles.error}>Sorry! No flights</div> : null;
}
