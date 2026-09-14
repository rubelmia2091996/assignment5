export default function Navbar() {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-4 lg:px-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                            </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a className="text-pink-600 font-medium">Home</a></li>
                            <li><a>Technologies</a></li>
                            <li><a>Projects</a></li>
                            <li><a>About</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>

                    {/* Custom Brand Logo */}
                    <a className="flex items-center space-x-2 btn btn-ghost hover:bg-transparent px-0">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                            DS
                        </div>
                        <span className="text-xl font-bold tracking-tight text-base-content">
                            Dev <span className="text-pink-600">Stack</span>
                        </span>
                    </a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-1 font-medium text-gray-600">
                        <li><a className="text-pink-600 font-semibold bg-transparent hover:bg-transparent">Home</a></li>
                        <li><a className="hover:text-base-content bg-transparent hover:bg-transparent">Technologies</a></li>
                        <li><a className="hover:text-base-content bg-transparent hover:bg-transparent">Projects</a></li>
                        <li><a className="hover:text-base-content bg-transparent hover:bg-transparent">About</a></li>
                        <li><a className="hover:text-base-content bg-transparent hover:bg-transparent">Contact</a></li>
                    </ul>
                </div>

                <div className="navbar-end space-x-3">
                    <a className="btn btn-ghost text-gray-600 font-medium hover:bg-transparent">Sign In</a>
                    <a className="btn bg-pink-600 hover:bg-pink-700 text-white border-none rounded-full px-6 shadow-sm">Sign Up</a>
                </div>
            </div>
        </div>
    )
}