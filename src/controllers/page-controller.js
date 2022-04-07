import { prisma } from "../helpers/utils.js";

/* pagination home Profile List ID posts */

export const listProfileID = async (req, res) => {
  const { id, authorId } = req.user;
  console.log(req.user);
  try {
    const listID = await prisma.post.findMany({
      where: {
        authorId: id,
      },
    });
    return res.send({ data: { listID } });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ error: `Cannot getallPosts posts ${error} ${listProfileID}` });
  }
};

/* pagination home Feed List posts */

export const index = async (req, res) => {
  const page = req.page - 1;
  try {
    const results = await prisma.post.findMany({
      skip: page * 10,
      take: 10,
      include: {
        author: {
          select: {
            id: true,
            email: true,
            name: true,
            username: true,
          },
        },
      },
    });
    return res.send(results);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: `Cannot fetch posts ${error} ${results}` });
  }
};
