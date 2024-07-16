'use client'

import React, { useState } from 'react';
import GenerateImage from '@/components/Generation/GenerateImage';
import ConnectWallet from '@/components/Generation/ConnetWallet';

function Header() {
    const [walletOpen, setWalletOpen] = useState(false)

    const handleWalletOpen = () => {
        setWalletOpen(!walletOpen)
    }

    return (
        <>
            <header className="absolute inset-x-0 top-0 z-10 w-full">
                <div className="px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20 gap-10">
                        <div className="flex-shrink-0 items-center">
                        <a href="#" title="" className="flex text-white text-3xl ">
                            NFT Art Generator
                        </a>
                        </div>
                        <div className="hidden lg:flex lg:items-center mt-2 lg:justify-center lg:space-x-10">
                        <a
                            href="#"
                            title=""
                            className="text-base items-baseline text-white transition-all duration-200 hover:text-opacity-80"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            title=""
                            className="text-base text-white transition-all duration-200 hover:text-opacity-80"
                        >
                            Explore
                        </a>
                        <a
                            href="#"
                            title=""
                            className="text-base text-white transition-all duration-200 hover:text-opacity-80"
                        >
                            Service
                        </a>
                        <a
                            href="#"
                            title=""
                            className="text-base text-white transition-all duration-200 hover:text-opacity-80"
                        >
                            Our NFTs
                        </a>
                        </div>
                        <div className="lg:flex lg:items-center lg:justify-end lg:space-x-6 sm:ml-auto">
                        <a
                            href="#"
                            title=""
                            className="hidden text-base text-white transition-all duration-200 lg:inline-flex hover:text-opacity-80"
                        >
                        </a>
                        <a
                            title=""
                            className="lg:flex hidden items-center justify-center px-3 sm:px-5 py-2.5 text-sm sm:text-base font-semibold transition-all duration-200 text-white bg-white/20 hover:bg-white/40 focus:bg-white/40 rounded-lg"
                            role="button"
                            onClick={handleWalletOpen}
                        >
                            Connect Wallet
                        </a>
                        </div>
                        <button
                        type="button"
                        className="inline-flex p-2 ml-1 text-white transition-all duration-200 rounded-md sm:ml-4 lg:hidden focus:bg-gray-800 hover:bg-gray-800"
                        >
                        <svg
                            className="block w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                        <svg
                            className="hidden w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                        </button>
                    </div>
                </div>
            </header>
            
            {walletOpen && (
                <ConnectWallet setWalletOpen = {setWalletOpen} />
            )}

        </>
    )
}

export default Header;