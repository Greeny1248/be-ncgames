const db = require("../db/connection");

readCategories = () => {
    
  let queryString = `SELECT * FROM categories`;
  return db
    .query(queryString)
    .then((results) => {
      console.log(results.rows);
      return results.rows;
    })
    .catch((err) => {
      console.log(err);
    });
};

readReviews = () => {
  let queryString = `SELECT * FROM reviews
    ORDER BY created_at DESC`;
  return db
    .query(queryString)
    .then((results) => {
      // console.log(results.rows);
      return results.rows;
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = { readCategories, readReviews };
