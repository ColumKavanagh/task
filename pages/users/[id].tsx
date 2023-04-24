//This is the  '/users/:id' URL page
import axios from "@/lib/axios";
import User from "@/lib/userType";
import { GetServerSideProps, NextPage } from "next";
import UserNotFound from "@/components/UserNotFound";
import UserDetails from "@/components/UserDetails";

//USE GetServerSideProps() instead of getStaticProps() so that it makes the API call on
//every request and pulls in th relvant props accordingly
export const getServerSideProps: GetServerSideProps = async (context: any) => {
  try {
    const id: string = context.params.id;
    const response: any = await axios.get(`/users/${id}`);
    //See if the user was found or not
    if (response.status === 200) {
      if (response.data !== null) {
        const user: User = response.data;
        return {
          props: { user: user },
        };
      } else if (response.data === null) {
        const user = response.data;
        console.log("No user found");
        return {
          props: { user: user }, //user actually equals null here, a falsy value
        };
      }
    }
  } catch (error) {
    console.error(`ERROR: ${error}`);
  }
};
//
//FUNCTIONAL COMPONENT
const UserDetailsPage: NextPage = ({ user }) => {
  //COMPONENT LOGIC
  //
  //RETURN this to UI
  return (
    <>
      <main>{user ? <UserDetails {...user} /> : <UserNotFound />}</main>
    </>
  );
};

export default UserDetailsPage;
