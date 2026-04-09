import { useNavigate } from "react-router-dom";

// Sub-components for the Dashboard layout
const Frame = () => (
  <div className="absolute top-0 left-0 w-[245px] h-[1024px] bg-white shadow-sm">
    {/* Sidebar content placeholder */}
  </div>
);

const Nav = () => (
  <nav className="absolute top-0 left-0 w-full h-[83px] bg-white shadow-sm flex items-center px-10">
    <div className="flex items-center gap-2">
      <div 
        className="w-[25.5px] h-[25.96px] rounded-full"
        style={{ 
          background: 'linear-gradient(185.79deg, rgba(79, 70, 229, 0.9) 4.61%, #38BDF8 58.82%, rgba(56, 189, 248, 0.9) 100.99%)',
          transform: 'rotate(28.76deg)'
        }}
      />
      <span className="[font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3acc] text-[22.6px]">
        DIAG
      </span>
    </div>
  </nav>
);

const FrameWrapper = () => (
  <div className="absolute top-[189px] left-[245px] w-[1035px] h-[400px] bg-white rounded-lg shadow-sm p-6">
    {/* Main content area placeholder */}
  </div>
);

const DivWrapper = () => (
  <div className="absolute top-[123px] right-[40px] flex items-center gap-4">
    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium">
      A
    </div>
  </div>
);

const Div = () => (
  <div className="absolute top-[609px] left-[245px] w-[1035px] h-[300px] bg-white rounded-lg shadow-sm p-6">
    {/* Secondary content area placeholder */}
  </div>
);

export const Dashboard = (): JSX.Element => {
  return (
    <div className="bg-gray-50 w-full min-w-[1280px] min-h-[1024px] relative">
      <Frame />
      <Nav />
      <div className="absolute top-[123px] left-[245px] [font-family:'Montserrat',Helvetica] font-medium text-[#3a3a3ae6] text-2xl tracking-[0] leading-[normal]">
        Welcome Adebanjo
      </div>

      <FrameWrapper />
      <DivWrapper />
      <Div />
    </div>
  );
};
