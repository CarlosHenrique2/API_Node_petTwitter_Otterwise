import { validateRequest } from "../middleware/auth.js";
import * as postscontroller from "../controllers/posts-controller.js";

export default {
  create: {
    method: "POST",
    url: "/posts",
    preHandler: [validateRequest],
    handler: postscontroller.create,
  },
  removePost: {
    method: "DELETE",
    url: "/posts",
    preHandler: [validateRequest],
    handler: postscontroller.removePost,
  },
  updatePost: {
    method: "PUT",
    url: "/posts",
    preHandler: [validateRequest],
    handler: postscontroller.updatePost,
  },
};
