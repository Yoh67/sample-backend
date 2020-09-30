function log(msg: string) {
    if (process.env.environment === "production") {
        /* tslint:disable:no-empty */
    } else {
        console.log(msg);
    }
}