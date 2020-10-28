/*
 * Deletes a single User record using Query Formatting.
 * See https://github.com/vitaly-t/pg-promise#query-formatting
 */
DELETE FROM users 
WHERE userId=$1