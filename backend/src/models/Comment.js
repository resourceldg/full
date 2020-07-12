export default(sequelize,{BOOLEAN, DATE, STRING,TEXT, UUID, UUIDV4})=>{
    const Comment = sequelize.define('Comment',{
        id:{
            primaryKey:true,
            allowNull: false,
            type:UUID,
            defaultValue: UUIDV4()
        },
        body:{
            type:TEXT,
            allowNull:false
        },
        published:{
            type:BOOLEAN,
            defaultValue:false
        },
        createdAt:{
            type:DATE

        },
        updatedAt:{
            type:DATE
        }
    })
    return Comment
}