const LGA = require('../model/task')

console.log('jjj')
const getAllLGA = async (req,res) => {
//    res.send('Alll from controller')
   try{
    const task = await LGA.find({}).sort({name: 1})
    res.status(200).json({ task })
    console.log(task)
   }catch(err){
    res.status(500).json({ msg: err})
   }
}

console.log('kkk')
const createLGA = async (req,res) => {
    try{
        const task = await LGA.create(req.body)
        res.status(201).json({task})
        console.log('kkk', task)
    }catch(err){
        res.status(500).json({ msg: err})
        console.log('errrorrrooo', err)
    }
}
console.log('lll')
const getLGA = async (req,res) => {
    try{
        const {id:taskID} = req.params
        const task = await LGA.findOne({_id:taskID})
        if(!task){
            return res.status(404).json({msg: `No task with the id: , ${taskID}`})
        }

        res.status(200).json({task})
    }catch(err){
        res.status(500).json({ msg: err})
    }
}
console.log('mmm')
const updateLGA = async (req,res) =>{
    // res.send('update')
   try{
        const {id:taskID} = req.params
        const task =  await LGA.findOneAndUpdate({_id: taskID}, req.body, {
            new: true,
            runValidators: true,
        })
        if(!task){
            return res.status(404).json({msg: `No task with the id: , ${taskID}`})
        }

        res.status(200).json({task})
        // res.status(200).json({id: taskID, data: req.body})
   }catch(err){
        res.status(500).json({ msg: err})
   }
}
console.log('nnn')
const deleteLGA = async (req,res) => {
    try{
        const {id:taskID} = req.params
        const task = await LGA.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg: `No task with the id: , ${taskID}`})
        }

        res.status(200).json({task})
        // res.status(200).send()
        // res.status(200).json({task: null, status:'success'})

    }catch(err){
        res.status(500).json({ msg: err})
    }
}
console.log('ooo')
module.exports = {
    getAllLGA,
    createLGA,
    getLGA,
    updateLGA,
    deleteLGA
}