import React from 'react'

const About = () => {
    const userDetails = [
        { key: 'Name', value: 'Omkar Makse' },
        { key: 'Date of birth', value: '03 Augest 2003' },
        { key: 'Address', value: 'Sai Palace Aurangpura Chh. Sambhajinagar' },
        { key: 'Zip code', value: '431001' },
        { key: 'Email', value: 'omkarmaske160@gmail.com' },
        { key: 'Phone', value: '+91 8080328556' }
    ];
    return <>
        <div id='resume' className=" text-white p-8 w-full  md:mb-16">
            <div className="max-w-screen-lg mx-auto">
                <div className="flex flex-col md:flex-row items-center md:items-start md:gap-10">
                    <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6 w-1/2">
                        <img
                            src="https://img.freepik.com/free-vector/blond-man-with-eyeglasses-icon-isolated_24911-100831.jpg?t=st=1717569749~exp=1717573349~hmac=96800c7d7cc725a97140211ee6875c8dfc2625a4a4f1f82c0acb3c2bcab6b08c&w=740" // Replace with the actual image source if available
                            alt="Omkar Maske"
                            className="w-full rounded-full"
                        />
                    </div>
                    <div className=" md:w-1/2 w-full">
                        <h1 className=" about-heading w-full ">About Me</h1>
                        <p className="text-gray-400 mb-4 md:pt-5">
                            Hello, I'm a MERN stack developer specializing in React and Node.js. I thrive on crafting responsive, efficient web applications that deliver seamless user experiences
                        </p>
                        <div className="space-y-4 w-full mt-10 ">
                            {userDetails.map((detail, index) => (
                                <div key={index} className=" w-full flex  gap-5">
                                    <span className="font-bold w-[25%] text-yellow-500">{detail.key}</span>
                                    <span >{detail.value}</span>
                                </div>
                            ))}
                        </div>


                        <div className='w-full flex justify-center mt-5 md:justify-start'>
                            <button
                                onClick={() => window.location.href = 'https://drive.google.com/uc?export=download&id=1raH45wO3PxyJSiEyLOJJQRV1tK-_EwuP'}
                                className="bg-yellow-500 mt-7 hover:text-slate-700 hover:bg-yellow-400 transition-all duration-300 font-bold text-black px-5 py-3 rounded-full"
                            >
                                DOWNLOAD CV
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default About