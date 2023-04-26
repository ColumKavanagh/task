//This is the  '/users' URL page
import axios from "@/lib/axios";
import User from "@/lib/userType";
import { InferGetServerSidePropsType } from "next";
import UserListItem from "@/components/UserListItem";

//getServerSideProps to get the props evey time a request is made to th server
export const getServerSideProps = async () => {
  try {
    const response: any = await axios.get("/users");
    const data: User[] = response.data;
    return {
      props: {
        users: data,
      },
    };
  } catch (error) {
    console.error(`ERROR: ${error}`);
  }
};

//Relevant type for this component's props... using 'InferGetServerSidePropsType<typeof getServerSideProps>'

///FUNCTIONAL COMPONENT
const AllUsersPage = ({
  users,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {
  //RETURN this to UI
  return (
    <>
      <main>
        <ul>
          {users.map((user: User) => {
            return (
              <li key={user.id} className="flex justify-center">
                <UserListItem {...user} />
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default AllUsersPage;
