'use client'
import { useRouter } from "next/navigation";
import { VscFolderOpened, VscTools, VscInfo } from "react-icons/vsc";

const Navigation = () => {
 const router = useRouter();
  
 return (
  <>
    <nav>
      <ul className="flex flex-col">
        <li className="relative my-4">
          <div className="flex items-center group">
            <div className="icon-background">
              <VscFolderOpened onClick={() => router.push('/')} size={20} />
            </div>
            <span className="ml-2 invisible group-hover:visible">./home</span>
          </div>
        </li>
        <li className="relative my-4 group">
          <div className="flex items-center">
            <div className="icon-background">
              <VscTools onClick={() => router.push('/music-apis')} size={20} />
            </div>
            <span className="ml-2 invisible group-hover:visible">./music apis</span>
          </div>
        </li>
        <li className="relative my-4 group">
          <div className="flex items-center">
            <div className="icon-background">
              <VscInfo onClick={() => router.push('/about')} size={20} />
            </div>
            <span className="ml-2 invisible group-hover:visible">./about</span>
          </div>
        </li>
      </ul>
    </nav>
  </>
 );
};

export default Navigation;