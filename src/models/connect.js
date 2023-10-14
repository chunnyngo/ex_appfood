import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("app_food", "root", "1234", {
  dialect: "mysql",
  host: "localhost",
  port: "3306",
});
// yarn sequelize-auto -h localhost -d app_food -u root -x 1234 -p 3306 --dialect mysql -o ./src/models -l esm
