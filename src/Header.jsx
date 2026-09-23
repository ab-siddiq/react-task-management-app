import taskerLogo from "./assets/tasker-logo.svg";
export default function Header() {
  return (
    <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#8a97b5] z-50">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        {/* Logo  */}
        <a href="/">
          <img className="h-[45px]" src={taskerLogo} alt="Lws" />
        </a>
        {/* Logo Ends  */}
      </div>
    </nav>
  );
}
