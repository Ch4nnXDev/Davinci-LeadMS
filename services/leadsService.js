import { Leads } from "../models/Lead";

const getLeads = () => {
    return Leads.find({});
}

const getLeadById = (id) => {
    return Leads.findById(id);
}

const getLeadByPhone = (phone) => {
    return Leads.findOne({ phone: phone });
}

const createLead = (leadData) => {
    const lead = new Leads(leadData);
    return lead.save();
}