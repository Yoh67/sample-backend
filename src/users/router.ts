import {Database} from '../database/config';
import {GET, POST, PUT, DELETE} from '../utils/handler_util';

export function InitializeUserRouters() {

    // Find all users
    GET('/users', () =>  {
        return Database.task('get-all-users', async (task: any) => {
            return task.user || await task.users.findAllUsers();
        });
    });

    // Find a single user
    GET('/user', (req: any) => {
        return Database.task('get-user', async (task: any) => {
            return task.user || await task.users.findUser(req.body.username);
        });
    });

    // Add a user
    POST('/users', (req: any) => {
        return Database.task('add-user', async (task: any) => {
            return task.user || await task.users.add(req.body);
        });
    });

    // Update a user
    PUT('/users', (req: any) => {
        return Database.task('update-user', async (task: any) => {
            return task.user || await task.users.update(req.body);
        });
    });

    // Remove a single user
    DELETE('/users', (req: any) => {
        return Database.task('delete-user', async (task: any) => {
            return task.user || await task.users.delete(req.body.username);
        });
    });
}