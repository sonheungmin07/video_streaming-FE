
export default function Button({ video, playVideo }) {
    const { name, _id } = video
  return (
    <button onClick={() => {playVideo(_id)}} className="border w-[100px] text-center py-2 border-gray-700 font-bold text-gray-600 hover:text-white hover:bg-gray-800 transition-all">{name}</button>
  )
}
