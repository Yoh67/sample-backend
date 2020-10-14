/*
 * Inserting a demo user into the database, and returning its id;
 */
INSERT INTO users(\
    userid,\
    username,\
    password,\
    email,\
    first_name,\
    last_name,\
    language,\
    country,\
    street,\
    city,\
    state,\
    zip_code,\
    created_date,\
    updated_date\
) VALUES(\
    $1,\
    $2,\
    $3,\
    $4,\
    $5,\
    $6,\
    $7,\
    $8,\
    $9,\
    $10,\
    $11,\
    $12,\
    CURRENT_TIMESTAMP,\
    NULL\
)
RETURNING userid