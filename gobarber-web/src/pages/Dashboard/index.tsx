import React, { useState } from 'react';
import { FiPower, FiClock } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';
import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />
          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <Schedule>
          <h1>Horários agendados</h1>

          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-Feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://avatars1.githubusercontent.com/u/62665967?s=460&u=0286bf1a831f762c4268b9babe6d1955a0ce70b9&v=4"
                alt="Ana Lima"
              />
              <strong>Ana Lima</strong>
              <span>
                <FiClock /> 8:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>
            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="https://avatars1.githubusercontent.com/u/62665967?s=460&u=0286bf1a831f762c4268b9babe6d1955a0ce70b9&v=4"
                  alt="Ana Lima"
                />
                <strong>Ana Lima</strong>
                <span>
                  <FiClock /> 8:00
                </span>
              </div>
            </Appointment>
            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="https://avatars1.githubusercontent.com/u/62665967?s=460&u=0286bf1a831f762c4268b9babe6d1955a0ce70b9&v=4"
                  alt="Ana Lima"
                />
                <strong>Ana Lima</strong>
                <span>
                  <FiClock /> 8:00
                </span>
              </div>
            </Appointment>
            <strong>Tarde</strong>
            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="https://avatars1.githubusercontent.com/u/62665967?s=460&u=0286bf1a831f762c4268b9babe6d1955a0ce70b9&v=4"
                  alt="Ana Lima"
                />
                <strong>Ana Lima</strong>
                <span>
                  <FiClock /> 8:00
                </span>
              </div>
            </Appointment>
            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="https://avatars1.githubusercontent.com/u/62665967?s=460&u=0286bf1a831f762c4268b9babe6d1955a0ce70b9&v=4"
                  alt="Ana Lima"
                />
                <strong>Ana Lima</strong>
                <span>
                  <FiClock /> 8:00
                </span>
              </div>
            </Appointment>
            <Appointment />
          </Section>

          <Calendar />
        </Schedule>
      </Content>
    </Container>
  );
};

export default Dashboard;
