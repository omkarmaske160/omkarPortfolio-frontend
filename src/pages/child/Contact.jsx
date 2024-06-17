import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAddFeedbackMutation } from '../../api/adminApi';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
    const [formData, setFormData] = useState({});
    const [contactFn, { isSuccess, isError }] = useAddFeedbackMutation()
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to an API)
        contactFn(formData)
        // Clear the form
        setFormData({
            client_name: '',
            client_email: '',
            subject: '',
            message: ''
        });
    };
    useEffect(() => {
        if (isSuccess) {
            toast("Email is Successfully Send")
        }
    }, [isSuccess])
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2, // Adjust threshold as needed
    });

    const imageVariants = {
        hidden: { opacity: 0, x: -200 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: 'easeOut', delay: 0.7 },
        },
    };

    const descriptionVariants = {
        hidden: { opacity: 0, x: 200 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: 'easeOut', delay: 1 },
        },
    };
    return (
        <section ref={ref} id="contact" className="bg-gray-900 text-white p-8 mt-10">
            <motion.h2
                initial='hidden'
                animate={inView ? 'visible' : 'hidden'}
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
                }}
                className="contact-heading">Contact Me</motion.h2>

            <div className="container mx-auto pt-10">
                <motion.div
                    initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                    variants={{
                        hidden: { opacity: 0, y: 100 },
                        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
                    }}
                    className="flex flex-col items-center mb-8 space-y-4 md:flex-row md:space-y-0 md:space-x-8 justify-center">
                    <div className="text-center">
                        <i className="fas fa-map-marker-alt text-4xl text-yellow-500 mb-2"></i>
                        <h3 className="text-xl font-bold text-yellow-500">ADDRESS</h3>
                        <p>Sai Palace Aurangpura, Chh. Sambhajinagar 431001</p>
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
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-5">
                    <motion.div
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={imageVariants}>

                        <Link to="/protected" className="md:flex md:justify-center hidden cursor-default">
                            <img src="https://img.freepik.com/free-vector/internship-job-illustration_52683-49386.jpg?t=st=1717562191~exp=1717565791~hmac=4e21df7114b5532417858ebe9482f4c490ba4c3a71016099fa75024203962a51&w=740" alt="Dummy" className="rounded-lg w-[80%]" />
                        </Link>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={descriptionVariants}
                        className="bg-gray-800 p-8 rounded-lg">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="client_name" className="block text-lg font-bold text-yellow-500">Your Name</label>
                                <input
                                    type="text"
                                    id="client_name"
                                    className="w-full p-2 rounded bg-gray-700 border border-gray-600"
                                    value={formData.client_name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="client_email" className="block text-lg font-bold text-yellow-500">Your Email</label>
                                <input
                                    type="email"
                                    id="client_email"
                                    className="w-full p-2 rounded bg-gray-700 border border-gray-600"
                                    value={formData.client_email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-lg font-bold text-yellow-500">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full p-2 rounded bg-gray-700 border border-gray-600"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-lg font-bold text-yellow-500">Message</label>
                                <textarea
                                    id="message"
                                    className="w-full p-2 rounded bg-gray-700 border border-gray-600"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <div className='flex justify-center'>
                                <button type="submit" className="bg-yellow-500  text-black px-4 py-2 rounded hover:bg-yellow-600">Send Message</button>

                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
