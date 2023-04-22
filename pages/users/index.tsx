//This is the  '/users' URL page
import { useState, useEffect } from "react";
import axios from "@/lib/axios";
import User from "@/lib/userType";
import Loading from "@/components/Loading";

//The UserList component; a list of all the users
export default function UserList() {
  //COMPONENT LOGIC
  //Use useState to set up the array of users and the loading state
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  //GET users from the server (the Next.js API Endpoint I created) using Axios
  const getAllUsers = async () => {
    const response: any = await axios.get("/users");
    setAllUsers(response.data);
    setLoading(false);
  };

  //Run getAllUsers() ONCE on page load using useEffect()
  useEffect(() => {
    setTimeout(() => {
      //Using setTimeout here just to demonstrate the 'Loading' component
      getAllUsers();
    }, 2000);
  }, []);
  //
  //
  //What about dealing with any possible error in the Axios request though????
  //
  //
  //RETURN this to UI
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main>
          <ul>
            {allUsers.map((user: User) => {
              return (
                <li key={user.id} className="flex justify-center">
                  <div>
                    <div>
                      <h4 className="text-center">
                        {user.first_name} {user.last_name}
                      </h4>
                    </div>
                    <button
                    //   onClick={() => {
                    //     LINK to specific id page;
                    //   }}
                    >
                      More Info
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </main>
      )}
    </>
  );
}
