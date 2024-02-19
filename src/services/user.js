import databaseConnection from '../utils/database'
import User from '../models/user'



export const listUsers = async () => {
    await databaseConnection()
    //aplicar o middware depois
    const users = await User.find()
    return users
}


export const createUser = async (user) =>{
    await databaseConnection()
    const createdUser = await User.create(user)
    return createdUser
   
}

