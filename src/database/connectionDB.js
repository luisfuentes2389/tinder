import { sequelize } from "sequelize";

const sequelize = new sequelize(process.env.POSTGRES_URL);

export { sequelize };
