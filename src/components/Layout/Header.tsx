import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Header = () =>
{
  const navigate = useNavigate();

  const handleButtonHostClick = () =>
  {
    navigate('/host-nation');
  };
  const handleButtonMediaClick = () =>
  {
    navigate('/media');
  };
  const handleButtonResearcherClick = () =>
  {
    navigate('/researcher-engineer');
  };
  const handleButtonSponsordClick = () =>
  {
    navigate('/sponsors');
  };

  const handleButtonJoinClick = () =>
  {
    navigate('/join');
  };

  const handleButtonFranchiseClick = () =>
  {
    navigate('/franchise-owner');
  };

  const [menuOpen,setMenuOpen] = useState(false);

  return (
    <div>
      {/* Desktop */}
      <nav role="navigation" className="flex mdMobile:hidden z-50 font-sui font-[400] text-[#222222] leading-[1.5rem] tracking-[-0.02rem] w-full pl-[2.5rem] pr-[0.625rem] 
      flex-row justify-around relative bg-white">
        <div className="items-center pt-[1.2rem] pl-[1rem] flex-none inline-block max-w-full align-middle">
          <img src="/header/brcLogo.svg" loading="lazy" alt="" className="object-cover w-[6vw] h-[3vh] align-middle max-w-full" />
        </div>
        <div className="gap-[2rem] row-gap-[1.5rem] items-center flex cursor-pointer text-[min(2.5vh,1.25vw)]">
          <a onClick={ handleButtonFranchiseClick } className="text-left border-b-2 border-t-2 border-transparent mx-0 py-[1.125rem] 
          transition-colors hover:border-b-black">
            Franchise owner
          </a>
          <a onClick={ handleButtonResearcherClick } className="text-left border-b-2 border-t-2 border-transparent mx-0 py-[1.125rem] 
          transition-colors hover:border-b-black">
            Researcher/Engineer
          </a>
          <a onClick={ handleButtonMediaClick } className="text-left border-b-2 border-t-2 border-transparent mx-0 py-[1.125rem] 
          transition-colors hover:border-b-black">
            Media
          </a>
          <a onClick={ handleButtonHostClick } className="text-left border-b-2 border-t-2 border-transparent mx-0 py-[1.125rem] 
          transition-colors hover:border-b-black">
            Host
          </a>
          <a onClick={ handleButtonSponsordClick } className="text-left border-b-2 border-t-2 border-transparent mx-0 py-[1.125rem] 
          transition-colors hover:border-b-black">
            Sponsors
          </a>
          <a onClick={ handleButtonJoinClick } className="inline-flex justify-center items-center min-w-[80px] min-h-[40px] p-[0.3rem] px-[2rem] gap-[0.5rem] border-[1px]
          border-transparent rounded-full bg-[#0070d5] text-white leading-none transition-colors duration-200 hover:bg-[rgba(0,112,213,0.75)]">
            <div className="">JOIN</div>
          </a>
        </div>
      </nav>

      { /* Mobile */ }
      <nav role="navigation" className="hidden mdMobile:flex z-50 font-sui font-[400] text-[#222222] leading-[1.5rem] tracking-[-0.02rem] w-full relative bg-white
      flex-col">
        <div className={` flex flex-row z-50 w-full h-[35px] bg-white border-b transition-colors duration-700 ease-in-out ${menuOpen ? "border-[#dadada]" : "border-white"}`}>
          <div className="relative w-[6vw] h-[5vh]  p-[0.25vw] mx-[2vw] cursor-pointer" onClick={() => setMenuOpen((prev) => !prev)}>
            <div className={`absolute top-[9px] left-[4px] w-[24px] h-[2px] bg-black rounded-full
            transition-all ease-in-out ${menuOpen ? "animate-moveRotUpToCenter" : "animate-moveRotCenterToUp"}`}></div>
            <div className={`absolute top-[17px] left-[4px] w-[24px] h-[2px] bg-black rounded-full
            transition-all duration-100 ease-in-out ${menuOpen ? "opacity-0" : "opacity-100"}`}></div>
            <div className={`absolute top-[25px] left-[4px] w-[24px] h-[2px] bg-black rounded-full
            transition-all ease-in-out ${menuOpen ? "animate-moveRotDownToCenter" : "animate-moveRotCenterToDown"}`}></div>
          </div>
        </div>

        <div className={`z-40 absolute top-[19px] w-full h-auto mt-[1rem] pt-[1rem] pb-[0.5rem] bg-white
        transition-transform duration-[400ms] ease-in-out transform ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}>
          <div className="flex items-center justify-center max-w-full">
            <img src="/header/brcLogo.svg" loading="lazy" alt="" className="object-cover w-[95px] h-[26px] max-w-full" />
          </div>
          <div className="flex flex-col items-center cursor-pointer max-w-full text-[min(5vh,2.5vw)]">
            <a onClick={ handleButtonFranchiseClick } className="w-full text-left mx-0 p-[1rem]">
              Franchise owner
            </a>
            <a onClick={ handleButtonResearcherClick } className="w-full text-left mx-0 p-[1rem]">
              Researcher/Engineer
            </a>
            <a onClick={ handleButtonMediaClick } className="w-full text-left mx-0 p-[1rem]">
              Media
            </a>
            <a onClick={ handleButtonHostClick } className="w-full text-left mx-0 p-[1rem]">
              Host
            </a>
            <a onClick={ handleButtonSponsordClick } className="w-full text-left mx-0 p-[1rem]">
              Sponsors
            </a>
            <a onClick={ handleButtonJoinClick } className="inline-flex justify-center items-center p-[0.5rem] px-[1rem] gap-[0.5rem] border-[1px]
            border-transparent rounded-full bg-[#0070d5] text-white leading-none transition-colors duration-200 hover:bg-[rgba(0,112,213,0.75)]">
              <div className="">JOIN</div>
            </a>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default Header;