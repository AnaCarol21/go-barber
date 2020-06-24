import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
import AppError from '@shared/errors/AppError';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appoinment.', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '9873156',
    });
    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('9873156');
  });

  it('should not be able to create two appoinments on the same date.', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointmentDate = new Date(2020, 4, 10, 11);

    await createAppointment.execute({
      date: appointmentDate,
      provider_id: '9873156',
    });

    expect(
      createAppointment.execute({
        date: appointmentDate,
        provider_id: '9873156',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});