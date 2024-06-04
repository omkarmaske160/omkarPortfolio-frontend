import React from 'react'

const Contact = () => {
    return <>
        <section id="contact" className="bg-gray-900 text-white p-8">
            <div className="container mx-auto mt-5">
                <div className="flex flex-col items-center mb-8 space-y-4 md:flex-row md:space-y-0 md:space-x-8 justify-center">
                    <div className="text-center">
                        <i className="fas fa-map-marker-alt text-4xl text-yellow-500 mb-2"></i>
                        <h3 className="text-xl font-bold text-yellow-500">ADDRESS</h3>
                        <p>Sai Palace Aurangpura, Aurangabad 431001</p>
                    </div>
                    <div className="text-center">
                        <i className="fas fa-phone text-4xl text-yellow-500 mb-2"></i>
                        <h3 className="text-xl font-bold text-yellow-500">CONTACT NUMBER</h3>
                        <p>91+ 808328556</p>
                    </div>
                    <div className="text-center">
                        <i className="fas fa-envelope text-4xl text-yellow-500 mb-2"></i>
                        <h3 className="text-xl font-bold text-yellow-500">EMAIL ADDRESS</h3>
                        <p>omkarmaske160@gmail.com</p>
                    </div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-5">
                    <div className="flex justify-center">
                        <img src="" alt="Dummy" className="rounded-lg" />
                    </div>
                    <div className="bg-gray-800 p-8 rounded-lg">
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-lg font-bold">Your Name</label>
                                <input type="text" id="name" className="w-full p-2 rounded bg-gray-700 border border-gray-600" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-lg font-bold">Your Email</label>
                                <input type="email" id="email" className="w-full p-2 rounded bg-gray-700 border border-gray-600" />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-lg font-bold">Subject</label>
                                <input type="text" id="subject" className="w-full p-2 rounded bg-gray-700 border border-gray-600" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-lg font-bold">Message</label>
                                <textarea id="message" className="w-full p-2 rounded bg-gray-700 border border-gray-600" rows="4"></textarea>
                            </div>
                            <button type="submit" className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Contact