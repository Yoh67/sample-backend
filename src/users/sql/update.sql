/*
 * Update the data of a single user
 */
UPDATE users SET 
    username=${username},
    password=${password},
    email=${email},
    first_name=${first_name},
    last_name=${last_name},
    language=${language},
    country=${country},
    street=${street},
    city=${city},
    state=${state},
    zip_code=${zip_code},
    updated_date=CURRENT_TIMESTAMP 
WHERE username=${username}