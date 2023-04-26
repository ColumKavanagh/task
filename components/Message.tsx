//Typescript Functional Component w/ Props
//Relevant type for this component's props
type MessageProps = {
  line1: string;
  line2: string;
};
//FUNCTIONAL COMPONENT
const Message = (props: MessageProps): JSX.Element => {
  //JSX.Element is a 'type'
  //COMPONENT LOGIC
  //
  //RETURN this to the UI
  return (
    <main>
      <p className="flex justify-center font-sans font-semibold text-2xl mt-5">
        {props.line1}
      </p>
      <p className="flex justify-center font-sans text-2xl mb-16">
        {props.line2}
      </p>
    </main>
  );
};
export default Message;
