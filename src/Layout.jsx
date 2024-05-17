// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <div className="min-h-screen h-full w-full">{children}</div>
    </>
  );
};

export default Layout;
