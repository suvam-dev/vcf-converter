
import './App.css'
import { Upload, Lock, Zap } from 'lucide-react';
function App() {

  return (
    <div>
      <nav className="relativeflex justify-between  align-middle h-12 ">
        <div className="flex  fixed  h-15 from-gray-200 border-b border-gray-300 to-gray-100 bg-gradient-to-b shadow-md shadow-gray-300/70 px-4 py-5 flex-row justify-between items-center w-full">
          <div className=" text-violet-600 font-bold flex flex-row gap-2">
            <div>Logo</div>
            <div>VCF Converter</div>
          </div>
          <div className="text-gray-700/80 font-bold flex flex-row gap-4">
            <div className="hover:underline underline-offset-4 hover:text-blue-700 transition-all transition-duration-300 ease-linear hover:shadow-[0_5px_10px_rgba(0,0,0,0.2)] hover:shadow-blue-300 p-2 rounded-sm cursor-pointer hover:bg-indigo-300/40">Home</div>
            <div className="hover:underline underline-offset-4 hover:text-blue-700 transition-all transition-duration-500 ease-linear hover:shadow-[0_5px_10px_rgba(0,0,0,0.2)] hover:shadow-blue-300 p-2 rounded-sm cursor-pointer hover:bg-indigo-300/40">About Us</div>
            <div className="hover:underline underline-offset-4 hover:text-blue-700 transition-all transition-duration-700 ease-linear hover:shadow-[0_5px_10px_rgba(0,0,0,0.2)] hover:shadow-blue-300 p-2 rounded-sm cursor-pointer hover:bg-indigo-300/40">Contact Us</div>
          </div>
        </div>
      </nav>
      {/* <hr /> */}
      <section className="hero flex  flex-col bg-gradient-to-b from-gray-200 to-gray-100 justify-center items-center p-3 ">
        <div
          className="hero-content rounded-full font-bold max-md:text-[10px] max-md:px-2 max-md:p-1 text-md mx-auto max-md:my-4 inline-block bg-blue-500/15 shadow-md text-blue-800 px-4 py-2 my-9">
          VCF TRANSFORMATION ENGINE
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-7xl max-md:text-4xl  max-sm:text-3xl font-extrabold">Transform Your <span className="text-blue-500 italic">Contacts</span></h1>
            <p className="text-7xl max-md:text-4xl  max-sm:text-3xl font-extrabold flex justify-center">Effortlessly</p>
          </div>
          <div className="flex flex-col gap-2 w-full mt-10 max-md:mt-2 justify-center items-center text-gray-500 max-md:text-[12px] max-sm:text-[10px]">
            <div className="text-center">Upload VCF, CSV or Excel Files, map coloums, apply transformations, and <div>
            </div> export clean vCard file. Fast, secure, and 100% local.</div>
            <div className=" flex flex-row justify-around md:w-2/3 w-full items-center gap-1 md:mt-5">
              <div className="bg-white rounded-[3px] shadow-md py-1 px-2 flex flex-row items-center"><div><div className="bg-green-500 rounded-full w-2 h-2 mr-2 "></div></div><p>.vcf</p></div>
              <div className="bg-white rounded-[3px] shadow-md py-1 px-2 flex flex-row items-center"><div><div className="bg-red-500 rounded-full w-2 h-2 mr-2"></div></div><p>.csv</p></div>
              <div className="bg-white rounded-[3px] shadow-md py-1 px-2 flex flex-row items-center"><div><div className="bg-orange-500 rounded-full w-2 h-2 mr-2"></div></div><p>.xlsv/sls</p></div>
              <div className="bg-white rounded-[3px] shadow-md py-1 px-2 flex flex-row items-center"><div><div className="bg-violet-500 rounded-full w-2 h-2 mr-2"></div></div><p>Google Contacts</p></div>
            </div>
          </div>
        </div>
        <div className=" bg-gray-50/90 w-full md:max-w-3/4 mx-10 my-10 border-2 border-dashed border-gray-400 rounded-lg h-90 flex justify-center p-5">
          <div className="flex flex-col  items-center">
            <div className="text-gray-100 max-md:text-[12px] max-sm:text-[10px] px-3 py-3 bg-violet-400/80 blend-overlay hover:bg-violet-500/80 rounded-md flex justify-center items-center mb-3"><Upload size={50} strokeWidth={2} /></div>
            <div className="font-bold text-gray-700 max-md:text-[16px] max-sm:text-[14px] mt-2 justify-center items-center  text-xl">Drag & Drop VCF,CSV or Excel Files</div>
            <div className="text-gray-500 max-md:text-[16px] max-sm:text-[14px] flex flex-row items-center text-xl">Limit 25MB per upload files <span className="bg-gray-400/70 rounded-full h-1 w-1 inline-block ml-1 mr-[3px]"></span> Supports .vcf .csv .xlsv .xls</div>
            <div className="from-cyan-600 to-blue-600 bg-gradient-to-r rounded-full px-5 py-2 text-white font-bold shadow-md shadow-violet-300 mt-10">Upload Files</div>
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-15 py-4 bg-gradient-to-b from-gray-100 to-gray-200">
          <div className=" text-gray-100 bg-gray-400/70 shadow-md shadow-gray-400  text-black p-4 px-5 rounded-[25px] flex flex-col justify-around md:h-60 mb-2 gap-4">
            <div className="  border-3 border-white/20 text-gray-900 p-3 rounded-[15px] inline-block bg-white/10 w-12 h-12"><Zap className="text-gray-600]" size={20} strokeWidth={2.25} /></div>
            <div className="inline-block mb-4 text-gray-900">
              <b className="text-xl text-black ">Lightning Fast Processing</b><br />
              Our high-performance engine processes thou  sands of contact entries in milliseconds, ensuring your workflow remains uninterrupted.</div>
          </div>
          <div className="from-indigo-700/70  text-gray-100 to-violet-800/70 bg-gradient-to-r shadow-md shadow-purple-300/50 text-white p-4 px-5 rounded-[25px] flex flex-col justify-around md:h-60 gap-4">
            <div className="  border-3 border-white/20 text-white p-3 rounded-[15px] inline-block bg-white/10 w-12 h-12"><Lock className="text-white" size={20} strokeWidth={2.25} /></div>
            <div className="inline-block mb-4">
              <b className="text-xl text-gray-100 ">Privacy First</b><br />
              Files are processed entirely in your browser. Your contact data never leaves your device and is never uploaded to any server.</div>
          </div>
        </div>
      </section >
      <section id="About and Privacy" className="p-2 bg-gradient-to-b from-gray-200 to-gray-100 flex justify-center items-center mb-2">
        <div className="flex flex-col gap-2  from-red-100/90 to-blue-100/90 bg-gradient-to-t md:max-w-3/4 mx-10 my-10 border-gray-400 rounded-bl-[50px] rounded-tr-[50px] flex justify-center p-7  shadow-md  backdrop-blur-sm">
          <div className="text-center text-2xl font-bold text-gray-700">About Me</div>
          <div className="font-bold text-gray-700 max-md:text-[16px] max-sm:text-[14px] mt-2 justify-center items-center  text-xl italic ">"I built this tool because I got tired of clunky, privacy-invasive converters. This one runs entirely in your browser—no data leaves your machine."</div>
          <div className="text-gray-500 max-md:text-[16px] max-sm:text-[14px]  items-center text-xl">Student at IIT Kharagpur by day, developer and designer by choice. I build things that work and look good doing it.

            What I do:
            <ul className=" pl-5 list-disc my-1">
              <li className="">💻 Full-stack development with a focus on React & Node.js.</li>

              <li className="">🎨 UI/UX Design for campus-wide festivals and national summits.</li>

              <li className="">🚀 Engineering tools that leverage AI to make life easier.</li>
            </ul>
            I believe in privacy-first software, clean code, and the power of a well-placed animation. Currently exploring the world of entrepreneurship and competitive programming.
          </div>
        </div>
      </section>
      <footer>
        <div className="flex flex-row max-md:flex-col  max-md:gap-0 gap-5 p-4 justify-center items-center">
          <div className="text-center text-gray-700/60 font-md text-sm">@2026 VCF Converter. All rights reserved.</div>
          <div className="text-center text-gray-700  font-md text-sm "> {'<' + '/' + '>'}Built with ❤️ by <a className="text-blue-500 font-extrabold" href="https://github.com/suvam-dev" target="_blank">suvam-dev</a></div>
        </div>
      </footer>
    </div >
  )
}

export default App
