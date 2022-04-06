import { prisma } from "../helpers/utils.js";

export const create = async (req, res) => {
  const { text, authorId } = req.body;
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: authorId,
      },
    });
    if (!user) {
      throw new Error("usuario não existente");
    }
    const post = await prisma.post.create({
      data: {
        text,
        authorId,
      },
    });
    console.log(post);
    return res.send({ data: { post } });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: `Cannot fetch posts` });
  }
};

export const posts = async (req, res) => {
  const { text, authorId } = req.body;
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: authorId,
      },
    });
    return res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: `Cannot fetch posts` });
  }
};

export const getallPosts = async (req, res) => {
  const { text, authorId } = req.body;
  try {
    const user = await prisma.user.findMany({
      where: {
        id: authorId,
      },
    });
    return res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: `Cannot fetch posts` });
  }
};

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
    res.status(500).send({ error: `Cannot fetch posts` });
  }
};
