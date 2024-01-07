import {Nunito_Sans } from 'next/font/google';
import Image from 'next/image';

const nunito_600 = Nunito_Sans({
    weight: '600',
    style: 'normal',
    subsets: ['latin']
})

const nunito_400 = Nunito_Sans({
    weight: '400',
    style: 'normal',
    subsets: ['latin']
})


export default function Nav() {

    return(
        <nav className='flex w-full py-2 px-14 justify-between items-center'>
            {/* logo or brand name */}
            <h1 className={`${nunito_600.className} text-[2.25rem] text-purple-blue
             leading-normal`}>
                Datei
            </h1>
            {/* Ui Topic - displays the current menu item title */}
            <h1 className={`${nunito_600.className} text-[1.5rem] leading-normal
                 text-grey-700`}>
                Student Database
            </h1>

            {/* user profile information and toggle menu controls */}
            <div className='flex py-2 px-1 place-items-center gap-8'>
                {/* profile section */}
                <div className='flex items-center gap-2'>
                    {/* avatar shows up here */}
                    <Image alt='user profile' src={'/profile_default.png'}
                        width={56}
                        height={56}
                        className=' rounded-[3rem]'
                        />
                    {/* user profile information */}
                    <div className='flex flex-col justify-center items-start gap-1 '>
                        {/* username */}
                        <h1 className={`${nunito_600.className}
                        leading-normal text-grey-900 `}>
                            Amy Ryan Xang
                        </h1>
                        {/* school name */}
                        <h1 className={`${nunito_400.className} text-[.75rem]
                            leading-normal text-grey-600`}>
                                Gongzhou High School
                        </h1>
                    </div>
                </div>
                {/* expand more button and controls */}
                <button>
                    <Image alt='expand more' src={'/Expand More.svg'}
                        height={24}
                        width={24} />
                </button>
            </div>
        </nav>
    )
}