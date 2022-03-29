import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { PrismaClient } = require("@prisma/client");
import { compare, genSaltSync, hash } from "bcrypt";
import jwt from "jsonwebtoken";

export const envs = {
  JWT_SECRET: process.env.JWT_SECRET || "secret123",
  PORT: process.env.PORT || 3000,
};

export const prisma = new PrismaClient();

export const hashPassword = (password) => {
  let salt = genSaltSync(10);
  return new Promise((res) => {
    hash(password, salt, (err, saltedPassword) => {
      res(saltedPassword);
    });
  });
};

export const comparePassword = (password, hashedPassword) => {
  return new Promise((res) => {
    compare(password, hashedPassword, (err, same) => {
      if (err) res(false);
      else res(same);
    });
  });
};

export const createAccessToken = (data) => {
  return new Promise((res, rej) => {
    jwt.sign(data, envs.JWT_SECRET, {}, (err, token) => {
      if (err) rej(err);
      res(token);
    });
  });
};

export const verifyToken = (token) => {
  return new Promise((res, rej) => {
    if (!token) {
      rej("invalid token");
      return;
    }

    jwt.verify(token, envs.JWT_SECRET, {}, (err, decoded) => {
      if (err) {
        rej("invalid token");
        return;
      }
      res(decoded);
    });
  });
};
