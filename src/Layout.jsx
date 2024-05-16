// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <div className="lg:container mx-auto flex justify-center items-center h-full min-h-screen w-full">
        {children}
      </div>
    </>
  );
};

export default Layout;
