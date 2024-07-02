'use client';
import { useState } from 'react';
import GithubIcon from '../../public/images/github-icon.svg';
import LinkedinIcon from '../../public/images/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {

    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }
        console.log("data:", data)

        const JSONdata = JSON.stringify(data);
        const endpoint = '/api/send';

        const options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSONdata,
        }

        try {
            const response = await fetch(endpoint, options);
            let resData = {};

            if (response.ok && response.status === 200) {
                // Try to parse JSON only if response is OK
                resData = await response.json();
                console.log("resData:", resData)
                console.log('Message sent.');
                setEmailSubmitted(true); // Ensure this function is properly defined or imported
            } else {
                console.log('Message not sent.');
            }
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    }

    return (
        <section
            id="contact"
            className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
        >
            <div className="z-10">
                <h5 className='text-xl font-bold text-white my-2'>
                    Let's Connect
                </h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Tempore consequatur molestiae,
                    vitae enim quia amet hic, possimus ad vel quasi in ipsum similique
                    odit facere maxime unde obcaecati nihil officiis.
                </p>
                <div className='socials flex flex-row gap-2'>
                    <Link href='https://github.com/vasily88' target='_blank'>
                        <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                    <Link href='https://www.linkedin.com/in/vasily-loban-695484103/' target='_blank'>
                        <Image src={LinkedinIcon} alt="Linkedin Icon" />
                    </Link>
                </div>
            </div>
            <div>
                {
                    emailSubmitted ? (
                        <p className="text-green-500 text-sm mt-2">
                            Email sent successfully!
                        </p>
                    ) : (
                        <form className='flex flex-col' onSubmit={handleSubmit}>
                            <div className='mb-6'>
                                <label htmlFor='email' className='text-white block mb-2 text-sm font-medium'>
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    placeholder='joy@gmail.com'
                                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                                />
                            </div>
                            <div className='mb-6'>
                                <label htmlFor='subject' className='text-white block mb-2 text-sm font-medium'>
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    required
                                    placeholder='Just saying hi :)'
                                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                                />
                            </div>
                            <div className='mb-6'>
                                <label htmlFor='message' className='text-white block mb-2 text-sm font-medium'>
                                    Subject
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    placeholder="Let's talk about..."
                                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                                />
                            </div>
                            <button
                                type="sumbit"
                                className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'
                            >
                                Send Message
                            </button>
                        </form>
                    )
                }
            </div>
        </section>
    )
}

export default EmailSection