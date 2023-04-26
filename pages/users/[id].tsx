//This is the  '/users/:id' URL page
import axios from "@/lib/axios";
import User from "@/lib/userType";
import UserNotFound from "@/components/UserNotFound";
import UserDetails from "@/components/UserDetails";
import { InferGetServerSidePropsType } from "next";

/*USE GetServerSideProps() instead of getStaticProps() so that it makes the API call on
every request and pulls in the relevant props accordingly*/
export const getServerSideProps = async (context: any) => {
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
      } else {
        //where response.data === null
        const user: null = response.data;
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

//Relevant type for this component's props... using 'InferGetServerSidePropsType<typeof getServerSideProps>'

//FUNCTIONAL COMPONENT
const UserDetailsPage = ({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {
  //COMPONENT LOGIC
  //
  //RETURN this to UI
  return (
    <>
      {/*If the user is a user object we return the userDetails component w/ user as props, if the user is 'null' (a falsy value), we return UserNotFound component*/}
      <main>{user ? <UserDetails {...user} /> : <UserNotFound />}</main>
    </>
  );
};

export default UserDetailsPage;
