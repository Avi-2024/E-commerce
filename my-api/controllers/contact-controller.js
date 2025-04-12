import { contactModel } from "../models/contact-model.js";
export const contactForm = async (req,res) =>{
    try {
        const response = req.body;
        await contactModel.create(response);
        res.status(200).json({msg: "Contact form submitted Successfully"});
    } catch (error) {
        return res.status(500).json({msg:"Internal Server Error"});
    }
}