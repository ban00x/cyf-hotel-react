import React, { useEffect, useState } from "react";
import moment from "moment";
moment().format();

const TableRow = props => {
  const [isRowSelected, setRowSelected] = useState(true);
  const [className, SetClassName] = useState("");

  const handleClick = () => {
    if (isRowSelected) {
      setRowSelected(false);
      SetClassName("highlighter");
    } else if (!isRowSelected) {
      setRowSelected(true);
      SetClassName("");
    }
  };
  return (
    <tr onClick={handleClick} className={className}>
      <th scope="col">{props.id}</th>
      <th scope="col">{props.title}</th>
      <th scope="col">{props.name}</th>
      <th scope="col">{props.surname}</th>
      <th scope="col">{props.email}</th>
      <th scope="col">{props.roomId}</th>
      <th scope="col">{props.checkInDate}</th>
      <th scope="col">{props.checkOutDate}</th>
      <th scope="col">{props.numberOfNights}</th>
      <th scope="col">{props.customerProfile}</th>
    </tr>
  );
};

const SearchResults = props => {
  const [customerId, setCustomerId] = useState("");
  const [customerObject, setCustomerObj] = useState({});

  const showCustomerProfile = id => {
    setCustomerId(id);
  };
  const CustomerProfile = () => {
    useEffect(() => {
      fetch(`https://cyf-react.glitch.me/customers/${customerId}`)
        .then(res => res.json())
        .then(data => {
          setCustomerObj(data);
        });
    }, [customerId]);
    return (
      <div className="table">
        <thead>
          <th scope="col">Id</th>
          <th scope="col">Email</th>
          {customerObject.vip ? <th scope="col">Phone</th> : null}
        </thead>
        <tbody>
          <td scope="col">{customerObject.id}</td>
          <td scope="col">{customerObject.email}</td>
          {customerObject.vip ? (
            <td scope="col">{customerObject.phoneNumber}</td>
          ) : null}
        </tbody>
      </div>
    );
  };
  return (
    <div>
      <table className="table table-responsive">
        <thead>
          <TableRow
            id="ID"
            title="title"
            name="First Name"
            surname="Surname"
            email="Email"
            roomId="Room id"
            checkin="Check in date"
            checkout="Check out date"
            numberOfNights="Number of Nights"
            customerProfile="Customer Profile"
          />
        </thead>
        <tbody>
          {props.results
            ? props.results.map((object, index) => {
                return (
                  <TableRow
                    key={index}
                    id={object.id}
                    title={object.title}
                    name={object.firstName}
                    surname={object.surname}
                    email={object.email}
                    roomId={object.roomId}
                    checkin={object.checkInDate}
                    checkout={object.checkOutDate}
                    numberOfNights={numberOfNights(
                      object.checkInDate,
                      object.checkOutDate
                    )}
                    customerProfile={[
                      <button onClick={() => showCustomerProfile(object.id)}>
                        show profile
                      </button>
                    ]}
                  />
                );
              })
            : null}
        </tbody>
      </table>
      <div>{customerId ? <CustomerProfile /> : null}</div>
    </div>
  );
};

const numberOfNights = (firstDate, secondDate) => {
  let a = moment(firstDate);
  let b = moment(secondDate);
  return b.diff(a, "days");
};
export default SearchResults;
