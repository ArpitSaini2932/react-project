import React , {useId} from 'react'

function Select({
  options ,
  className ="", 
  label,
  ...props
},ref) {
  const id = useId()
  return (
   <div className='w-full'>
    {label && <label
    className='inline-block mb-1 pl-1'
    htmlFor={id}
    >{label}</label>
    }
    <select {...props}
    id={id}
    ref={ref}
    className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 border-gray-200 duration-200 border w-full ${className}`} >
      {options?.map((options)=>(
        <option key={options} value={options}>
          {options}
        </option>
      ))}
    </select>
   </div>
  )
}

export default React.forwardRef(Select)