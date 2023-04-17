import createError from "../utils/createError.js";
import Gig from "../models/gig.model.js";
import Order from "../models/order.model.js";

export const createOrders = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.gigId);

    const newOrder = new Order({
      gigId: gig._id,
      img: gig.cover,
      title: gig.title,
      buyerId: req.userId,
      sellerId: gig.userId,
      price: gig.price,
      payment_intent: "temporary",
    });

    await newOrder.save();
    res.status(200).send("sucessful");
  } catch (err) {
    next(err);
  }
};

export const getOrders = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
