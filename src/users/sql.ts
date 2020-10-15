import {QueryFile, IQueryFileOptions} from 'pg-promise';
import path from 'path';

export const userQueryFiles = {
    create: sql('sql/create.sql'),
    empty: sql('sql/empty.sql'),
    init: sql('sql/init.sql'),
    drop: sql('sql/drop.sql'),
    add: sql('sql/add.sql'),
    findUser: sql('sql/findUser.sql'),
    findAllUsers: sql('sql/findAllUsers.sql'),
    update: sql('sql/update.sql'),
    delete: sql('sql/delete.sql')
};

function sql(file: string): QueryFile {

    const fullPath: string = path.join(__dirname, file);

    const options: IQueryFileOptions = {
        // TODO
        // minifying the SQL is always advised;
        // see also option 'compress' in the API;
        minify: true

        // See also property 'params' for two-step template formatting
    };

    const queryFile: QueryFile = new QueryFile(fullPath, options);

    if (queryFile.error) {
        // Something is wrong with our query file :(
        // Testing all files through queries can be cumbersome,
        // so we also report it here, while loading the module:
        console.error(queryFile.error);
    }

    return queryFile;
}