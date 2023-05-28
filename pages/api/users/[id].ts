import type { NextApiRequest, NextApiResponse } from "next"; //the relevant TYPES from next
import data from "../users.json"; // importing this here in order to get the total length of allUsers
import User from "@/lib/userType";

const allUsers: User[] = data;

//Making the backend endpoint for the HTTP 'GET' request to '/users/:id'
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  //Get the user whos ID is equal to the one passed in the URL
  if (req.method === "GET") {
    const { id } = req.query; //pull ID from the request query as a STRING
    if (typeof id !== "string") {
      throw new Error("Query param 'id' has to be of type string."); //Typescript wouldn't let me work with 'id' until I checked it liked this!!!
    }
    //Now the logic for dealing with the 'id' parameter (First, turn the ID string from req.query into a number using 'Number(id)')
    if (Number(id) <= allUsers.length) {
      const data: User | undefined = allUsers.find(
        (user) => user.id === Number(id)
      );
      res.status(200).json(data);

      //Add error check for data being undefined... (404)

      //Assuming data IDs are sequential...... Instead, look for ID in a data.id array!!! Then return.

      //If the user types in an ID in the URL that is not an existing user id then we send back 'null' in the response
    } else if (isNaN(Number(id)) || Number(id) > allUsers.length) {
      const data: null = null;
      res.status(200).json(data); //Should be 400 (for Nan in this case)
    }
  } else {
    res
      .status(405)
      .end(`Method ${req.method} is not allowed for this endpoint.`); //Will send the request and say that POST, PUT or DELETE requests are not allowed for this endpoint
  }
};
export default handler;
