const express = require("express");
const router = express.Router();
 
const food = require("./schema");
const { default: mongoose } = require("mongoose");
router.use(express.json());

router.post('/foods',async(req,res)=>{
    try {
        console.log(req.body)
        const {userId,mood,foods,votes,comments} = req.body;
        if(!userId || !foods|| !mood || !votes || !comments){
            return res.status(400).send({msg:"All fields are required"});
        }
        const com=[];
        com.push(comments);
        const foodData = new food({userId,mood,foods,votes,comments:com});
        await foodData.save();
        return res.status(200).send({msg:"Data created successfully",foodData});
    } catch (error) {
        console.log(error);

        return res.status(500).send({msg:"Something went wrong",error});
        
    }
});

router.get('/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        if(!id){
            return res.status(400).send({msg:"Please provide Food-Data id"});

        }
        const mood = await food.find({userId:id});
        
        return res.status(200).send({msg:"Food-Data retrieved successfully",mood});
    } catch (error) {
        res.status(500).send({msg:"Something went wrong",error});
        console.log(error);
    }
})

router.put('/foods/:id', async (req, res) => {
    try {
        const {mood,foods,votes,comments} = req.body;
        if (!mood || !foods || !comments || !votes) {
            return res.status(400).send({ msg: "All fields are required for update" });
        }
        const updatedFood = await food.findByIdAndUpdate(
            req.params.id,
            {mood,foods,votes,comments }
        );
        if (!updatedFood) {
            return res.status(404).send({ msg: "Food not found" });
        }

        res.status(200).send({ msg: "Food updated successfully", updatedFood });
    } catch (error) {
        res.status(500).send({ msg: "Something went wrong", error });
        console.error(error);
    }
});

router.delete('/foods/:id', async (req, res) => {
    try {
        const deletedFood = await food.findByIdAndDelete(req.params.id);

        if (!deletedFood) {
            return res.status(404).send({ msg: "Food not found" });
        }

        res.status(200).send({ msg: "Food deleted successfully"});
    } catch (error) {
        res.status(500).send({ msg: "Something went wrong", error });
        console.error(error);
    }
});
  




module.exports = router