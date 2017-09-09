// Action Types
// It's best to use them as enum or const and reference them rather than error
// prone typing

export enum User {
    SET_NAME = 'SET_NAME'
}

export enum API {
    FETCH_USER = 'FETCH_USER',
    FETCH_USER_FULLFILLED = 'FETCH_USER_FULLFILLED',
    FETCH_USER_REJECTED = 'FETCH_USER_REJECTED'
}