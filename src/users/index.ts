import {QueryFile, IQueryFileOptions} from 'pg-promise';
import path from 'path';

export const users = {
    create: sql('sql/create.sql'),
    empty: sql('sql/empty.sql'),
    init: sql('sql/init.sql'),
    drop: sql('sql/drop.sql'),
    add: sql('sql/add.sql'),
    findUser: sql('sql/findUser.sql'),
    findAllUsers: sql('sql/findAllUsers.sql')
};

function sql(file: string): QueryFile {

    const fullPath: string = path.join(__dirname, file); // generating full path;

    const options: IQueryFileOptions = {

        // minifying the SQL is always advised;
        // see also option 'compress' in the API;
        minify: true

        // See also property 'params' for two-step template formatting
    };

    const qf: QueryFile = new QueryFile(fullPath, options);

    if (qf.error) {
        // Something is wrong with our query file :(
        // Testing all files through queries can be cumbersome,
        // so we also report it here, while loading the module:
        console.error(qf.error);
    }

    return qf;
}