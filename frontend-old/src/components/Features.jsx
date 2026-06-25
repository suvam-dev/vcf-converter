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
            <b className="text-xl text-gray-100">Secure Processing</b><br />
            Files are securely processed through our fast backend server without being stored permanently, ensuring your data is kept safe while processing.</div>
        </div>
      </div>
      
      {/* SEO Content Section */}
      <div className="px-10 py-12 md:px-20 bg-gray-100 text-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">How to Convert CSV to VCF Online</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-3">Simple 3-Step Process</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Upload your file:</strong> Drag and drop your CSV, XLS, or XLSX file into our secure online vcf converter.</li>
              <li><strong>Map your columns:</strong> Easily match your spreadsheet columns to standard vCard fields like Name, Phone, and Email.</li>
              <li><strong>Download VCF:</strong> Click generate and instantly download your standard .vcf file, ready to import into Apple Contacts, Google Contacts, Outlook, or any mobile device.</li>
            </ol>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Why Use Our Free VCF Converter?</h3>
            <p className="mb-3">
              Converting spreadsheets to phone contacts shouldn't be complicated. Whether you need an <strong>Excel to vCard</strong> solution for your business, or just want to import a <strong>CSV to VCF</strong> for your personal phone, our tool handles it perfectly.
            </p>
            <p>
              Unlike other tools, our <strong>vCard generator</strong> runs entirely in your browser. Your contact data is processed securely and is never permanently stored on our servers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
