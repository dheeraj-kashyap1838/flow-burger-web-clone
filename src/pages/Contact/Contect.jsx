import React from 'react'
import PageHead from '../../components/PageHead'

const Contect = () => {
  return (
    <>
      <PageHead page_name='Contact' />
      <div className='my-11 px-4'>
        <form className="max-w-2xl w-full border p-5 mx-auto bg-white shadow-lg rounded-lg">
          <div className="relative z-0 w-full mb-5 group">
            <input type="email" name="email" id="email" className="input-style peer" placeholder=" " required />
            <label htmlFor="email" className="label-style">Email address</label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input type="password" name="password" id="password" className="input-style peer" placeholder=" " required />
            <label htmlFor="password" className="label-style">Password</label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input type="password" name="repeat_password" id="repeat_password" className="input-style peer" placeholder=" " required />
            <label htmlFor="repeat_password" className="label-style">Confirm password</label>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="first_name" id="first_name" className="input-style peer" placeholder=" " required />
              <label htmlFor="first_name" className="label-style">First name</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="last_name" id="last_name" className="input-style peer" placeholder=" " required />
              <label htmlFor="last_name" className="label-style">Last name</label>
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input type="tel" name="phone" id="phone" className="input-style peer" placeholder=" " required />
              <label htmlFor="phone" className="label-style">Phone number (123-456-7890)</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="company" id="company" className="input-style peer" placeholder=" " required />
              <label htmlFor="company" className="label-style">Company (Ex. Google)</label>
            </div>
          </div>

          <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-2.5">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Contect
