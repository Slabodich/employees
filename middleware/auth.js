const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const auth = async (res, req, next) => {
  try {
    const token = req.header.autarization?.split('.')[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await prisma.user.findUnique({
      where: {
        id: decoded.id,
      },
    });

    req.user = user;

    next();
  } catch (error) {
    res.status(401).json({ message: 'Не авторизован' });
  }
};

module.exports = {
  auth,
};
