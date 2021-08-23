export default function generateDay() {
  const day = new Date().getDay().toString();
  switch (day) {
    case '0':
      return <span>Sunday</span>;
    case '1':
      return <span>Monday</span>;
    case '2':
      return <span>Tuesday</span>;
    case '3':
      return <span>Wednesday</span>;
    case '4':
      return <span>Thursday</span>;
    case '5':
      return <span>Friday</span>;
    case '6':
      return <span>Saturday</span>;
    default:
      return null;
  }
}
