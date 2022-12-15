import React, { useEffect, useState } from "react";
import moment from "moment";

import { labelsTable, users } from "../../data";
import Row from "./Row/Row";
import s from "./Table.module.scss";

const column = users.length;

const Table = () => {
  const initialTimer = 120000;
  const [timer, setTimer] = useState(initialTimer);
  const [userTimer, setUserTimer] = useState(0);

  const isUser = !!column;

  if (timer < 0) {
    setTimer(initialTimer);
    if (isUser) {
      setUserTimer((prev) => {
        return prev === column - 1 ? 0 : prev + 1;
      });
    }
  }

  useEffect(() => {
    const time = setInterval(() => {
      setTimer((prev) => prev - 1000);
    }, 1000);

    return () => clearInterval(time);
  }, [timer]);

  return (
    <div className={s.table}>
      {labelsTable.map((label) => {
        return (
          <Row
            key={label[0]}
            title={label[1]}
            label={label[0]}
            timer={moment(timer).format("mm:ss")}
            userTimer={userTimer}
          />
        );
      })}
    </div>
  );
};

export default Table;
