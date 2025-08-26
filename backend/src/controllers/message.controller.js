import User from "../models/user.model.js";
import Message from "../models/message.model.js";
import cloudinary from "../lib/cloudinary.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user.id;
        const filteredUsers = await User.find({_id: {$ne:loggedInUserId}}).select("-password");

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.error("Error fetching users for sidebar:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getMessages = async (req, res) => {
    try{
        const { id: userToChatId } = req.params;
        const myId = req.user.id;

        const messages = await Message.find({
            $or:[
                { senderId: myId, reciverId: userToChatId },
                { senderId: userToChatId, reciverId: myId }
            ]
        })

        res.status(200).json(messages);
    } catch(error){
        console.log("Error fetching messages:", error.message);
        res.status(500).json({ message: "Internal server error" } );
    }
};

export const sendMessage = async (req, res) => {
    try{
        const {text, image} = req.body;
        const { id: reciverId } = req.params;
        const senderId = req.user.id;

        let imageUrl;
        if(image){
            const uploadRsponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadRsponse.secure_url;
        }

        const newMessage = new Message({
            senderId,
            reciverId,
            text,
            image: imageUrl
        });

        await newMessage.save();

        //to do real time with web sockets

        res.status(201).json(newMessage);

    } catch(error){
        console.log("Error sending message:", error.message);
        res.status(500).json({ message: "Internal server error" } );
    }
};