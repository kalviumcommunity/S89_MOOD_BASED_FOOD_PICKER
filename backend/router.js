const express = require("express");
const router = express.Router();
 
const food = require("./schema");
const { default: mongoose } = require("mongoose");
router.use(express.json());

router.post('/foods',async(req,res)=>{
    try {
        const {mood,foods} = req.body;
        if(!mood || !foods){
            res.status(400).send({msg:"All fields are required"});
        }
        const foodData = new food({mood,foods});
        await foodData.save();
        res.status(200).send({msg:"Data created successfully",foodData});
    } catch (error) {
        res.status(500).send({msg:"Something went wrong",error});
        console.log(error);
    }
});

router.get('/foods',async(req,res)=>{
    try {
        const mood = await food.find();
        
        res.status(200).send({msg:"Data retrieved successfully",mood});
    } catch (error) {
        res.status(500).send({msg:"Something went wrong",error});
        console.log(error);
    }
})

router.put('/foods/:id', async (req, res) => {
    try {
        const {mood,foods} = req.body;
        if (!mood || !foods) {
            return res.status(400).send({ msg: "All fields are required for update" });
        }
        const updatedFood = await food.findByIdAndUpdate(
            req.params.id,
            { mood,foods }
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