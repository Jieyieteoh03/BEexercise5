/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = "taskscheduler";
const collection = "category";

// The current database to use.
use(database);

// Create a new collection.
db.createCollection(collection);
