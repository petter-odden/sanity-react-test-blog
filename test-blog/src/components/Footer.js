import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {

    let newDate = new Date()
    let year = newDate.getFullYear();
    return (
        <footer className='bg-neutral-900 text-zinc-300 flex flex-col items-center pt-12'>
            <h2 className='text-4xl  tracking-wide mb-5 md:text-5xl'>Test Blog Inc.</h2>
            <p className='w-2/4 text-center'>Test Blog Inc. is a cutting-edge digital media company that specializes in creating high-quality, engaging blog content for a wide range of industries. Our team of talented writers and editors work tirelessly to produce informative, entertaining, and thought-provoking pieces that captivate our readers and keep them coming back for more. In addition to our blog, we also offer a range of other digital media services, including social media management, email marketing, and website design. Whether you're looking to boost your online presence or simply want to share your ideas with the world, Test Blog Inc is here to help you succeed.</p>
            <ul className='flex flex-row gap-10'>
                <li><button href="#"><i className="fa fa-lg fa-twitter"></i></button></li>
                <li><button href="#"><i className="fa fa-lg fa-facebook"></i></button></li>
                <li><button href="#"><i className="fa fa-lg fa-google-plus"></i></button></li>
                <li><button href="#"><i className="fa fa-lg fa-youtube"></i></button></li>
                <li><button href="#"><i className="fa fa-lg fa-linkedin-square"></i></button></li>
            </ul>
            <div>
                <p>Copyright ©{year} <Link to='\'>Test Blog Inc.</Link></p>
                <nav>
                    <ul className='flex lg:text-lg'>
                        <li className='mr-5'><button><Link to='/'>Home</Link></button></li>
                        <li><button><Link to='/blog'>Blog</Link></button></li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}
