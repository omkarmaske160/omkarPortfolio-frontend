import React from 'react'

const Certificates = () => {
    return <>
        <section className="py-16 px-4 md:px-8">
            <h2 className="text-3xl font-bold mb-8">Certificates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-100  p-6 rounded-md shadow-md">
                    <img src="/placeholder.svg" alt="Certificate 1" className="w-20 h-20 mb-4" />
                    <h3 className="text-xl font-bold mb-2">AWS Certified Solutions Architect - Associate</h3>
                    <p className="text-gray-600 ">Issued by Amazon Web Services</p>
                </div>
                <div className="bg-gray-100  p-6 rounded-md shadow-md">
                    <img src="/placeholder.svg" alt="Certificate 2" className="w-20 h-20 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Google Cloud Certified Professional Data Engineer</h3>
                    <p className="text-gray-600 ">Issued by Google Cloud</p>
                </div>
                <div className="bg-gray-100  p-6 rounded-md shadow-md">
                    <img src="/placeholder.svg" alt="Certificate 3" className="w-20 h-20 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Scrum Master Certification</h3>
                    <p className="text-gray-600 ">Issued by Scrum Alliance</p>
                </div>
            </div>
        </section>
    </>
}

export default Certificates