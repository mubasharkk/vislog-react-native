
class User {
    constructor(props) {
        this.data = props ? props : {};
    }

    id() {
        return this.getValue('uid');
    }

    name() {
        return this.getValue('name') ? this.data.name.display : 'Unknown';
    }

    company() {
        return this.getValue('company_name');
    }

    getValue(key) {
        return (typeof this.data[key] !== 'undefined') ? this.data[key] : null;
    }

    toJSON() {
        return {
            id: this.id(),
            name: this.name(),
            company: this.company()
        }
    }
};

module.exports = User;