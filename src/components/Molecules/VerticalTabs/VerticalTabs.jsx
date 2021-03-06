import React from "react";
import { Tabpanel } from "../../ComponentIndex";
import { Tabs, Tab, Box } from "@mui/material";
import styles from "./VerticalTabs.module.scss";
import Typography from "@mui/material/Typography";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import useMediaQuery from "@mui/material/useMediaQuery";

const VerticalTabs = ({ data }) => {
  const [value, setValue] = React.useState(0);
  const isSmall = useMediaQuery("(max-width:992px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={styles["background"]}>
      <div className={styles["outerBox"] + " container"}>
        <Bounce>
          <h1 className={styles["header"]}>
            ADVOCA<span className={styles["six"]}>SIX</span>
          </h1>
          <div className={styles["description-container"]}>
            <h1 className={styles["description"]}>{data.description}</h1>
          </div>
        </Bounce>
        <Slide bottom>
          <div className={styles["vertical-contents"]}>
            <div className={styles["outerTab"]}>
              <Tabs
                orientation={isSmall ? "horizontal" : "vertical"}
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                textColor="primary"
                TabIndicatorProps={{
                  style: { background: "#f0ae02" },
                }}
                sx={{ borderRight: 2, borderColor: "divider" }}
              >
                {data.items.map((item, index) => (
                  <Tab
                    key={index}
                    label={
                      <span className={styles["tab-labels"]}>
                        {item.heading}
                      </span>
                    }
                    sx={{ color: "white" }}
                  />
                ))}
              </Tabs>
            </div>
            <div>
              {data.items.map((item, index) => {
                return (
                  <Tabpanel
                    key={index}
                    value={value}
                    subHeading={item.subHeading}
                    index={index}
                  >
                    {item.desc}
                  </Tabpanel>
                );
              })}
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default VerticalTabs;
