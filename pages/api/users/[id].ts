import type { NextApiRequest, NextApiResponse } from "next"; //the relevant TYPES from next
import data from "../users.json"; // importing this here in order to get the total length of allUsers
import User from "@/lib/userType";

const allUsers: User[] = data;

//Making the backend endpoint for the HTTP 'GET' request to '/users/:id'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  //Get the user whos ID i equal to that passed in the URL
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

      //If the user types in an ID in the URL that is not an existing user id then we send back 'null' in the response
    } else if (isNaN(Number(id)) || Number(id) > allUsers.length) {
      const data: null = null;
      res.status(200).json(data);
    }
  } else {
    res
      .status(405)
      .end(`Method ${req.method} is not allowed for this endpoint.`); //Will send the request and say that POST, PUT or DELETE requests are not allowed for this endpoint
  }
}
