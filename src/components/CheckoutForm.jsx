import PropTypes from "prop-types"
import { useFormStatus } from "react-dom"


export default function CheckoutForm({onSubmit}) {
    const{pending}  =  useFormStatus
   
   return <form action={onSubmit} className="space-y-4">
  <div>
    <label 
    htmlFor="name"
     className="block text-sm text-center font-medium text-black mb-1"
     >
     Full Name
    </label>

    <input 
    type="text" 
    id="name" 
    name="name" 
    className="w-full px-4 py-3 border rounded-md" 
    required 
    />
  </div>


<div>
    <label 
    htmlFor="email"
     className="block text-sm text-center font-medium text-black mb-1"
     >
     Email
    </label>
    
    <input 
    type="text" 
    id="email" 
    name="email" 
    className="w-full px-4 py-3 border rounded-md" 
    required 
    />
  </div>




<div>
    <label 
    htmlFor="address"
     className="block text-sm text-center font-medium text-black mb-1"
     >
     Address
    </label>
    
    <input 
    type="text" 
    id="address" 
    name="address" 
    className="w-full px-4 py-3 border rounded-md" 
    required 
    />
  </div>




  <div className="grid grid-cols-2 gap-4">

  <div>
    <label 
    htmlFor="city"
     className="block text-sm text-center font-medium text-black mb-1"
     >
     City
    </label>
    
    <input 
    type="text" 
    id="city" 
    name="city" 
    className="w-full px-4 py-3 border rounded-md" 
    required 
    />
  </div>





<div>
    <label 
    htmlFor="zipCode"
     className="block text-sm text-center font-medium text-black mb-1"
     >
     Zip Code
    </label>
    
    <input 
    type="text" 
    id="zipCode" 
    name="zipCode" 
    className="w-full px-4 py-3 border rounded-md" 
    required 
    />
  </div>

 </div>


 <button
  type="submit" 
  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors disabled:bg-blue-500"
  disabled={pending}
  >
    {pending ? 'Processing order...' : 'Place Order'}
 </button>
    </form>
}

CheckoutForm.propTypes = {
 onSubmit: PropTypes.func.isRequired
}