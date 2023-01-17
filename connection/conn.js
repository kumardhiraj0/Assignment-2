const mongoose=require('mongoose');
mongoose.set('strictQuery', false)
async function getConnection() {
    await mongoose.connect('mongodb://0.0.0.0/assignment');
}
module.exports= getConnection