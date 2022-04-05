const authMiddleware = (req, res, next) => {
    // access authorization value from the request headers
    const userId = req.headers.authorization;

    if (!userId)
        return res.status(401)
            .json({ error: true, message: "Unauthorized Request" });

    req.userId = userId;
    next();
};

module.exports = authMiddleware;
