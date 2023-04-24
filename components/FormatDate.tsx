//FUNCTIONAL COMPONENT
export default function FormatDate(props: any) {
  //COMPONENT LOGIC
  const date = props.date;
  const dateObject = new Date(date);
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthNumber: number = dateObject.getMonth();
  //
  const day: number = dateObject.getDate();
  const month: string = months[monthNumber];
  const year: number = dateObject.getFullYear();
  //RETURN this to the UI
  return <p className="font-sans font-bold">{`${day} ${month} ${year}`}</p>;
}
