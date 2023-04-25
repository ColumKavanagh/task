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
    <main className="flex w-auto flex-row flex-wrap justify-center items-center">
      <div className="flex">
        {props.id > 1 ? (
          <PreviousUser id={props.id} />
        ) : (
          <NextUser id={props.id} />
        )}
      </div>
      <section className="flex flex-wrap justify-evenly w-2/3 md:max-w-6xl rounded-lg bg-white shadow-lg m-2 py-2">
        <section className="flex w-1/2 justify-center items-center">
          {props.avatar ? (
            <Image
              className="object-contain w-64 "
              src={props.avatar}
              width={100}
              height={100}
              alt={`image of ${props.first_name} ${props.last_name}`}
            />
          ) : (
            <Image
              className="object-contain w-64 "
              src="/no-avatar.png"
              width={100}
              height={100}
              alt={`A placeholder image of an avatar`}
            />
          )}
        </section>
        <section className="flex flex-col w-1/2 py-3">
          <p className="text-black font-sans mb-2">
            Name:&nbsp;
            <b>
              {props.first_name} {props.last_name}
            </b>
          </p>
          <p className="text-black font-sans mb-2">
            Email:&nbsp;
            <b>{props.email}</b>
          </p>
          <div className="flex">
            <p className="text-black font-sans mb-2">Born on&nbsp;</p>
            <FormatDate date={props.dob} />
          </div>
          <div className="flex">
            <p className="text-black font-sans mb-2">Email Verified?</p>
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
          <p className="text-black font-sans mb-2">
            Company:&nbsp;
            <b>{props.company.name}</b>
          </p>
          <p className="text-black font-sans mb-2">
            Department:&nbsp;
            <b>{props.company.department}</b>
          </p>
          <ul className="flex flex-wrap text-sm">
            {props.skills.map((skill: string) => {
              return (
                <li
                  key={props.skills.indexOf(skill)}
                  className="flex bg-slate-300 rounded-full p-2 m-1"
                >
                  {skill}
                </li>
              );
            })}
          </ul>
          <h1 className="text-right font-bold text-5xl pr-8 rounded-full">{`#${props.id}`}</h1>
        </section>
      </section>
      <div>
        {props.id < data.length ? (
          <NextUser id={props.id} />
        ) : (
          <PreviousUser id={props.id} />
        )}
      </div>
    </main>
  );
};

//If emailVerfied = true THEN image src= 'tick image' (in public folder) ELSE image src= 'X image'
//{.map} through skills an use BULLET POINTS on them???

export default UserDetails;
