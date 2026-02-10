function LoaderProduct() {
  const bars = Array.from({ length: 12 });

  return (
    <div className="relative w-[54px] h-[54px] rounded-[10px]">
      {bars.map((_, i) => (
        <div
          key={i}
          className="absolute left-1/2 top-[30%] w-[8%] h-[24%] bg-primary-text rounded-[50px] shadow-[0_0_3px_rgba(0,0,0,0.2)] animate-[fade-spinner_1s_linear_infinite]"
          style={{
            transform: `rotate(${i * 30}deg) translate(0, -130%)`,
            animationDelay: `${-1.2 + (i * 0.1)}s`, 
          }}
        />
      ))}
    </div>
  );
}

export default LoaderProduct;