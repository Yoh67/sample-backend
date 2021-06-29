import {Database} from './config';
import {POST, DELETE} from '../utils/handler_util';

// These shouldn't be exposed but rather called via npm scripts or something
// similar for production-level use
export function InitializeDatabaseRouters() {

    POST('/create', req => {
        return Database.task('create-table', async (task: any) => {
            return task.user || await task.users.create(req.body);
        });
    });

    POST('/init', req => {
        return Database.task('init', async (task: any) => {
            return task.user || await task.users.init(req.body);
        });
    });

    DELETE('/empty', req => {
        return Database.task('empty', async (task: any) => {
            return task.user || await task.users.empty(req.body);
        });
    });

    DELETE('/drop', req => {
        return Database.task('drop', async (task: any) => {
            return task.user || await task.users.drop(req.body);
        });
    });
}