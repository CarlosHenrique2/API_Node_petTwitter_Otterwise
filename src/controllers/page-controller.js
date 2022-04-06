import { prisma } from "../helpers/utils.js";

/* pagination home */

/* export const getallPosts = async (req, res) => {
  try {
    let getposts = await prisma.post.findMany({});
    return res.send({ data: { getposts } });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ error: `Cannot getallPosts posts ${error} ${getallPosts}` });
  }
}; */

/* pagination home */

/* export const getallID = async (req, res) => {
  try {
    let posts = await prisma.post.findMany({
      where: { id: +id },
    });
    return res.send({ data: { posts } });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ error: `Cannot getallPosts posts ${error} ${getallID}` });
  }
}; */

/* pagination config*/

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
