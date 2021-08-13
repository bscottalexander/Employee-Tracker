class Department {
    constructor({id, name} = {}) {
        this.id = id;
        this.name = name;
    }

    getID() {
        return this.id;
    }

    setID({id} = {}) {
        this.id = id;
    }

    getName() {
        return this.name;
    }

    setName({name} = {}) {
        this.name = name;
    }
}

module.exports = Department;
