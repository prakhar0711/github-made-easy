import Search from "../components/Search";
import SortRepos from "../components/SortRepos";

import Repos from "../components/Repos";
import Spinner from "../components/Spinner";
import Profile from "../components/Profile";

function HomePage() {
  return (
    <div className="m-4">
      <Search />
      <SortRepos />
      <div className="flex gap-4 flex-col lg:flex-row justify-center items-start">
        <Profile />
        <Repos />
        <Spinner />
      </div>
    </div>
  );
}

export default HomePage;
