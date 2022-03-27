const dal = require("../dal");
async function getAllLeadsAsync() {
    const sql = "SELECT * FROM leads";
    const leads = await dal.executeAsync(sql);
    return leads;
}

async function getOneLeadAsync(id) { 
    const sql = `SELECT * FROM leads WHERE leadID = ${id}`;
    const lead = await dal.executeAsync(sql);
    return lead;
}

async function createOneLeadAsync(data) { 
    const {leadID, leadName, leadAddress, leadPhone, leadMail } = data;
    const sql = `INSERT INTO leads VALUES (${leadID}, '${leadName}', '${leadAddress}' , '${leadPhone}' ,'${leadMail}' );`;
    const lead = await dal.executeAsync(sql);
    return lead;
}

async function deleteOneLeadAsync(id) { 
    const sql = `DELETE FROM leads WHERE leadID = ${id}`;
    const lead = await dal.executeAsync(sql);
    return lead;
}

module.exports = { getAllLeadsAsync, getOneLeadAsync, createOneLeadAsync, deleteOneLeadAsync}