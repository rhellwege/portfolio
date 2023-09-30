interface SectionTitle {
    title: string;
    img: string;
};
interface Props {
    sections: SectionTitle[];
    active: string;
};

import React, {useState} from 'react';
import Hamburger from 'hamburger-react';

// active is the currently active page
const HamburgerNav = (props: Props) => { 
    const [isOpen, setOpen] = useState(false);
    const [menuClass, setMenuClass] = useState("invisible");
    const [backgroundClass, setBackgroundClass] = useState("m-0");

    const handleToggle = (toggled: boolean) => {
        if (toggled) {
            setOpen(true);
            setMenuClass("visible");
            setBackgroundClass("mb-[--vertical-height]");
        }
        else {
            setOpen(false);
            setMenuClass("invisible");
            setBackgroundClass("m-0");
        }
    };

    const links = props.sections.map((s) => (
        <div className="w-full h-full">
            <a className="" href={`${s.title === "Home" ? "/" : s.title}`}>
                <div className={`w-full ${(s.title === props.active) ? "text-[--primary-normal]" : "text-white"}  duration-150 text-center p-2 rounded-lg
                            ${(s.title === props.active) ? "bg-white" : "bg-[--black]"} border-[--secondary-normal] focus:border-[--secondary-focused] border-2 flex justify-between text-lg`}>
                    <p>{s.title}</p>
                    <img className="fill-white" src={s.img} alt=""></img>
                </div>
            </a>
        </div>)
    ); 

    return (
        <nav className={backgroundClass + " p-6 fixed visible md:invisible z-20 w-full h-[--vertical-height]"}>
            <Hamburger rounded size={50} onToggle={handleToggle} />
            <div className={menuClass + " w-full mt-1 shadow-xl"}>
                {links}     
            </div>
        </nav>
        // {isOpen && <p>HELLO</p>}
    );
}

export default HamburgerNav;
