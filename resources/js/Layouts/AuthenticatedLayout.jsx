import { Link, usePage } from '@inertiajs/react';
import anime from 'animejs';
import { useState } from 'react';
import logo from "/public/joenathan.svg"

export default function AuthenticatedLayout({ children }) {
    const user = usePage().props.auth.user;
    const [isNavOpen, setIsNavOpen] = useState(false)

    const interactNav = () => {
        setIsNavOpen(!isNavOpen)
        if (isNavOpen) {
            anime({
                targets: ".navigation",
                translateX: "-200vh",
                easing: "easeOutExpo",
                duration: 500
            })
            anime({
                targets: ".overlay",
                translateX: "200vh",
                easing: "easeOutExpo",
                duration: 200
            })
        } else {
            anime({
                targets: ".navigation",
                translateX: "0vh",
                easing: "easeOutExpo",
                duration: 500
            })
            anime({
                targets: ".overlay",
                translateX: "0vh",
                easing: "easeOutExpo",
                duration: 200
            })
        }
    }

    return (
        <>
            <div onClick={interactNav} className='overlay fixed lg:w-screen lg:h-screen opacity-70 hidden lg:block' style={{ background: "#2A2A2A", transform: "translateX(200vh)" }} />
            <nav className='navigation lg:1/5 xl:w-1/6 flex flex-col w-screen h-full fixed p-5 shadow-2xl' style={{ transform: "translateX(-200vh)", background: "#2A2A2A" }}>
                <img src={logo} alt="Joe's Blog" />
                <Link href="/dashboard" className='text-white text-center text-xl p-2 w-full'>Dashboard</Link>
                <Link href="/blog" className='text-white text-center text-xl p-2 w-full'>Explore</Link>
                <Link href="/profile" className='text-white text-center text-xl p-2 w-full'>Profile</Link>
                <div className='w-full flex justify-center'>
                    <button onClick={interactNav} className='text-white text-xl p-2 xl:hidden bottom-12 fixed'>Close</button>
                    <Link href='/logout' method='POST' className='text-red-500 text-center text-xl p-2 w-full bottom-0 fixed'>Logout</Link>
                </div>
            </nav>
            <div className='flex flex-col w-screen justify-center'>
                <header className='w-full  p-5 flex justify-between flex-row'>
                    <div className='flex gap-1 mt-2 text-white'>
                        <span className='hidden md:block'>Welcome back,</span><span className='block md:hidden'>👋</span>{user.name}
                    </div>
                    <button onClick={interactNav} style={{ background: "#00A368" }} className='rounded-full p-2 duration-300 '>
                        <img className='w-5 h-5' src="https://img.icons8.com/?size=100&id=8113&format=png&color=000000" alt="" />
                    </button>
                </header>
                <main>{children}</main>
            </div>
        </>
    );
}
