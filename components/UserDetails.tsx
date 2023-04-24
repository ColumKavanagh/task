import { NextComponentType } from "next";
import Image from "next/image";
import FormatDate from "./FormatDate";
import PreviousUser from "./PreviousUser";
import NextUser from "./NextUser";
import data from "../pages/api/users.json";

const UserDetails: NextComponentType = (props: any) => {
  //TYPE???
  //COMPONENT LOGIC

  //RETURN this to the UI
  return (
    <main className="flex justify-evenly">
      {props.id > 1 && <PreviousUser id={props.id} />}
      <div className="flex flex-wrap justify-center w-2/3 md:max-w-6xl rounded-lg bg-white shadow-lg m-2 py-4">
        <section className="flex w-1/3 -ml-12 ">
          {props.avatar ? (
            <Image
              className="md:h-auto object-contain md:w-64 rounded-t-lg md:rounded-none md:rounded-l-lg p-2"
              src={props.avatar}
              width={100}
              height={100}
              alt={`image of ${props.first_name} ${props.last_name}`}
            />
          ) : (
            <Image
              className="md:h-auto object-contain md:w-64 rounded-t-lg md:rounded-none md:rounded-l-lg p-2"
              src="/no-avatar.png"
              width={100}
              height={100}
              alt={`A placeholder image of an avatar`}
            />
          )}
        </section>
        <section className="pb-6 pt-4 flex flex-col w-1/3 justify-start">
          <p className="text-gray-900 font-sans mb-2">
            Name:&nbsp;
            <b>
              {props.first_name} {props.last_name}
            </b>
          </p>
          <p className="text-gray-900 font-sans mb-2">
            Email:&nbsp;
            <b>{props.email}</b>
          </p>
          <div className="flex">
            <p className="text-gray-900 font-sans mb-2">Born on&nbsp;</p>
            <FormatDate date={props.dob} />
          </div>
          <div className="flex">
            <p className="text-gray-900 font-sans mb-2">Email Verified?</p>
            {props.emailVerified ? (
              <Image
                className="w-auto h-auto ml-2 mb-2"
                src="/yes.png"
                width={20}
                height={20}
                alt={`An image of a tick indicating that the user's email is verified`}
              />
            ) : (
              <Image
                className="w-auto h-auto ml-2 mb-2"
                src="/no.png"
                width={20}
                height={20}
                alt={`An image of an X indicating that the user's email is not verified`}
              />
            )}
          </div>
          <p className="text-gray-900 font-sans mb-2">
            Company:&nbsp;
            <b>{props.company.name}</b>
          </p>
          <p className="text-gray-900 font-sans mb-2">
            Department:&nbsp;
            <b>{props.company.department}</b>
          </p>
          <p className="text-gray-900 font-sans mb-2">Skills:</p>
          <ul className="list-disc pl-0 list-inside">
            {props.skills.map((skill: string) => {
              return (
                <li key={props.skills.indexOf(skill)} className="">
                  {skill}
                </li>
              );
            })}
          </ul>
          <h1 className="text-right font-bold text-4xl mt-5 -mr-28 -mb-5">{`#${props.id}`}</h1>
        </section>
      </div>
      {props.id < data.length && <NextUser id={props.id} />}
    </main>
  );
};

//If emailVerfied = true THEN image src= 'tick image' (in public folder) ELSE image src= 'X image'
//{.map} through skills an use BULLET POINTS on them???

export default UserDetails;
