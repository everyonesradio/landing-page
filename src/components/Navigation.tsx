'use client'
import { useRouter } from "next/navigation";
import { VscFolderOpened, VscTools, VscInfo, VscMusic  } from "react-icons/vsc";

const Navigation = () => {
 const router = useRouter();
  
 return (
  <>
    <nav className="absolute md:w-auto w-full top-0 left-0 my-5 md:justify-start md:mx-7">
      <ul className="flex flex-row m-0 md:flex-col justify-around">
        <li className="relative my-4 group" onClick={() => router.push('/')}>
          <div className="flex items-center">
            <div className="icon-background">
              <VscFolderOpened size={20} />
            </div>
            <span className="ml-2 text-white bg-black p-2 md:group-hover:block text-sm hidden pointer-events-none">./home</span>
          </div>
        </li>
        <li className="relative my-4 group" onClick={() => router.push('/music-apis')}>
          <div className="flex items-center">
            <div className="icon-background">
              <VscMusic size={20} />
            </div>
            <span className="ml-2 text-white bg-black p-2 md:group-hover:block text-sm hidden pointer-events-none">./music apis</span>
          </div>
        </li>
        <li className="relative my-4 group" onClick={() => router.push('/projects')}>
          <div className="flex items-center">
            <div className="icon-background">
              <VscTools size={20} />
            </div>
            <span className="ml-2 text-white bg-black p-2 md:group-hover:block text-sm hidden pointer-events-none">./projects</span>
          </div>
        </li>
        <li className="relative my-4 group" onClick={() => router.push('/about')}>
          <div className="flex items-center">
            <div className="icon-background">
              <VscInfo size={20} />
            </div>
            <span className="ml-2 text-white bg-black p-2 md:group-hover:block text-sm hidden pointer-events-none">./about</span>
          </div>
        </li>
      </ul>
    </nav>
  </>
 );
};

export default Navigation;