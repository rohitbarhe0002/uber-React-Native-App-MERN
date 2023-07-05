import jwt from 'jsonwebtoken'

export const verifyUser = async (req, res, next) => {
 let tok =  req.headers['authorization']
let tokrn = tok.split(' ');
const userToken = tokrn[1]
    const decoded =   jwt.verify(userToken,process.env.JWT)
    if(decoded){
      next()
    }else next('user is not authorized')
  }