import Sequelize, {Model, Optional} from 'sequelize';
import database from '../database';
import Link from './Link';

interface ILinkCreationAttributes extends Optional<Link, "id">{}
export interface ILinkModel extends Model<ILinkCreationAttributes>, Link {}

const linkModel = database.define<ILinkModel>('link', {
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    url: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    code: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    hits: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0
    }
});

export default linkModel

