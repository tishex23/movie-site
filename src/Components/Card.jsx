
export default function Card({title, source, id}) {

    const imageUrl = `https://image.tmdb.org/t/p/w500${source}`;


  return (
    <div className="w-40 rounded-md relative border-4 transition-transform transform-gpu hover:scale-105">
        
        
        <img className="rounded-md" src={imageUrl} alt="sample image" key={id}/>
        <h2 className="whitespace-nowrap overflow-hidden bg-gray-100 ">{title}</h2>
        <div className="absolute top-0 right-0 bg-yellow-400 m-1 rounded-sm" >
            <h1 className="text-black" >HD</h1>
        </div>
        
        
    </div>
  )
}
