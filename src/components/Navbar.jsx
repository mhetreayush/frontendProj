import NavButton from "./NavButton/NavButton";
import SearchBar from "./SearchBar";
const NavBar = () => {

  return (
    <div>
      <div className="flex flex-col gap-y-3 w-full pt-5 bg-white">
        <div className="flex justify-between px-3 w-full">
          <div className="flex gap-x-2 items-center font-extrabold text-2xl">
            <h1>Projects</h1>
          </div>
          <div className="w-2/4">
            <SearchBar />
          </div>
        </div>

        <div className="border-b-2 text-center pt-8 pb-2">
          <NavButton />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
