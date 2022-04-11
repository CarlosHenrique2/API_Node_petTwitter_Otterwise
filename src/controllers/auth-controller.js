import {
  comparePassword,
  createAccessToken,
  hashPassword,
  prisma,
} from "../helpers/utils.js";

export const signup = async (req, reply) => {
  const { email, name, username, password: pass } = req.body;

  try {
    const password = await hashPassword(pass);

    const { password: hashedPassword, ...user } = await prisma.user.create({
      data: {
        name,
        email,
        username,
        password,
      },
    });

    reply.send(user);
  } catch (error) {
    reply.status(400).send({ error: `User already exists!` });
  }
};

export const login = async (req, reply) => {
  try {
    const { email, password } = req.body;
    let user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return reply.status(401).send({ error: "Invalid email or password" });
    }

    if (!(await comparePassword(password, user.password))) {
      return reply.status(401).send({ error: "Invalid email or password" });
    }

    let { password: pass, ...data } = user;
    return reply.send({
      user: data,
      accessToken: await createAccessToken(data),
    });
  } catch (error) {
    reply.status(500).send({ error: "Server error!" });
  }
};
