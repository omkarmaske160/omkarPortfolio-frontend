import React, { useEffect, useState } from 'react';
import { useCheckAdminMutation } from '../api/adminApi';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify"

const Protected = () => {
    const [checkAdminFn, { isSuccess, isError }] = useCheckAdminMutation()

    const [inputValue, setInputValue] = useState('');
    const [enteredNumbers, setEnteredNumbers] = useState([]);
    const navigate = useNavigate()



    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleDelete = (index) => {
        const updatedNumbers = [...enteredNumbers];
        updatedNumbers.splice(index, 1);
        setEnteredNumbers(updatedNumbers);
    };

    const handleSubmit = () => {
        if (inputValue !== '') {
            setEnteredNumbers([...enteredNumbers, inputValue]);
            checkAdminFn({ password: inputValue })
            setInputValue('');
        }
    }


    useEffect(() => {
        if (isSuccess) {
            toast("Password is Correct")
            navigate("/dashboard")

        }
    }, [isSuccess])
    return <>
        <div className="flex flex-col items-center justify-center h-screen border-4 border-gray-300">
            <h1 className="text-3xl font-bold mb-8">Enter Number : </h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className="w-1/2 mb-4 p-2 border border-gray-300 rounded-md"
            />
            <div className="grid grid-cols-3 gap-4 mb-8">
                {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((number) => (
                    <div
                        key={number}
                        className="bg-gray-200 p-4 px-7 py-6 text-center rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-gray-300"
                        onClick={() => setInputValue(inputValue + number)}
                    >
                        {number}
                    </div>
                ))}
            </div>

            <div className="flex justify-center mb-4">
                <button
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md mr-4 transition duration-300 ease-in-out hover:bg-blue-600"
                >
                    Submit
                </button>
                <button
                    onClick={() => setInputValue('')}
                    className="bg-red-500 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-red-600"
                >
                    Delete
                </button>
            </div>

        </div>
    </>
}

export default Protected