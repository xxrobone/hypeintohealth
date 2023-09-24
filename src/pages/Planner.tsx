import ExercisePlanner from "../components/exercisePlanner/ExericisePlanner";

const Planner = () => {
  return (
    <main className='flex flex-col items-center bg-slate-400 text-black box-border lg:w-2/3 lg:mx-auto'>
      <h1 className='mt-16 mb-4 py-2 bg-gradient-to-tr from-yellow-600 via-purple-800 to-orange-700 bg-clip-text text-transparent drop-shadow-xl font-extrabold body-font font-black text-2xl md:text-4xl'>
        The exercise planner
          </h1>
          <ExercisePlanner />
    </main>
  );
};

export default Planner;