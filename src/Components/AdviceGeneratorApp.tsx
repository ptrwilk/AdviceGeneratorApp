import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import styles from "./styles.module.css";
import PatternDividerMobile from "../assets/pattern-divider-mobile.svg";
import PatternDividerDesktop from "../assets/pattern-divider-desktop.svg";
import IconDice from "../assets/icon-dice.svg";
import axios from "axios";
import { useEffect, useState } from "react";

type Slip = { id: number; advice: string };

const AdviceGeneratorApp = () => {
  const isLarge = useMediaQuery("(min-width : 520px)");
  const [advice, setAdvice] = useState<Slip | undefined>(undefined);

  useEffect(() => {
    axios.get("https://api.adviceslip.com/advice/117").then((x) => {
      setAdvice(x.data.slip);
    });
  }, []);

  const generateAdvice = () => {
    const randomNum = Math.floor(Math.random() * 220) + 1;

    axios.get(`https://api.adviceslip.com/advice/${randomNum}`).then((x) => {
      setAdvice(x.data.slip);
    });
  };

  return (
    <>
      {advice && (
        <Box className={styles["container"]}>
          <Typography className={styles["advice"]}>
            Advice #{advice.id}
          </Typography>
          <Typography className={styles["text"]}>{advice.advice}</Typography>
          <img
            className={styles["img-pattern"]}
            src={isLarge ? PatternDividerDesktop : PatternDividerMobile}
          />
          <IconButton className={styles["btn-dice"]} onClick={generateAdvice}>
            <img className={styles["img-dice"]} src={IconDice} />
          </IconButton>
        </Box>
      )}
    </>
  );
};

export default AdviceGeneratorApp;
