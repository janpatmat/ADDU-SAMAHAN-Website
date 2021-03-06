import React from "react";
import { Navigation, Footer, FAQSection } from "../../ComponentIndex";
import styles from "./RegFAQTemplate.module.scss";
import { regFAQData } from "../../../data/dataIndex";

const RegFAQTemplate = () => {
  return (
    <>
      <Navigation />
      <div className="container">
        <div className={styles["office-of-the-president"]}>
          <FAQSection data={regFAQData} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegFAQTemplate;
