const AuthLayout = ({ children }) => {
  return (
    <>
      <div className="flex justify-between gap-3 w-full min-h-screen h-full outline outline-1 outline-gray-100 rounded-md">
        <div className="flex flex-col items-end w-full sm:w-[55%] lg:container ms-auto p-3">
          <div className="w-full max-w-[700px]">
            <img className="w-40" src="/logo.svg" alt="Logo" />
            <div className="px-2 sm:px-16 w-full">
              <h1 className="mt-10 text-4xl font-sans text-zinc-700 font-semibold">
                Welcome to Learn2Earn
              </h1>
              {children}
            </div>
          </div>
        </div>
        <div className="hidden sm:block relative w-[45%]">
          <img
            className=" h-full w-full object-cover"
            src="/cubes.jpg"
            alt="Error"
          />
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
