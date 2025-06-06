
const Button = ({text, color="white", type='submit', bg="#FF624C", hover=false, hoverColor="#c14a3b", border="1px solid #FF624C", fontSize='20px', py='16px', px='40px'}) => {
  let hoverClass = `hover:bg-${hoverColor}`;
  return (
    <button 
    type={type} 
    className={`rounded-[10px] font-[Montserrat] font-bold leading-[30px] cursor-pointer ${hover && hoverClass} transition-colors duration-200`}
    style={{
        background:bg,
        color:color,
        fontSize:fontSize,
        paddingInline:px,
        paddingBlock:py,
        border:border
    }}>
        {text}
    </button>
  )
}

export default Button