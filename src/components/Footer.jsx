import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import footer from "../API/Footer.json";

export const Footer =()=>{
    const footericons ={
        MdPlace: <MdPlace />,
        IoCallSharp: <IoCallSharp />,
        TbMailPlus: <TbMailPlus />,
    }
return(
    <div className="Footer-section">
        <div className="Footer-Container">
            <div className="grid grid-three-cols">
                
                {footer.map((curData)=>{
                        const{icon,title,details} = curData;
                    return (
                        <>
                     <div className="Footer-contact">   
                        <div className="icons">{footericons[icon]}</div>
                        <div className="footer-contact-text">
                           <p>{title}</p>
                           <p>{details}</p>
                        </div>
                    </div>
                        </>
                    )
                })}                
            </div>
        </div>
    </div>
)
}