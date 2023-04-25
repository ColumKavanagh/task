//This is the  '/users' URL page
import axios from "@/lib/axios";
import User from "@/lib/userType";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import UserListItem from "@/components/UserListItem";

//getStaticProps
export const getServerSideProps: GetServerSideProps = async () => {
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

///FUNCTIONAL COMPONENT
const AllUsersPage: NextPage = ({
  users,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
