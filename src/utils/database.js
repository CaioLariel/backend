import mongoose from 'mongoose'

const URL = 'mongodb+srv://admin:fbKzhtcRPt4kRT6A@cluster0.xwctpqj.mongodb.net/?retryWrites=true&w=majority'

const databaseConnection = async () => {
    if (!global.mongoose) {
        //função deixar de existir
        mongoose.set('strictQuery', false)
        global.mongoose = await mongoose.connect(URL)
    }
}

export default databaseConnection