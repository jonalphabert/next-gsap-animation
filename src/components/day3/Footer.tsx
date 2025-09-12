import { Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#161617cc]  text-white py-2">
            <div className="container mx-auto text-center">
                <p>Just for learning purpose. Cloning apple website using GSAP</p>
                <div className="my-2 flex justify-center items-center text-sm gap-4">
                    <a href="https://github.com/jonalphabert" className="cursor-pointer w-3 ">      
                        <Github width={20} height={20}/>
                    </a>
                    <a href="https://www.linkedin.com/in/johnforjc/" className="cursor-pointer w-3 ">      
                        <Linkedin width={20} height={20}/>
                    </a>
                </div>
                <p className="text-xs">- Jonathan Alphabert Sutanto -</p>
            </div>
        </footer>
    );
}