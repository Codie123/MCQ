import { Link } from "react-router-dom";

const Home = () => {
  const handleClick = (lng) => {
    console.log(lng);
    localStorage.setItem("lng", lng);
  };
  const handleRightClick = (e) => {
    e.preventDefault();
  };

  return (
    <main
      onContextMenu={handleRightClick}
      className=" h-screen flex flex-col items-center justify-center bg-white text-white font-slabo"
    >
      <div className="bg-img w-screen h-screen flex items-end justify-end pr-24 gap-96 pb-60">
        <Link
          to="/start"
          className="backdrop-blur-xl bg-transparent border-2 border-tintgreen rounded-3xl font-light text-9xl text-white cursor-pointer py-12 px-20 hover:bg-tintgreen  animate-pulse hover:animate-none "
          onClick={() => handleClick("english")}
        >
          Take The Quiz
        </Link>
      </div>

      {/* <Quiz /> */}
    </main>
  );
};

export default Home;
