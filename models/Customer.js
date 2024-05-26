const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerSchema = new Schema(
  {
    name: {
      type: String,
      default: "Unknown",
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    channel: {
      type: String,
      enum: [
        "whatsapp",
        "sms",
        "email",
        "facebook",
        "instagram",
        "twitter",
        "tiktok",
      ],
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    progression: {
      type: String,
      enum: ["new", "contacted", "converted", "retained", "lost"],
      default: "new",
    },
    agreement: {
      type: String,
      enum: ["inProgress", "signed", "cancelled", "terminated", "failed"],
      default: "inProgress",
    },
    followUp: {
      type: Date,
    },
    recall: {
      type: Date,
    },
    callAgain: {
      type: Boolean,
      default: true,
    },
    requesting: {
      type: String,
      required: true,
    },
    offerPrefered: {
      type: String,
      required: true,
    },
    appointmentCreated: {
      type: Boolean,
      required: true,
    },
    appointmentDate: {
      type: Date,
    },
    appointmentTime: {
      type: String,
    },
    actionRequired: {
      type: String,
      enum: ["call", "email", "sms", "whatsapp", "meeting", "followUp"],
    },

    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

module.exports = Customer = mongoose.model("customer", CustomerSchema);
