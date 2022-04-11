import { prisma } from "../helpers/utils.js";

/* create posts and find the user's existence */

export const create = async (req, res) => {
  const { text } = req.body;
  const { id } = req.user;
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });
    if (!user) {
      throw new Error("usuario não existente");
    }
    const post = await prisma.post.create({
      data: {
        text,
        authorId: id,
      },
    });
    return res.send(post);
  } catch (error) {
    res.status(500).send({ error: `Cannot create posts ${error} ${create}` });
  }
};

/* get all posts */

export const getallPosts = async (req, res) => {
  try {
    let postsGet = await prisma.post.findMany();
    return res.send(postsGet);
  } catch (error) {
    res
      .status(500)
      .send({ error: `Cannot getallPosts posts ${error} ${getallPosts}` });
  }
};

/* DELETE bye id */

export const removePost = async (req, res) => {
  const { id } = req.body;
  try {
    const post = await prisma.post.delete({
      where: {
        id: id,
      },
    });
    return res.send(post);
  } catch (error) {
    res
      .status(500)
      .send({ error: `Cannot remove posts ${error} ${removePost}` });
  }
};

/* UPDATE post  */

export const updatePost = async (req, res) => {
  const { id, authorId, text } = req.body;
  try {
    const postUpdate = await prisma.post.update({
      where: {
        id: id,
      },
      data: {
        authorId,
        text,
      },
    });
    return res.send(postUpdate);
  } catch (error) {
    res
      .status(500)
      .send({ error: `Cannot remove posts ${error} ${updatePost}` });
  }
};
