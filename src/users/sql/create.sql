/*
 * Creates table Users.
 */
CREATE TABLE public.users
(
    userid SERIAL NOT NULL,
    username VARCHAR (15) NOT NULL,
    password VARCHAR (25) NOT NULL,
    email VARCHAR (60) NOT NULL,
    first_name VARCHAR (20) NOT NULL,
    last_name VARCHAR (20) NOT NULL,
    language VARCHAR (5) NOT NULL,
    country VARCHAR (10) NOT NULL,
    street VARCHAR (20),
    city VARCHAR (20),
    state VARCHAR (5),
    zip_code VARCHAR (10),
    created_date TIMESTAMP without time zone NOT NULL,
    updated_date TIMESTAMP without time zone,
    CONSTRAINT users_pkey PRIMARY KEY (userid),
    CONSTRAINT users_email_key UNIQUE (email),
    CONSTRAINT users_username_key UNIQUE (username)
)

