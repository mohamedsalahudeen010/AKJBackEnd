import express from "express"
import obj from "mongodb"
import Order from "../../Model/Order.js";
const objectId = obj.ObjectId;

const router=express.Router();


router.post("/", async (req, res) => {
    try {
      const order = await Order.create(req.body);
      res.status(200).json("Products added Successfully");
    } catch (error) {
      console.log(error);
      res.status(500).json("Server Error");
    }
  });

  router.put("/:id", async (req, res) => {
    
    
    try {
      const order = await Order.findOneAndUpdate(
        { _id: req.params.id },
      { $set: req.body },
      { new: true });
      res.status(200).json("Products Updated Successfully");
    } catch (error) {
      console.log(error);
      res.status(500).json("Server Error");
    }
  });




  router.get("/", async (req, res) => {
    const {query}=req.query
      
      try { 
        let order = await Order.find(query)
        if (!order) {
          res.status(400).json({ message: "can't get the Orders data" });
        }
        res.status(200).json(order);
      } catch (error) {
        console.log(error);
        res.status(500).json("Server Error");
      }
    });

    
 


export const orderRouter=router
