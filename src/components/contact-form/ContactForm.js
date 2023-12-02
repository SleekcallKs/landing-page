
import React, { useState } from 'react';
import { motion } from "framer-motion";
const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <motion.div
            initial={{ bottom: "-150px", opacity: 0 }}
            whileInView={{ opacity: 1, bottom: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }} className='w-full flex  flex-col justify-center items-center mb-16'>
            <h1 className="text-3xl  text-center font-bold">Uns kontaktieren</h1>
            <div className="bg-base-100 px-8 py-12 max-w-xl w-full shadow-xl rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Kontaktformular</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                            E-Mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                            Nachricht
                        </label>
                        <textarea
                            id="message"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                        Senden
                    </button>
                </form>
            </div>
        </motion.div>

    );
};

export default ContactForm;
