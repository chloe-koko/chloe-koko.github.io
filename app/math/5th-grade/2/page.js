import SessionClient from '../SessionClient';
import { SESSIONS } from '../sessions-data';

const S = SESSIONS[1];

export const metadata = {
  title: `Session ${S.id}: ${S.title} — 5th Grade Practice`,
  description: S.description,
};

export default function Session2() {
  return <SessionClient session={S} prevId={1} nextId={3} />;
}
