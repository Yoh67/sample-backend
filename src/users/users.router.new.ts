import {IDatabase, IMain} from 'pg-promise';
import {IResult} from 'pg-promise/typescript/pg-subset';
import {User} from '../database/models';
import {users as sql} from './index';

export class Users {

    /**
     * @param db
     * Automated database connection context/interface.
     *
     * If you ever need to access other repositories from this one,
     * you will have to replace type 'IDatabase<any>' with 'any'.
     *
     * @param pgp
     * Library's root, if ever needed, like to access 'helpers'
     * or other namespaces available from the root.
     */
    constructor(private db: IDatabase<any>, private pgp: IMain) {
        /*
          If your repository needs to use helpers like ColumnSet,
          you should create it conditionally, inside the constructor,
          i.e. only once, as a singleton.
        */
    }

    // Creates the table
    async create(): Promise<null> {
        return this.db.none(sql.create);
    }

    // Initializes the table with a user records, and return its id
    async init(): Promise<number[]> {
        return this.db.map(sql.init, [], (row: { userid: number }) => row.userid);
    }

    // Drops the table;
    async drop(): Promise<null> {
        return this.db.none(sql.drop);
    }

    // Removes all records from the table
    async empty(): Promise<null> {
        return this.db.none(sql.empty);
    }

    // Adds a new user, and returns the new object
    async add(values: {
        userid: number,
        username: string,
        password: string,
        email: string,
        first_name: string,
        last_name: string,
        language: string,
        country: string,
        street: string,
        city: string,
        state: string,
        zip_code: number
    }): Promise<User> {
        return this.db.one(sql.add, {
            userid: values.userid,
            username: values.username,
            password: values.password,
            email: values.email,
            first_name: values.first_name,
            last_name: values.last_name,
            language: values.language,
            country: values.country,
            street: values.street,
            city: values.city,
            state: values.state,
            zip_code: values.zip_code
        });
    }

    // Returns a single user
    async findUser(userid: string): Promise<User> {
        return this.db.one(sql.findUser, userid);
    }

    // Returns all users
    async findAllUsers(): Promise<Users[]> {
        return this.db.any(sql.findAllUsers);
    }
/*
    // Tries to delete a user by id, and returns the number of records deleted;
    async remove(id: number): Promise<number> {
        return this.db.result('DELETE FROM users WHERE id = $1', +id, (r: IResult) => r.rowCount);
    }

    // Tries to find a user from id;
    async findById(id: number): Promise<User | null> {
        return this.db.oneOrNone('SELECT * FROM users WHERE id = $1', +id);
    }

    // Tries to find a user from name;
    async findByName(name: string): Promise<User | null> {
        return this.db.oneOrNone('SELECT * FROM users WHERE name = $1', name);
    }

    // Returns all user records;
    async all(): Promise<User[]> {
        return this.db.any('SELECT * FROM users');
    }

    // Returns the total number of users;
    async total(): Promise<number> {
        return this.db.one('SELECT count(*) FROM users', [], (a: { count: string }) => +a.count);
    }*/
}