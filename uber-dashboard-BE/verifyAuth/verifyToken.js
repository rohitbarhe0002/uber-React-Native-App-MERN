import jwt from 'jsonwebtoken'

  export const  getToken = (req) => {
    if (
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
        console.log(req.headers.authorization.split(" ")[1],"tokenn is here")
      return req.headers.authorization.split(" ")[1];
    } 
    return null;
  }

 