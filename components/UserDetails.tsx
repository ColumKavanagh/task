//Typescript Functional Component w/ Props
import Image from "next/image";
import FormatDate from "./FormatDate";
import PreviousUser from "./PreviousUser";
import NextUser from "./NextUser";
import data from "../pages/api/users.json";
//Relevant type for this component's props
//First, create the 'Company' type that will feature in the 'UserDetailsProps' type
type Company = {
  name: string;
  department: string;
};
type UserDetailsProps = {
  first_name: string;
  last_name: string;
  id: number;
  avatar?: string | undefined;
  email: string;
  emailVerified: boolean;
  dob: string;
  company: Company;
  skills: string[];
};
//FUNCTIONAL COMPONENT
const UserDetails = (props: UserDetailsProps): JSX.Element => {
  //COMPONENT LOGIC
  //
  //RETURN this to the UI
  return (
    <main className="flex flex-wrap w-auto flex-row justify-center items-center">
      <div className="flex flex-wrap">
        {props.id > 1 ? (
          <PreviousUser id={props.id} />
        ) : (
          <NextUser id={props.id} />
        )}
      </div>
      <section className="flex flex-wrap justify-evenly w-2/3 min-w-fit md:max-w-6xl rounded-lg bg-white shadow-lg m-2 py-2">
        <div className="flex flex-wrap object-contain px-3 justify-center items-center">
          {props.avatar ? (
            <Image
              className="w-64"
              src={props.avatar}
              width={100}
              height={100}
              alt={`image of ${props.first_name} ${props.last_name}`}
            />
          ) : (
            <Image
              className="w-64"
              src="/no-avatar.png"
              width={100}
              height={100}
              alt={`A placeholder image of an avatar`}
            />
          )}
        </div>
        <div className="flex flex-wrap flex-col w-1/2 py-3">
          <p className="text-black font-sans mt-2 mb-2">
            Name:&nbsp;&nbsp;
            <b>
              {props.first_name} {props.last_name}
            </b>
          </p>
          <div className="flex items-center min-w-fit">
            <p className="text-black font-sans mb-2">
              Email:&nbsp;&nbsp;
              <b>{props.email}</b>&nbsp;
            </p>
            <div>
              {props.emailVerified ? (
                <Image
                  className="w-auto h-auto ml-2 mb-2 mr-2"
                  src="/yes.png"
                  width={18}
                  height={18}
                  alt={`An image of a tick indicating that the user's email is verified`}
                />
              ) : (
                <Image
                  className="w-auto h-auto ml-2 mb-2 mr-2"
                  src="/no.png"
                  width={18}
                  height={18}
                  alt={`An image of an X indicating that the user's email is not verified`}
                />
              )}
            </div>
          </div>
          <div className="flex">
            <p className="text-black font-sans mb-2">Born on&nbsp;</p>
            <FormatDate date={props.dob} />
          </div>
          <div className="flex items-baseline min-w-fit mb-4">
            <p className="text-black font-sans">
              Company:&nbsp;
              <b>{props.company.name}</b>&nbsp;&nbsp;
            </p>
            <p className="text-black font-sans">
              Department:&nbsp;
              <b>{props.company.department}</b>
            </p>
          </div>
          <ul className="flex flex-wrap text-sm">
            {props.skills.map((skill: string) => {
              return (
                <li
                  key={props.skills.indexOf(skill)}
                  className="flex bg-slate-300 rounded-full p-2 mr-2 mb-2"
                >
                  {skill}
                </li>
              );
            })}
          </ul>
          <h1 className="text-right font-bold text-5xl rounded-full">{`#${props.id}`}</h1>
        </div>
      </section>
      <div className="flex flex-wrap">
        {props.id < data.length ? (
          <NextUser id={props.id} />
        ) : (
          <PreviousUser id={props.id} />
        )}
      </div>
    </main>
  );
};
export default UserDetails;
