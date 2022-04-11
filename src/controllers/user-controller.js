import { prisma } from "../helpers/utils.js";

/* Get all users */

export const index = async (req, res) => {
  try {
    let users = await prisma.user.findMany({
      select: { id: true, name: true, username: true, email: true },
    });
    return res.send(users);
  } catch (error) {
    res.status(500).send({ error: `Cannot get users ${error} ${index}` });
  }
};

/* Get bye id user */

export const UserByeId = async (req, res) => {
  const { id } = req.query;
  try {
    let IdUser = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });
    return res.send(IdUser);
  } catch (error) {
    res.status(500).send({ error: `Cannot get users ${error} ${UserByeId}` });
  }
};

/* DELETE user bye id */

export const removeUser = async (req, res) => {
  const { id } = req.body;
  try {
    const user = await prisma.user.delete({
      where: {
        id: id,
      },
    });
    return res.send(user);
  } catch (error) {
    res
      .status(500)
      .send({ error: `Cannot remove users ${error} ${removeUser} ` });
  }
};

/* Update user */

export const updateUser = async (req, res) => {
  const { id, name, email, username } = req.body;
  try {
    const userUpdate = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name,
        email,
        username,
      },
    });
    return res.send(userUpdate);
  } catch (error) {
    res
      .status(500)
      .send({ error: `Cannot remove posts ${error} ${updateUser}` });
  }
};
