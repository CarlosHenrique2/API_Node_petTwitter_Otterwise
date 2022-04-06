import { prisma } from "../helpers/utils.js";

/* create posts and find the user's existence */

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
    res.status(500).send({ error: `Cannot create posts ${error} ${user}` });
  }
};

/* checking */

/* export const posts = async (req, res) => {
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
    res.status(500).send({ error: `Cannot posts ${error} ${posts}` });
  }
}; */

/* pagination home */

/* export const getPosts = async (req, res) => {
  try {
    let getposts = await prisma.post.findMany({
      where: {
        id,
      },
    });
    return res.send({ data: { getposts } });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ error: `Cannot getallPosts posts ${error} ${getPosts}` });
  }
}; */

/* pagination home */

/* export const getallPostsId = async (req, res) => {
  try {
    let posts = await prisma.post.findMany();
    return res.send({ data: { posts } });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ error: `Cannot getallPosts posts ${error} ${getallPostsId}` });
  }
}; */

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
    console.error(error);
    res
      .status(500)
      .send({ error: `Cannot remove posts ${error} ${removePost}` });
  }
};

/* UPDATE post  */

export const updatePost = async (req, res) => {
  const { authorId, text } = req.body;
  try {
    const postUpdate = await prisma.post.update({
      where: {
        authorId: authorId,
        text,
      },
    });
    return res.send(postUpdate);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ error: `Cannot remove posts ${error} ${updatePost}` });
  }
};
