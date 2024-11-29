import { useNavigate } from 'react-router-dom';


const Footer = () => {

    const navigate = useNavigate();

    const handleButtonPrivacyClick = () => {
        navigate('/privacy-policy');
        window.scrollTo(0, 0);
    };

    const handleButtonCookieClick = () => {
        navigate('/cookie-policy');
        window.scrollTo(0, 0);
    }

    return (
        <>
            <footer className="font-sui bg-[#262626] text-opacity-65 text-white text-xs leading-tight text-[min(1.4vh,0.7vw)]">
                <div className="max-w-[78vw] mx-auto py-[2vh] px-[3vw] relative w-full">
                    <div className="border-b border-opacity-50 border-[#3f3c3d] pb-4">
                        <p>
                            Disclaimer:<br />
                            All information, including event details, rules, and schedules, is subject to change without notice.
                            Images are for illustrative purposes only and may not depict actual events or products.
                            Viewer discretion is advised.
                        </p>
                    </div>
                    <div className="flex space-x-4 pt-[2vh]">
                        <a onClick={handleButtonCookieClick} className="text-white hover:underline text-opacity-65 cursor-pointer">
                            Cookies Policy
                        </a>
                        <a onClick={handleButtonPrivacyClick} className="text-white hover:underline text-opacity-65 cursor-pointer">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
