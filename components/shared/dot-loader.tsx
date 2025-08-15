type Props = {
  h?: number;
  w?: number;
};

export function DotLoader({ h, w }: Props) {
  return (
    <div className="w-full flex items-center justify-center space-x-2">
      <span
        className={`h-${h ?? 4} w-${w ?? 4} bg-white rounded-full animate-pulse [animation-delay:-0.5s]`}
      />
      <span
        className={` h-${h ?? 4} w-${w ?? 4} bg-white rounded-full animate-pulse [animation-delay:-0.3s]`}
      />
      <span
        className={`w-${w ?? 4} h-${h ?? 4} bg-white rounded-full animate-pulse [animation-delay:-0.1s]`}
      />
    </div>
  );
}
