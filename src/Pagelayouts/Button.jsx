
const Button = ({text, type='submit', fontSize='20px', py='16px', px='40px'}) => {
  return (
    <button 
    type={type} 
    className={`bg-[#FF624C] rounded-[10px] text-white font-[Montserrat] font-bold leading-[30px] cursor-pointer hover:bg-[#c14a3b] transition-colors duration-200`}
    style={{
        fontSize:fontSize,
        paddingInline:px,
        paddingBlock:py
    }}>
        {text}
    </button>
  )
}

export default Button