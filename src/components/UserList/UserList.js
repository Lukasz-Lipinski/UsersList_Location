import { useState, useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";

import { User } from "../User";
import { UserDetails } from "../UserDetails";
import convertDate from "../Functions/convertDate";
import api from "../Functions";

export default function UserList() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    api
      .get("?results=10")
      .then((data) => {
        setUser(data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      {loading && "is loading..."}
      {error && "error occurred"}

      <Switch>
        <Route exact path="/">
          <div>
            {!loading &&
              user.map((user) => (
                <Link key={user.login.uuid} to={`/user/${user.login.uuid}`}>
                  <User
                    className="card"
                    userName={user.name}
                    userLocation={user.location}
                    city={user.location.city}
                    street={user.location.street.name}
                    email={user.email}
                    registrationDate={convertDate(user)}
                    src={user.picture.large}
                  />
                </Link>
              ))}
          </div>
        </Route>
        <Route path={`/user/:id`}>
          <UserDetails className="details" user={user} />
        </Route>
      </Switch>
    </div>
  );
}
