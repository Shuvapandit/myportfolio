import React from 'react'

function Contact() {
  return (
    <div className='mt-6 '>
<p className='text-center text-2xl font-semibold'>GET IN TOUCH!</p>
<p className='text-center terxt-base '>Please email at <a className='text-red-600' href="mailto:chakrabortyshuva216@gmail.com">chakrabortyshuva216@gmail.com </a> for any business queries</p>

        {/* From start */}
        <form action="mailto:chakrabortyshuva216@gmail.com" method="post" class=" mr-16 rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Name*
      </label>
      <input class="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Your Name" />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      Email*
      </label>
      <input class="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Your Email" />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      Subject*
      </label>
      <textarea className='border-b-2 w-full border-slate-600' id="" name="" rows="4" cols="50"  type="text" placeholder="Type Your Subject" ></textarea>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      Message*
      </label>
     
      <textarea className='border-b-2 w-full border-slate-600' id="" name="" rows="4" cols="50"   type="text" placeholder="Type your message here" ></textarea>
    </div>
   
    
    <div class="">
      <button class="bg-slate-700 hover:bg-slate-900 text-white font-semibold py-2 px-5 rounded focus:outline-none focus:shadow-outline" type="submit"  value="Send">
        SEND
      </button>
     
    </div>
  </form>

        
        {/* From end*/}
    </div>
  )
}

export default Contact