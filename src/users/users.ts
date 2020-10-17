import {IDatabase, IMain} from 'pg-promise';
import {User} from '../database/models';
import {userQueryFiles as sql} from './sql';

// Database Interface Extensions:
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
    constructor(private Database: IDatabase<any>, private pgp: IMain) {
        /*
          If your repository needs to use helpers like ColumnSet,
          you should create it conditionally, inside the constructor,
          i.e. only once, as a singleton.
        */
    }

    // Creates the table
    async create(): Promise<null> {
        return this.Database.none(sql.create);
    }

    // Initializes the table with a user records, and return its id
    async init(): Promise<number[]> {
        return this.Database.map(sql.init, [], (row: { userId: number }) => row.userId);
    }

    // Drops the table;
    async drop(): Promise<null> {
        return this.Database.none(sql.drop);
    }

    // Removes all records from the table
    async empty(): Promise<null> {
        return this.Database.none(sql.empty);
    }

    // Adds a new user, and returns the new object
    async add(userId: number, values: {
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
            userid: userId,
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

    // Returns a single user
    async findUser(userId: string): Promise<User> {
        return this.Database.one(sql.findUser, userId);
    }

    // Returns all users
    async findAllUsers(): Promise<Users[]> {
        return this.Database.any(sql.findAllUsers);
    }

    // Updates a users data
    async update(userId: number, values: {
        first_name: string,
        last_name: string,
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
            zip_code: number
        }
    }): Promise<null> {
        return this.Database.none(sql.update, {
            userid: userId,
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            language: values.language,
            username: values.account.username,
            password: values.account.password,
            street: values.address.street,
            city: values.address.city,
            state: values.address.state,
            country: values.address.country,
            zip_code: values.address.zip_code
        });
    }

    // Deletes a single user
    async delete(userId: string): Promise<User> {
        return this.Database.result(sql.delete, userId);
    }
}