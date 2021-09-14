const convertDate = (regDate) => {
  const date = new Date(regDate.registered.date);
  const day = date.toDateString().split(" ");
  const registeredDate = `${day[0]}, ${day[1]} ${day[3]}`;
  return registeredDate;
};

export default convertDate;
