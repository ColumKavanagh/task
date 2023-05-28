//Typescript Functional Component w/ Props
//Relevant type for this component's props

//Use LIBRARY with dates!!!!!!

type FormatDateProps = {
  date: string;
};
//FUNCTIONAL COMPONENT
const FormatDate = (props: FormatDateProps): JSX.Element => {
  //COMPONENT LOGIC
  const date: string = props.date;
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
};
export default FormatDate;
