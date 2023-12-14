

export default function Video({ source }) {
  return (
    <video className='w-full h-[50vh] object-cover' src={source} controls></video>
  )
}
