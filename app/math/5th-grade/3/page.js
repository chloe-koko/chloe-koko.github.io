import SessionClient from '../SessionClient';
import { SESSIONS } from '../sessions-data';

const S = SESSIONS[2];

export const metadata = {
  title: `Session ${S.id}: ${S.title} — 5th Grade Practice`,
  description: S.description,
};

export default function Session3() {
  return <SessionClient session={S} prevId={2} nextId={4} />;
}
