import type { NextApiRequest, NextApiResponse } from "next"; //the relevant TYPES from next
import data from "../users.json";
import User from "@/lib/userType";

const allUsers: User[] = data; //Typecheck to make sure 'data' is an array of proper 'User' tyes as defind by me

//Making the backend endpoint for the HTTP 'GET' request to '/users'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  //Only allow GET requests for this particular API endpoint
  if (req.method === "GET") {
    res.status(200).json(allUsers);
  } else {
    res
      .status(405)
      .end(`Method ${req.method} is not allowed for this endpoint.`); //Will send the request and say that POST, PUT or DELETE requests are not allowed for this endpoint
  }
}
