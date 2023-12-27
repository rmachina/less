'use client'

import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import Select from "react-tailwindcss-select";


const ContactUs = () => {

  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  //plug
  const [phone, setPhone] = useState('');
  const [invest, setInvest] = useState('');
  const investmain = invest.value
  const [spantype, setSpamType] = useState('');
  const mainspan = spantype.value
  const [loading, setLoading] = useState(false)



  const Invest = [
    { value: "5000", label: "Then Lass 5000$" },
    { value: "5000-10000", label: "5000$ - 10000$" },
    { value: "10000-20000", label: "10000$ - 20000$" },
    { value: "21000-40000", label: "21000$ - 40000$" },
    { value: "40000-80000", label: "40000$ - 80000$" },
    { value: "80000-100000", label: "80000$ - 100000$" },
    { value: "100000-150000", label: "100000$ - 150000$" },
    { value: "150000+", label: "150000$ and up" },
  ];

  const SpanTypes = [
    { value: "Binary options", label: "Binary options" },
    { value: "Cryptocurrency", label: "Cryptocurrency" },
    { value: "Forex", label: "Forex" },
    { value: "Stock Trading", label: "Stock Trading" },
    { value: "Property scam", label: "Property scam" },
    { value: "Romance scam", label: "Romance scam" },
    { value: "Other scam", label: "Other scam" },
  ];


  const handleInvest = value => {
    setInvest(value);
  };

  const handleSpam = value => {
    setSpamType(value);
  };


  const handleContact = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const req = await fetch('/api/message', {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          message,
          phone,
          investmain,
          mainspan
        })
      })

      if (req.ok) {
        toast.success('Your application has been successfully sent! Please wait for our managers to contact you.')
        setFirstName('')
        setLastName('')
        setEmail('')
        setMessage('')
        setInvest('')
        setPhone('')
        setSpamType('')
      }
    } catch (error) {
      console.log("Hata Var !:", error);
    } finally {
      setLoading(false);
    }

  }


  return (
    <div className="mt-32">
      <div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: 'bg-white',
            duration: 3000,
            style: {
              background: '#fff',
              color: '#000',
            },

            success: {
              duration: 1000,
              theme: {
                primary: 'green',
                secondary: 'white',
              },
            },
          }}
        />
      </div>
      <div className="max-w-[1160px] mx-auto mt-24">
        <div className="flex items-center gap-2 px-3">
          <Link href={'/'}>
            <span className="text-lg font-medium text-[#9797da]">Home /</span>
          </Link>
          <span className="text-lg font-medium text-[#8c8c8c]">
            Contact us
          </span>
        </div>
      </div>
      <section className="max-w-[700px] mx-auto mb-20 text-center">
        <h1 className="text-5xl font-bold text-[#112152] 16xl:text-4xl">Contact us now to get <br /> <span className="text-yellow-400">your money Back!</span></h1>
        <p className="text-lg font-medium text-[#797878] mt-4">If you’ve been ripped off by scammers, get in touch and our team of <br /> experts will work to get your money back</p>
      </section>
      <section className="max-w-[700px] mx-auto px-4">
        <form onSubmit={handleContact} className="w-full">
          <div className="w-full flex items-center justify-between 16xl:flex-wrap 16xl:justify-center gap-5">
            <div className="w-full">
              <input required
                placeholder="Your Name *"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full outline-none px-3 py-3 bg-white border-[1px] border-[#dfdddd] rounded-md" />
            </div>
            <div className="w-full">
              <input required
                placeholder="Last Name *"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full outline-none px-3 py-3 bg-white border-[1px] border-[#dfdddd] rounded-md" />
            </div>
          </div>
          <div className="flex items-center justify-between 16xl:flex-wrap 16xl:justify-center gap-5 mt-4">
            <div className='w-full'>
              <PhoneInput
                className='!text-base'
                defaultCountry="us"
                value={phone}
                onChange={(phone) => setPhone(phone)}
              />
            </div>
            <div className="w-full">
              <input required
                type="email"
                placeholder="Enter your E-mail *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full outline-none px-3 py-3 bg-white border-[1px] border-[#dfdddd] rounded-md" />
            </div>
          </div>
          <div className="flex items-center justify-between 16xl:flex-wrap 16xl:justify-center  gap-5 mt-4">
            <div className='w-full'>
              <Select
                placeholder='Choose a spam type'
                value={spantype}
                onChange={handleSpam}
                options={SpanTypes}
                classNames={{
                  menuButton: () => (
                    `flex text-gray-500 border border-gray-300 rounded shadow-sm transition-all duration-300 focus:outline-none 
                                               text-base py-1.5
                                            }`
                  ),
                  menu: "absolute z-10 w-full bg-white shadow-lg border rounded py-1 mt-1.5 text-sm text-gray-700",
                  listItem: ({ isSelected }) => (
                    `block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded ${isSelected
                      ? `text-blue-500 bg-blue-100`
                      : `text-gray-500 hover:bg-blue-100 hover:text-blue-500`
                    }`
                  )
                }}
              />
            </div>
            <div className='w-full'>
              <Select
                placeholder='How much you did invest ($)'
                value={invest}
                onChange={handleInvest}
                options={Invest}
                classNames={{
                  menuButton: () => (
                    `flex text-gray-500 border border-gray-300 rounded shadow-sm transition-all duration-300 focus:outline-none 
                                               text-base py-1.5
                                            }`
                  ),
                  menu: "absolute z-10 w-full bg-white shadow-lg border rounded py-1 mt-1.5 text-sm text-gray-700",
                  listItem: ({ isSelected }) => (
                    `block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded ${isSelected
                      ? `text-blue-500 bg-blue-100`
                      : `text-gray-500 hover:bg-blue-100 hover:text-blue-500`
                    }`
                  )
                }}
              />
            </div>
          </div>
          <div className='mt-4'>
            <textarea required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="This is what happened..."
              className="w-full max-h-36 outline-none px-3 py-3 bg-white border-[1px] border-[#dfdddd] rounded-md peer" />
          </div>
          <div className='mt-4'>
            <button
              type="submit"
              className={`w-full transition-colors hover:bg-yellow-400/80 bg-yellow-400 py-3 rounded ${loading
                ? "cursor-not-allowed bg-opacity-50"
                : "cursor-pointer"
                }`}
              disabled={loading}
            >
              <span className="font-medium ">
                {loading ? "Loading..." : "Get a free consultation"}
              </span>
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default ContactUs