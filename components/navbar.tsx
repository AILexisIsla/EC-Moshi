import { UserButton } from "@clerk/nextjs";
import { MainNav } from "./main-nav";


const Navbar = () => {
  return (
    <div className="border-b">
        <div className="flex h-16 items-center px-4">
        <div>
            esto va a ser un store swicher
        </div>
        <div>
            <MainNav className="mx-6"/>
        </div>
        <div className="ml-auto flex items-center space-x-4">
            <UserButton afterSignOutUrl="/" />
        </div>
        </div>
    </div>
  );
}

export default Navbar;
