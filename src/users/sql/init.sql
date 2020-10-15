/*
 * Inserts an example user into the database
 */
INSERT INTO users(
    userid,
    username,
    password,
    email,
    first_name,
    last_name,
    language,
    country,
    street,
    city,
    state,
    zip_code,
    created_date,
    updated_date
) VALUES(
    2,
    'test_user_0002',
    'password',
    'test_0002@sample.com',
    'First',
    'Last',
    'en_US',
    'USA',
    '2014 Forest Hill Dr',
    'Fayetteville',
    'NC',
    '28305',
    CURRENT_TIMESTAMP,
    NULL
)