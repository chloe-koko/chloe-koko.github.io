import SessionClient from '../SessionClient';
import { SESSIONS } from '../sessions-data';

const S = SESSIONS[3];

export const metadata = {
  title: `Session ${S.id}: ${S.title} — 5th Grade Practice`,
  description: S.description,
};

export default function Session4() {
  return <SessionClient session={S} prevId={3} nextId={5} />;
}
