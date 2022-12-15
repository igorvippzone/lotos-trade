import React from "react";
import moment from "moment/moment";

import Table from "./components/Table/Table";
import s from "./App.module.scss";

const App = () => {
  return (
    <>
      <header className={s.header}>
        Ход торгов
        <span>
          Тестовые торги на аппарат ЛОТОС №200023 (
          {moment().format("DD.MM.YYYY HH:mm")})
        </span>
      </header>
      <hr />
      <p className={s.description}>
        Уважаемые участники, во время вашего хода вы можете изменить параметры
        торгов, указанных в таблице:
      </p>
      <Table />
    </>
  );
};

export default App;
