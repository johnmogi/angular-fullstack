const express = require("express");
const leadLogic = require("../logic/business-layer");
const router = express.Router();

// GET http://localhost:3000/api/leads 
router.get("/leads", async (request, response) => {
    try {
        const leads = await leadLogic.getAllLeadsAsync();
        response.json(leads);
    } catch (err) {
        response.status(500).send(err.message);
    }
});
// GET http://localhost:3000/api/leads/1 
router.get("/leads/:id", async (request, response) => {
    const id = request.params.id
    try {
        const lead = await leadLogic.getOneLeadAsync(id);
        response.json(lead);
    } catch (err) {
        response.status(500).send(err.message);
    }
});

module.exports = router;