import {IDatabase, IMain} from 'pg-promise';
import {User} from '../database/model';
import {userQueryFiles as sql} from './sql';
import {v4 as uuidv4} from 'uuid';

// Database Interface Extensionsss
interface IExtensions {
    users: Users
}

export {IExtensions};

export class Users {

    /**
     * @param Database
     * Automated database connection context/interface.
     *
     * If you ever need to access other repositories from this one,
     * you will have to replace type 'IDatabase<any>' with 'any'.
     *
     * @param pgp
     * Library's root, if ever needed, like to access 'helpers'
     * or other namespaces available from the root.
     */
    constructor(private Database: IDatabase<any>, private pgp: IMain) {}

    // Adds a new user, and returns the new object
    async add(values: {
        firstName: string,
        lastName: string,
        email: string,
        language: string,
        account: {
            username: string,
            password: string
        },
        address: {
            street: string,
            city: string,
            state: string,
            country: string,
            zipCode: number
        }
    }): Promise<null> {
        return this.Database.none(sql.add, {
            userid: uuidv4(),
            first_name: values.firstName,
            last_name: values.lastName,
            email: values.email,
            language: values.language,
            username: values.account.username,
            password: values.account.password,
            street: values.address.street,
            city: values.address.city,
            state: values.address.state,
            country: values.address.country,
            zip_code: values.address.zipCode
        });
    }

    // Adds a new user, and returns the new object
    async findUser(username: string): Promise<User> {
        return this.Database.one(sql.findUser, username);
    }

    // Returns all users
    async findAllUsers(): Promise<Users[]> {
        return this.Database.any(sql.findAllUsers);
    }

    // Updates a users data
    async update(values: {
        firstName: string,
        lastName: string,
        email: string,
        language: string,
        account: {
            username: string,
            password: string
        },
        address: {
            street: string,
            city: string,
            state: string,
            country: string,
            zipCode: number
        }
    }): Promise<null> {
        return this.Database.none(sql.update, {
            userId: null,
            first_name: values.firstName,
            last_name: values.lastName,
            email: values.email,
            language: values.language,
            username: values.account.username,
            password: values.account.password,
            street: values.address.street,
            city: values.address.city,
            state: values.address.state,
            country: values.address.country,
            zip_code: values.address.zipCode
        });
    }

    // Deletes a single user
    async delete(username: string): Promise<User> {
        return this.Database.result(sql.delete, username);
    }
}