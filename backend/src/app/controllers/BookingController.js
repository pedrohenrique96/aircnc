const Spot = require("../models/Spot");
const User = require("../models/User");
const Booking = require("../models/Booking");

class BookingController {
  async store(req, res) {
    const { user_id } = req.headers;
    const { spot_id } = req.params;
    const { date } = req.body;

    const booking = await Booking.create({
      user: user_id,
      spot: spot_id,
      date
    });

    await booking
      .populate("spot")
      .populate("user")
      .execPopulate();
      
      const awnerSocket = req.connectedUser[booking.spot.user]
  
      if(awnerSocket) {
        req.io.io(awnerSocket).emit('booking_request')
      }

    return res.json(booking);

  }
}

module.exports = new BookingController();
