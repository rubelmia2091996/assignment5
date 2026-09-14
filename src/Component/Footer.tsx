export default function Footer() {
    return (
        <div>
            <footer className="footer p-10 bg-base-100 text-base-content border-t border-base-200">
                <div className="max-w-7xl w-full mx-auto">


                    <div className="footer grid-cols-1 md:grid-cols-5 gap-8 mb-8">


                        <div className="md:col-span-2 space-y-4">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 rounded bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                                    DS
                                </div>
                                <span className="text-xl font-bold tracking-tight text-base-content">
                                    Dev <span className="text-pink-500">Stack</span>
                                </span>
                            </div>

                            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
                                Curated tools, technologies, and resources for developers building modern software.
                            </p>

                            <div className="flex space-x-4 text-sm font-semibold text-gray-700 pt-2">
                                <a href="#" className="hover:text-primary transition-colors">GitHub</a>
                                <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                                <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
                            </div>
                        </div>


                        <div>
                            <span className="footer-title text-xs font-bold uppercase tracking-wider text-gray-800 opacity-100 mb-3">PRODUCT</span>
                            <a className="link link-hover text-sm text-gray-500 hover:text-base-content">Home</a>
                            <a className="link link-hover text-sm text-gray-500 hover:text-base-content">Technologies</a>
                            <a className="link link-hover text-sm text-gray-500 hover:text-base-content">Projects</a>
                        </div>


                        <div>
                            <span className="footer-title text-xs font-bold uppercase tracking-wider text-gray-800 opacity-100 mb-3">COMPANY</span>
                            <a className="link link-hover text-sm text-gray-500 hover:text-base-content">About</a>
                            <a className="link link-hover text-sm text-gray-500 hover:text-base-content">Contact</a>
                            <a className="link link-hover text-sm text-gray-500 hover:text-base-content">Careers</a>
                        </div>


                        <div>
                            <span className="footer-title text-xs font-bold uppercase tracking-wider text-gray-800 opacity-100 mb-3">LEGAL</span>
                            <a className="link link-hover text-sm text-gray-500 hover:text-base-content">Privacy Policy</a>
                            <a className="link link-hover text-sm text-gray-500 hover:text-base-content">Terms of Service</a>
                        </div>

                    </div>


                    <div className="border-t border-gray-100 my-4"></div>


                    <div className="flex items-center justify-between text-xs text-gray-400 pt-2">
                        <p>© 2026 Dev Stack. All rights reserved.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:underline">Privacy</a>
                            <a href="#" className="hover:underline">Terms</a>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    )
}
