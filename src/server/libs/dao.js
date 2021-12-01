class DAO {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        const record = {
            ...item,
            created: new Date().toISOString(),
        };

        this.items.push(record);

        return record;
    }

    reset() {
        this.items = [];
    }
}

module.exports = new DAO();