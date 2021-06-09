const mongoose = require("mongoose");
const fileReader = require("../deliverables/fileReader/");
mongoose.connect("mongodb://127.0.0.1:27017/bars_db", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

console.log(fileReader);
const schema = new mongoose.Schema({
  billingCycle: {
      type: Number,
      required: true,
      min: 1,
      max: 12
  }
  billingMonth: String,
  amount: Number,
  startDate: {
      type: Date,
      required: true,
      description: 'MMDDYYYY'
  }
  endDate: {
      type: Date,
      required: true,
      description: 'MMDDYYYY'
  }
  lastEdited: String,
  account: {
    accountName: String,
    dateCreated: Date,
    isActive: String,
    lastEdited: String,
    customer: {
      firstName: String,
      lastName: String,
      address: Sring,
      status: String,
      dateCreated: Date,
      lastEdited: String
    },
  },
})