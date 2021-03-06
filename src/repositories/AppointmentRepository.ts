import Appointment from "../models/Appointments";
import { isEqual } from 'date-fns'

interface CreateAppointmentDTO {
  provider:string;
  date:Date;
}

class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public all() {
    return this.appointments
  }

  public findByDate(date:Date):Appointment | null {
    const findAppointment =this.appointments.find(appointment => isEqual( appointment.date,date ) );

    return findAppointment || null
  }

  public create({ provider, date }: CreateAppointmentDTO):Appointment {
    const newAppointment = new Appointment({provider,date} );

    this.appointments.push(newAppointment);

    return newAppointment;

  }
}

export default AppointmentsRepository;
