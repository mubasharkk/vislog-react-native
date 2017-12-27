import User from './../Domain/User'

class UserRepository {

    constructor() {
        this.API_ENDPOINT = '';
    }

    getUserFromApi(code, callback) {
        return fetch(this.API_ENDPOINT + code)
            .then((response) => response.json())
            .then((response) => {
                return callback(new User(response.user));
            });
    }
}

export default new UserRepository;