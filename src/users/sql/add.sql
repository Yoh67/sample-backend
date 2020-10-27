/*
 * Inserts a new User record using Named Formatting.
 * See https://github.com/vitaly-t/pg-promise#named-parameters
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
    ${userid},
    ${username},
    ${password},
    ${email},
    ${first_name},
    ${last_name},
    ${language},
    ${country},
    ${street},
    ${city},
    ${state},
    ${zip_code},
    CURRENT_TIMESTAMP,
    NULL
)