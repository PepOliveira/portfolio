export default function BackgroundGlow() {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
  
        <div className="
        absolute
        top-[-200px]
        left-[-200px]
        w-[500px]
        h-[500px]
        bg-blue-500
        opacity-20
        blur-[120px]
        rounded-full
        " />
  
        <div className="
        absolute
        bottom-[-200px]
        right-[-200px]
        w-[500px]
        h-[500px]
        bg-purple-500
        opacity-20
        blur-[120px]
        rounded-full
        " />
  
      </div>
    )
  }