export default function About() {
  return (
    <section id="about" className="p-2 bg-gradient-to-b from-gray-200 to-gray-100 flex justify-center items-center mb-2">
      <div className="flex flex-col gap-2 from-red-100/90 to-blue-100/90 bg-gradient-to-t md:max-w-3/4 mx-10 my-10 border-gray-400 rounded-bl-[50px] rounded-tr-[50px] flex justify-center p-7 shadow-md backdrop-blur-sm">
        <div className="text-center text-2xl font-bold text-gray-700">About Me</div>
        <div className="font-bold text-gray-700 max-md:text-[16px] max-sm:text-[14px] mt-2 justify-center items-center text-xl italic">
          "I built this tool because I got tired of clunky, slow converters. This one is fast, clean, and built with care — your data is processed securely and never stored."
        </div>
        <div className="text-gray-500 max-md:text-[16px] max-sm:text-[14px] items-center text-xl">
          Student at IIT Kharagpur by day, developer and designer by choice. I build things that work and look good doing it.
          <br /><br />
          What I do:
          <ul className="pl-5 list-disc my-1">
            <li>💻 Full-stack development with a focus on React & Node.js.</li>
            <li>🎨 UI/UX Design for campus-wide festivals and national summits.</li>
            <li>🚀 Engineering tools that leverage AI to make life easier.</li>
          </ul>
          I believe in privacy-first software, clean code, and the power of a well-placed animation. Currently exploring the world of entrepreneurship and competitive programming.
        </div>
      </div>
    </section>
  );
}
