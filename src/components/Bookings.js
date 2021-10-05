import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  // const [filteredBookings, setFilteredBookings] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch("https://cyf-react.glitch.me/")
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
          throw new Error(data.error);
        } else {
          const bookings = searchVal
            ? data.filter(
                value =>
                  value.firstName === searchVal || value.surname === searchVal
              )
            : data;
          setBookings(bookings);
          // setFilteredBookings(data);
          setLoading(false);
        }
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, [searchVal]);
  const search = value => {
    setSearchVal(value);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {error ? <p>{error}</p> : null}
        {loading ? <p>Loading</p> : <SearchResults results={bookings} />}
      </div>
    </div>
  );
};

export default Bookings;
