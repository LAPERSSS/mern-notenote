import g1 from "../../assets/g1.jpg";
import g2 from "../../assets/g2.jpg";
import g3 from "../../assets/g3.jpg";
import g4 from "../../assets/g4.jpg";
import g5 from "../../assets/g5.png";
import g6 from "../../assets/g6.jpg";

const home = () => {
  return (
    <>
      <section className="cardMain items-center justify-center p-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
        <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
          <img src={g1} alt="" className="" />
          <div className="absolute flex h-full w-full justify-center items-center bg-black/80 -translate-y-[100%] font-main text-5xl opacity-0 hover:opacity-100 text-color-accent  ease-out transition-all">
            Fisika
          </div>
        </div>
        <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
          <img src={g2} alt="" className="" />
          <div className="absolute flex h-full w-full justify-center items-center bg-black/80 -translate-y-[100%] font-main text-5xl opacity-0 hover:opacity-100 text-color-accent  ease-out transition-all">
            Biologi
          </div>
        </div>
        <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
          <img src={g3} alt="" className="" />
          <div className="absolute flex h-full w-full justify-center items-center bg-black/80 -translate-y-[100%] font-main text-5xl opacity-0 hover:opacity-100 text-color-accent  ease-out transition-all">
            Matematika
          </div>
        </div>
        <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
          <img src={g4} alt="" className="" />
          <div className="absolute flex h-full w-full justify-center items-center bg-black/80 -translate-y-[100%] font-main text-5xl opacity-0 hover:opacity-100 text-color-accent  ease-out transition-all">
            Kimia
          </div>
        </div>
        <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
          <img src={g5} alt="" className="" />
          <div className="absolute flex h-full w-full justify-center items-center bg-black/80 -translate-y-[100%] font-main text-5xl opacity-0 hover:opacity-100 text-color-accent  ease-out transition-all">
            Agama
          </div>
        </div>
        <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
          <img src={g6} alt="" className="" />
          <div className="absolute flex h-full w-full justify-center items-center bg-black/80 -translate-y-[100%] font-main text-5xl opacity-0 hover:opacity-100 text-color-accent  ease-out transition-all">
            Filsafat
          </div>
        </div>
      </section>
    </>
  );
};

export default home;
