import { rest } from 'msw';
import { faker } from '@faker-js/faker';

interface User {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}

interface RegistrationBody {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}

interface LoginBody {
  username: string;
  password: string;
}


let users: User[] = [];

export const handlers = [
  rest.post<RegistrationBody>('/api/register', (req, res, ctx) => {
    const { username, firstName, lastName, email, phone, password } = req.body;

    if (users.some(user => user.username === username || user.email === email)) {
      return res(
        ctx.status(400),
        ctx.json({ 
          success: false,
          message: 'Пользователь с таким именем или email уже существует' 
        })
      );
    }

    const newUser: User = {
      id: faker.string.uuid(),
      username,
      firstName,
      lastName,
      email,
      phone,
      password,
    };

    users.push(newUser);

    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        message: 'Регистрация прошла успешно',
        user: {
          id: newUser.id,
          username,
          firstName,
          lastName,
          email,
          phone,
          token: faker.string.uuid(),
        }
      })
    );
  }),

  rest.post<LoginBody>('/api/login', (req, res, ctx) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
      return res(
        ctx.status(401),
        ctx.json({ 
          success: false,
          message: 'Неверное имя пользователя или пароль' 
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        message: 'Вход выполнен успешно',
        user: {
          id: user.id,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          token: faker.string.uuid(),
        }
      })
    );
  }),
];