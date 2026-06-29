function Navbar() {
    return (
        <nav className="bg-white p-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-royal-purple font-inter text-xl">Logo</div>
                <div className="flex items-center space-x-6">
                    <a href="/" className="relative group text-royal-purple text-sm font-inter py-1">Home <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-royal-purple transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span></a>
                    <a href="/gallery" className="relative group text-royal-purple text-sm font-inter py-1">Gallery <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-royal-purple transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span></a>
                    <a href="/prices" className="relative group text-royal-purple text-sm font-inter py-1">Prices <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-royal-purple transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span></a>
                    <a href="/contact" className="relative group text-royal-purple text-sm font-inter py-1">Contact <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-royal-purple transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span></a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar