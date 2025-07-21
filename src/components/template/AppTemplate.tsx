import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

interface AppTemplateProps {
  children: React.ReactNode;
}

const AppTemplate: React.FC<AppTemplateProps> = ({ children }) => {
    useEffect(() => {
        const lenis = new Lenis();
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }, []);
    return (
        <div className="block w-full m-0 p-0">{children}</div>
    )
}

export default AppTemplate; 