import databaseConection from '../utils/database'
import User from '../models/user'



export const listUsers = async () => {
    await databaseConection()
    //aplicar o middware depois
    const users = await User.find()
    return users
}


export const createUser = async (user) =>{
    await databaseConection()
    const createdUser = await User.create(user)
    return createdUser
   
}

