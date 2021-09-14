import "../Styles/card.scss";

export default function User(props) {
  const {
    className,
    registrationDate,
    src,
    email,
    userName,
    userLocation
  } = props;

  const { first, last } = userName;
  const { city, street } = userLocation;

  return (
    <div className={`${className}`}>
      <div className={`${className}--header`}>
        <img src={src} alt={"brak zdjęcia"} />
      </div>
      <div className={`${className}--body`}>
        <div className={`${className}--body__names`}>
          {(first === "" || last === "") && `Nie podano imienia i nazwiska`}
          {last !== "" && last !== "" && `${first} ${last}`}
          <p>Registred: {registrationDate}</p>
          <hr />
        </div>
        <div className={`${className}--body__address`}>
          <div>
            <span>City:</span>
            {city === "" ? "brak" : city}
          </div>
          <div>
            <span>Street:</span>
            {street === "" ? "brak" : street.name}
          </div>
          <div>
            <span>E-mail:</span>
            {email === "" ? "brak" : email}
          </div>
        </div>
      </div>
    </div>
  );
}
