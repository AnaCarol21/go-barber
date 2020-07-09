import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
// import AppError from '@shared/errors/AppError';
import CreateAppointmentService from './CreateAppointmentService';

let fakeUsersRepository: FakeUsersRepository;
let createAppointment: CreateAppointmentService;
describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );
  });
  it('should be able to create a new appoinment.', async () => {
    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '9873156',
    });
    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('9873156');
  });
});
