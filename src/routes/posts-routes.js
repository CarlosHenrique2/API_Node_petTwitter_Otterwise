import { validateRequest } from "../middleware/auth.js";
import * as postscontroller from "../controllers/posts-controller.js";

export default {
  create: {
    method: "POST",
    url: "/posts",
    preHandler: [validateRequest],
    handler: postscontroller.create,
  },
  index: {
    method: "GET",
    url: "/posts",
    preHandler: [validateRequest],
    handler: postscontroller.index,
  },
};
