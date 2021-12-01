const validate = require("../utils/validate");
const DAO = require("../libs/dao");

module.exports = (req, res) => {
    try {
        validate(req.body);

        const record = DAO.addItem(req.body);

        res.send(record);
    } catch (error) {
        res.status(400).send();
    }
};