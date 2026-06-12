import FifthTOC from './FifthTOC';
import { SESSIONS } from './sessions-data';

export const metadata = {
  title: "5th Grade Practice — Math",
  description: "Ten practice sessions covering fractions, decimals, and area. 5th grade level.",
};

export default function FifthGradePage() {
  return <FifthTOC sessions={SESSIONS} />;
}
