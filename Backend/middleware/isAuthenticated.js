// 

import jwt from 'jsonwebtoken';

const isAuthenticated = (req, res, next) => {
  const token = req.cookies.token || req.header('Authorization');
  if (!token) {
    return res.status(401).json({
      message: 'No token, authorization denied',
      success: false,
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.id = decoded.userId; // Attach user ID from token to request object
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Token is not valid',
      success: false,
    });
  }
};

export default isAuthenticated;
