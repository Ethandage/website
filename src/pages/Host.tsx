const Host = () => {
    return (
        <>
            <div className="flex justify-between h-screen">
                <div className="w-[70%] overflow-hidden">
                    <img 
                        src="homePage/brc_images/form_screen.png" 
                        className="w-full h-auto"
                    />
                </div>
                <div className="w-[30%]">
                    <iframe
                        aria-label="HOST NATION"
                        className="w-full h-full border-none"
                        src="https://forms.zohopublic.in/brcpra1/form/HOSTNATION/formperma/C5COndCJ-Avb0bKbYqIDT5mJ1g1NFGjfgk1m-y8Xrt8"
                    ></iframe>
                </div>
            </div>
        </>
    );
};

export default Host;
