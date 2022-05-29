
   const Label = (props) =>{
      return(<label className='text-xl text-sky-500 block mb-1 font-large'> {props.text} </label>)
   }
   const Input = (props) =>{
      return (<input type="text" className='bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-rose-600 focus:bg-gray-900 focus:ring-2 focus:ring-pink-600 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out w-full' placeholder={props.placeholder}></input>)
   }

   const H1 = (props) =>{
      return(<h1>{props.text}</h1>)
   }

   const Grid = () =>{
      return(<div className='absolute top-40 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5' />)
   }

   const navButton = (data) =>{
      return(<button className="capitalize text-xl text-indigo-600 hover:text-rose-600">{data}</button>)
   }
 
export {H1,Label,Input,Grid,navButton};