import {Nunito_Sans } from 'next/font/google';


const nunito_600 = Nunito_Sans({
    weight: '600',
    style: 'normal',
    subsets: ['latin']
})


export default function Nav() {

    return(
        <nav className='flex w-full py-2 px-14 justify-between items-center'>
            <h1 className={`${nunito_600.className} text-[2.25rem] text-purple-blue
             leading-normal`}>
                Datei
            </h1>
            
        </nav>
    )
}