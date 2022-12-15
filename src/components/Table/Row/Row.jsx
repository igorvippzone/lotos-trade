import React from "react";
import { GiSandsOfTime } from "react-icons/gi";
import { users } from "../../../data";
import s from "./Row.module.scss";

const Row = ({ label, title, timer, userTimer }) => {
  const column = users.length;
  let styleRow = s.rowBody;

  if (label === "step" || label === "name") {
    styleRow = s.rowHeader;
  }

  return (
    <div
      className={styleRow}
      style={{ gridTemplateColumns: `500px repeat(${column || 1},1fr)` }}
    >
      <div className={s.title}>{title}</div>

      {users.map((user, index) => {
        if (label === "step") {
          let counter = null;
          let currentUser = false;
          if (userTimer === index) {
            counter = timer;
            currentUser = true;
            return (
              <div className={s.timer} key={index}>
                <span>{counter}</span>
                <GiSandsOfTime />
              </div>
            );
          }
        }

        if (label === "cost") {
          return (
            <div className={s.center} key={index}>
              <div className={s.currentPrice}>
                {user.cost.currentPrice} руб.
              </div>
              <div className={s.tax}>{user.cost.tax} руб.</div>
              <div className={s.futurePrice}>{user.cost.futurePrice} руб.</div>
            </div>
          );
        } else if (label === "paymentPercent") {
          return (
            <div className={s.center} key={index}>
              {`${user[label]}% `}
            </div>
          );
        } else {
          return (
            <div className={s.center} key={index}>
              {user[label]}
            </div>
          );
        }
      })}
    </div>
  );
};

export default Row;
