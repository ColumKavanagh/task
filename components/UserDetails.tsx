import Image from "next/image";

export default function UserDetails(props: any) {
  //TYPE???
  //COMPONENT LOGIC

  //RETURN this to the UI
  return (
    <section className="flex justify-center p-3">
      <section className="container flex justify-center md:flex-row md:max-w-3xl rounded-lg bg-white shadow-lg m-4">
        <Image
          className="w-auto h-auto md:h-auto object-contain md:w-64 rounded-t-lg md:rounded-none md:rounded-l-lg p-2"
          src={props.avatar}
          width={100}
          height={100}
          alt={`image of ${props.first_name} ${props.last_name}`}
        />
        <div className="p-6 flex flex-col justify-start">
          <h5 className="text-gray-900 text-xl font-medium mb-2 font-varela">
            {`Name: ${props.first_name} ${props.last_name}`}
          </h5>
          <h2 className="text-gray-800 font-semibold mb-1 font-varela">
            {props.email}
          </h2>
          <p className="text-gray-700 text-base mb-4 font-varela">
            {props.dob}
          </p>
        </div>
      </section>
    </section>
  );
}

//If !props.avatar THEN image src= 'placeholder image' (in public folder)
//If emailVerfied = true THEN image src= 'tick image' (in public folder) ELSE image src= 'X image'
//{.map} through skills an use BULLET POINTS on them???
