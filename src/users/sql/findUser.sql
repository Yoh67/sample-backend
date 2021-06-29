/*
 * Finds a single User record using Query Formatting.
 * See https://github.com/vitaly-t/pg-promise#query-formatting
 */
SELECT *
FROM users
WHERE username = $1
