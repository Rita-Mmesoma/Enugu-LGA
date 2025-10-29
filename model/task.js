const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxLength: [20, 'name can no be more than 20 characters']
    },
    price: {
        type: Number,
        //required: [true, 'must provide price'],
        trim: true,
        maxLength: [20, 'price can no be more than 20 characters']
    },
    quantity: {
        type: Number,
        //required: [true, 'must provide quantity'],
        trim: true,
        maxLength: [20, 'quantity can no be more than 20 characters']
    },
    // completed: {
    //     type:Boolean,
    //     default: false,
    // },
})

module.exports = mongoose.model('LGA', taskSchema)