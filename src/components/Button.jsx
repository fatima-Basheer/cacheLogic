function Button({text, color,bg}) {
  return (
    <div >
            <button style={{color:color, backgroundColor:bg}} className="text-white bg-blue-600 border-2 border-white hover:bg-blue-500 hover:border-blue-500 py-2.5 px-4.5 rounded-full font-medium text-sm cursor-pointer z-100">
          {text}
        </button>
    </div>
  )
}

export default Button

