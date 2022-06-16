import { Divide } from "./Divider";

const Page = ({ children, couunt }) => {
  return (
    <div className="page-body">
      <Divide color="darkgray" />
      {children}
      <Divide color="darkgray" />
    </div>
  );
};

export default Page;
