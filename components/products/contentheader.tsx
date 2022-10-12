import React from "react";
import { Button } from "react-bootstrap";
import styles from "styles/new-product.module.scss";

interface ContentHeaderProps {
  title?: string;
  onClickNext?: () => void;
}

const ContentHeader = ({ title, onClickNext }: ContentHeaderProps) => {
  return (
    <div className={styles.header}>
      <div className={styles.headertitle}>
        <h1>{title}</h1>
      </div>
      <div>
        <Button onClick={onClickNext} className={styles.btn}>
          Next
        </Button>
      </div>
    </div>
  );
};
export default ContentHeader;
