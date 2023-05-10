"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requiresAPIToken = exports.requiresAuthorization = exports.requiresAuthentication = void 0;
const user_1 = require("../models/user");
function requiresAuthentication(req, res, next) {
}
exports.requiresAuthentication = requiresAuthentication;
function requiresAuthorization(req, res, next) {
}
exports.requiresAuthorization = requiresAuthorization;
function requiresAPIToken(req, res, next) {
    const token = req.header('x-api-token');
    if (token) {
        user_1.User.findOne({ api_token: token }).then(user => {
            if (user) {
                req.user = user;
                next();
            }
            else {
                res.status(403).json({ message: 'Invalid api token', code: 403 });
            }
        }, error => {
            res.status(403).json({ message: error.message, code: 403 });
        });
    }
    else {
        res.status(403).json({ message: 'Missing api token.', code: 403 });
    }
}
exports.requiresAPIToken = requiresAPIToken;
