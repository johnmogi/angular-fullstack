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

module.exports = { getAllLeadsAsync, getOneLeadAsync}