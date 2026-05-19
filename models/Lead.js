import mongoose, { Schema} from "mongoose";

const leadsSchema = new Schema({
    fname: {type: String, required: true},
    lname: {type: String, required: false},
    email: {type: String, required: false, unique: true}, //adding unique also create a B-Tree which helps indexing but the B-Tree created do not have duplicates
    phone: {type: String, required: true},
    location: {type: String, required: false},
    status: {type: String, enum: ['new', 'contacted', 'in-process', 'converted', 'rejected'], default: 'new'}

});


leadsSchema.index({phone: 1});

export const Leads = mongoose.model("Lead", leadsSchema);