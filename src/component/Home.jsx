import { Link } from "react-router-dom";

const Home = () => {
  const handleClick = (lng) => {
    console.log(lng);
    localStorage.setItem("lng", lng);
  };

  return (
    <main className=" h-screen flex flex-col items-center justify-center bg-black text-white font-slabo">
      <div className="bg-img w-screen h-screen flex items-end justify-around gap-96 pb-60">
        <Link
          to="/english"
          className="backdrop-blur-xl bg-white  rounded-3xl font-light text-9xl text-black cursor-pointer py-12 px-20   hover:bg-white/30"
          onClick={() => handleClick("english")}
        >
          English
        </Link>
        <Link
          to="/arabic"
          className="backdrop-blur-xl bg-white rounded-3xl font-light text-9xl text-black cursor-pointer py-12 px-20   hover:bg-white/30"
          onClick={() => handleClick("arabic")}
        >
          عربي
        </Link>
      </div>

      {/* <Quiz /> */}
    </main>
  );
};

export default Home;
