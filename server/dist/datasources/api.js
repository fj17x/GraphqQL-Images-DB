"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const datasource_rest_1 = require("@apollo/datasource-rest");
class AppAPI extends datasource_rest_1.RESTDataSource {
    baseURL = "http://localhost:4000/v1/";
    token;
    constructor(options) {
        super(options);
        this.token = options.token;
    }
    willSendRequest(_, request) {
        request.headers.Cookie = `jwt=${this.token}`;
    }
    users(query) {
        const queryString = new URLSearchParams(query).toString();
        return this.get(`users?${queryString}`);
    }
    user(id) {
        return this.get(`users/${id}`);
    }
    images(query) {
        const queryString = new URLSearchParams(query).toString();
        return this.get(`images?${queryString}`);
    }
    image(id) {
        return this.get(`images/${id}`);
    }
    signin(credentials) {
        return this.post("auth/signin", { body: credentials });
    }
    register(userInfo) {
        return this.post("auth/register", { body: userInfo });
    }
    logout() {
        return this.post("auth/logout");
    }
    createUser(userInfo) {
        return this.post("users", { body: userInfo });
    }
    deleteUser(idToUpdate) {
        return this.delete(`users/${idToUpdate}`);
    }
    updateUser(userDetails) {
        return this.put(`users/${userDetails.idToUpdate}`, { body: userDetails });
    }
    partiallyUpdateUser(userDetails) {
        return this.patch(`users/${userDetails.idToUpdate}`, { body: userDetails });
    }
    createImage(imageDetails) {
        return this.post(`images`, { body: imageDetails });
    }
    deleteImage(idToUpdate) {
        return this.delete(`images/${idToUpdate}`);
    }
    updateImage(imageDetails) {
        return this.put(`images/${imageDetails.idToUpdate}`, { body: imageDetails });
    }
    partiallyUpdateImage(imageDetails) {
        return this.patch(`images/${imageDetails.idToUpdate}`, { body: imageDetails });
    }
    me() {
        return this.get(`me`);
    }
    updateAccountDetails(detailsToUpdate) {
        return this.patch(`me`, { body: detailsToUpdate });
    }
    deleteAccount() {
        return this.delete(`me`);
    }
}
exports.default = AppAPI;
