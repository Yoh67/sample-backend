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
    GET('/users/:userid', (req: any) => {
        return Database.task('get-user', async (task: any) => {
            return task.user || await task.users.findUser(req.params.userid);
        });
    });

    // Add a user
    POST('/users/:userid', (req: any) => {
        return Database.task('add-user', async (task: any) => {
            return task.user || await task.users.add(req.params.userid, req.body);
        });
    });

    // Add a user
    PUT('/users/:userid', (req: any) => {
        return Database.task('update-user', async (task: any) => {
            return task.user || await task.users.update(req.params.userid, req.body);
        });
    });

    // Find a single user
    DELETE('/users/:userid', (req: any) => {
        return Database.task('delete-user', async (task: any) => {
            return task.user || await task.users.delete(req.params.userid);
        });
    });
}