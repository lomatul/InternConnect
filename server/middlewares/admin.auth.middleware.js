export const ensureadmin= (req, res, next) => {
    if (req.isAuthenticated('admin')) {
      next();
    } else {
      res.status(401).json({error: "You do not have access"})
    }
};
