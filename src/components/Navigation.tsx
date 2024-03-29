'use client'
import { useRouter } from "next/navigation";
import { VscFolderOpened, VscTools, VscInfo, VscMusic  } from "react-icons/vsc";

const Navigation = () => {
 const router = useRouter();
  
 return (
  <>
    <nav>
      <ul className="flex flex-col">
        <li className="relative my-4" onClick={() => router.push('/')}>
          <div className="flex items-center group">
            <div className="icon-background">
              <VscFolderOpened size={20} />
            </div>
            <span className="ml-2 text-white bg-black p-2 invisible group-hover:visible">./home</span>
          </div>
        </li>
        <li className="relative my-4 group" onClick={() => router.push('/music-apis')}>
          <div className="flex items-center">
            <div className="icon-background">
              <VscMusic size={20} />
            </div>
            <span className="ml-2 text-white bg-black p-2 invisible group-hover:visible">./music apis</span>
          </div>
        </li>
        <li className="relative my-4 group" onClick={() => router.push('/projects')}>
          <div className="flex items-center">
            <div className="icon-background">
              <VscTools size={20} />
            </div>
            <span className="ml-2 text-white bg-black p-2 invisible group-hover:visible">./projects</span>
          </div>
        </li>
        <li className="relative my-4 group" onClick={() => router.push('/about')}>
          <div className="flex items-center">
            <div className="icon-background">
              <VscInfo size={20} />
            </div>
            <span className="ml-2 text-white bg-black p-2 invisible group-hover:visible">./about</span>
          </div>
        </li>
      </ul>
    </nav>
  </>
 );
};

export default Navigation;