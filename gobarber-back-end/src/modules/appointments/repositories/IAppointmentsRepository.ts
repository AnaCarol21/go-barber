import Appointment from '../infra/typeorm/entities/Appointment';

interface IAppointmentsRepository {
  findByDate(date: Date): Promise<Appointment | undefined>;
}
