import { verifyToken } from "../helpers/utils.js";

export const validateRequest = async (req, res) => {
  try {
    const auth = req.headers["authorization"];
    const token = auth?.replace("Bearer ", "");

    const user = await verifyToken(token);
    console.log(req.query.page, "testando");
    req.user = user;
    req.page = req.query.page;
    /*  const result = await res(req);
    return result; */
  } catch (error) {
    return res.status(401).send({ error: "Unauthorized!" });
  }
};
