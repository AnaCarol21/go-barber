import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import AppError from '@shared/errors/AppError';
import SendForgotPasswordEmailService from './SendForgotPasswordEmailService';

describe('SendForgotPasswordEmail', () => {
  it('should be able to recover the password using the email.', async () => {
    const fakeUsersRepository = new FakeUsersRepository();

    const createUser = new SendForgotPasswordEmailService(fakeUsersRepository);

    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });
});
