--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3
-- Dumped by pg_dump version 13.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: users; Type: TABLE; Schema: public; Owner: yoh
--

CREATE TABLE public.users (
    username character varying(15) NOT NULL,
    password character varying(25) NOT NULL,
    email character varying(60) NOT NULL,
    first_name character varying(20) NOT NULL,
    last_name character varying(20) NOT NULL,
    language character varying(5) NOT NULL,
    country character varying(10) NOT NULL,
    street character varying(20),
    city character varying(20),
    state character varying(5),
    zip_code character varying(10),
    created_date timestamp without time zone NOT NULL,
    updated_date timestamp without time zone,
    userid character varying(40)
);


ALTER TABLE public.users OWNER TO yoh;

--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: yoh
--

COPY public.users (username, password, email, first_name, last_name, language, country, street, city, state, zip_code, created_date, updated_date, userid) FROM stdin;
test_user_0001	password	test_0001@sample.com	Test	Testy	en_US	USA	2014 Forest Hill Dr	Fayetteville	NC	12345	2021-06-28 21:15:14.439715	\N	\N
test_user_0000	password	test_0000@sample.com	Test	Testy	en_US	USA	2014 Forest Hill Dr	Fayetteville	NC	12345	2021-06-28 21:18:07.627808	\N	\N
test_user_0002	updated_password_3	test_user0003@sample.com	Test	Testy	en_US	USA	2014 Forest Hill Dr	Fayetteville	NC	12345	2021-06-28 21:09:25.866129	2021-06-28 21:50:11.536902	\N
\.


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: yoh
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: yoh
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- PostgreSQL database dump complete
--

