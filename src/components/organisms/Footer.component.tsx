import { Description, Title } from '../atoms'

export const Footer = () => {
  return (
    <footer
      id="action"
      className="relative py-48 px-4 md:px-20 lg:px-32 bg-indigo-600 text-white text-center selection:bg-white/70 selection:text-indigo-600"
    >
      <Title>Ready to start building your product ?</Title>
      <Description className="mb-20">
        HeadlessAuth will be out soon, you can keep in touch with us by putting
        your email here 👇
      </Description>

      <div className="flex justify-center">
        <form className="w-full lg:w-fit flex flex-col md:flex-row gap-10">
          <input className="outline-none p-4 text-gray-900 rounded w-full lg:w-[600px] selection:bg-indigo-600/30 selection:text-white" />
          <button className="bg-white whitespace-nowrap text-gray-900 font-extrabold uppercase rounded px-8 py-4">
            Keep in touch 🚀
          </button>
        </form>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        © HeadlessAuth.js - {new Date().getFullYear()}
      </div>
    </footer>
  )
}
