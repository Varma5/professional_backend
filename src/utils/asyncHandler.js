const ayncHandler = (reqHendler) => {   
    (req, res, next) => {
        Promise.resolve(reqHendler(req, res, next))
            .catch((error) => {
                console.error("Error in async handler:", error);
                res.status(500).json({ message: "Internal Server Error" });
                next(error); // Pass the error to the next middleware
            });
    }
}

export {ayncHandler}
