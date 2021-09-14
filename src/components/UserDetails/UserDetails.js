import React from "react";
import { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Location } from "../Location/";

export default function UserDetails(props) {
  const { className, user } = props;
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let time = setTimeout(() => {
      setUsers(user);
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(time);
    };
  }, [user]);

  return (
    <div className={`${className}`}>
      <div className={`${className}__btn`}>
        <Link to="/">&times;</Link>
      </div>
      <div className={`${className}--body`}>
        {loading && "loading data..."}
        {!loading &&
          users
            .filter((user) => user.login.uuid === id)
            .map((user) => (
              <Fragment key={user.login.uuid}>
                <div className={`${className}--body__data`}>
                  <span>Country:</span>
                  {user.location.country || "brak"}
                </div>
                <div className={`${className}--body__data`}>
                  <span>City:</span>
                  {user.location.city || "brak"}
                </div>
                <div className={`${className}--body__data`}>
                  <span>State:</span>
                  {user.location.state || "brak"}
                </div>
                <div className={`${className}--body__data`}>
                  <span>Street:</span>
                  {user.location.street.name || "brak"}
                </div>
                <div className={`${className}--body__data`}>
                  <span>Postcode:</span>
                  {user.location.postcode || "brak"}
                </div>
                <div className={`${className}--body__map`}>
                  <Location
                    latitude={user.location.coordinates.latitude}
                    longitude={user.location.coordinates.longitude}
                    userLocation={user.location}
                  />
                </div>
              </Fragment>
            ))}
      </div>
    </div>
  );
}
