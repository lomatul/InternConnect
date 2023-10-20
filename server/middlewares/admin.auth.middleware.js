export const ensureadmin= (req, res, next) => {
    if (req.isAuthenticated('admin')) {
      next();
    } else {
      res.status(200).json({error: "You do not have access"})
    }
};
