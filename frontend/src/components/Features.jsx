import { Lock, Zap } from 'lucide-react';

export default function Features() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-15 py-4 bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="text-gray-100 bg-gray-400/70 shadow-md shadow-gray-400 text-black p-4 px-5 rounded-[25px] flex flex-col justify-around md:h-60 mb-2 gap-4">
          <div className="border-3 border-white/20 text-gray-900 p-3 rounded-[15px] inline-block bg-white/10 w-12 h-12"><Zap className="text-gray-600" size={20} strokeWidth={2.25} /></div>
          <div className="inline-block mb-4 text-gray-900">
            <b className="text-xl text-black">Lightning Fast Processing</b><br />
            Our high-performance engine processes thousands of contact entries in milliseconds, ensuring your workflow remains uninterrupted.</div>
        </div>
        <div className="from-indigo-700/70 text-gray-100 to-violet-800/70 bg-gradient-to-r shadow-md shadow-purple-300/50 text-white p-4 px-5 rounded-[25px] flex flex-col justify-around md:h-60 gap-4">
          <div className="border-3 border-white/20 text-white p-3 rounded-[15px] inline-block bg-white/10 w-12 h-12"><Lock className="text-white" size={20} strokeWidth={2.25} /></div>
          <div className="inline-block mb-4">
            <b className="text-xl text-gray-100">Privacy First</b><br />
            Files are processed entirely in your browser. Your contact data never leaves your device and is never uploaded to any server.</div>
        </div>
      </div>
    </section>
  );
}
