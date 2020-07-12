//dependencias
import Sequelize from 'sequelize'

//configuraciones
import {$db} from '../../config'

//db conexion
const { database, username, password, dialect}= $db()

const sequelize = new Sequelize(database,username,password,{
    dialect,
    define:{
        underscored:true
    }
})

//modelos
const models = {
    Post: sequelize.import('./Post'),
    Tag: sequelize.import('./Tag'),
    User: sequelize.import('./User'),
    Comment: sequelize.import('./Comment')
}

Object.keys(models).forEach(modelName=>{
    if('associate' in models[modelName]){
        models[modelName].associate(models)
    }
})

models.sequelize = sequelize

export default models