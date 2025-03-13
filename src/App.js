import Header from "./component/Header";
import Invitation from "./component/Invitation";
import Countdown from "./component/Countdown";



export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Header />
      <Invitation />
      <Countdown />
    </div>
  );
}
