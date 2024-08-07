import FetureList from "../components/FetureList";
import GetStarted from "../components/GetStarted";
import Landing from "../components/Landing";
import StayProductive from "../components/StayProductive";
import Testimonialos from "../components/Testimonialos";

function Home() {
  return (
    <>
      <Landing />
      <FetureList />
      <StayProductive />
      <Testimonialos />
      <GetStarted />
    </>
  );
}

export default Home;
