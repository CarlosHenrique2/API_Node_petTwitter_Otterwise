import { prisma } from "../helpers/utils.js";

/* List User Posts */

export const Userposts = async (req, res) => {
  const { id } = req.query;
  try {
    const listPostId = await prisma.post.findMany({
      take: 10,
      where: {
        authorId: Number(id),
      },
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
      orderBy: {
        created_at: "desc",
      },
    });
    return res.send(listPostId);
  } catch (error) {
    res
      .status(500)
      .send({ error: `Cannot Userposts posts ${error} ${Userposts}` });
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
      orderBy: {
        created_at: "desc",
      },
    });
    return res.send(results);
  } catch (error) {
    res.status(500).send({ error: `Cannot fetch posts ${error} ${results}` });
  }
};
