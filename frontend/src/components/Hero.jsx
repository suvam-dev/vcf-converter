import { useState, useRef } from 'react';
import { Upload, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState({ loading: false, message: '', columns: [], error: false });
  const fileInputRef = useRef(null);
  const [tabledata, setTableData] = useState([]);

  const sendToBackend = async (selectedFile) => {
    setUploadStatus({ loading: true, message: 'Uploading...', error: false });
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data.columns);
      setUploadStatus({ loading: false, message: data.message, columns: data.columns || [], error: false });
      setTableData(data.columns || []);
    } catch (error) {
      console.error(error);
      setUploadStatus({ loading: false, message: 'Failed to upload file.', error: true, columns: [] });
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      console.log("Selected file:", selectedFile.name);
      sendToBackend(selectedFile);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <section className="hero flex flex-col bg-gradient-to-b from-gray-200 to-gray-100 justify-center items-center p-3">
      <div
        className="hero-content rounded-full font-bold max-md:text-[10px] max-md:px-2 max-md:p-1 text-md mx-auto max-md:my-4 inline-block bg-blue-500/15 shadow-md text-blue-800 px-4 py-2 my-9">
        VCF TRANSFORMATION ENGINE
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-7xl max-md:text-4xl max-sm:text-3xl font-extrabold">Transform Your <span className="text-blue-500 italic">Contacts</span></h1>
          <p className="text-7xl max-md:text-4xl max-sm:text-3xl font-extrabold flex justify-center">Effortlessly</p>
        </div>
        <div className="flex flex-col gap-2 w-full mt-10 max-md:mt-2 justify-center items-center text-gray-500 max-md:text-[12px] max-sm:text-[10px]">
          <div className="text-center">Upload VCF, CSV or Excel Files, map columns, apply transformations, and export clean vCard file. Fast, secure, and 100% local.</div>
          <div className="flex flex-row justify-around md:w-2/3 w-full items-center gap-1 md:mt-5">
            <div className="bg-white rounded-[3px] shadow-md py-1 px-2 flex flex-row items-center"><div><div className="bg-green-500 rounded-full w-2 h-2 mr-2 "></div></div><p>.vcf</p></div>
            <div className="bg-white rounded-[3px] shadow-md py-1 px-2 flex flex-row items-center"><div><div className="bg-red-500 rounded-full w-2 h-2 mr-2"></div></div><p>.csv</p></div>
            <div className="bg-white rounded-[3px] shadow-md py-1 px-2 flex flex-row items-center"><div><div className="bg-orange-500 rounded-full w-2 h-2 mr-2"></div></div><p>.xlsv/sls</p></div>
            <div className="bg-white rounded-[3px] shadow-md py-1 px-2 flex flex-row items-center"><div><div className="bg-violet-500 rounded-full w-2 h-2 mr-2"></div></div><p>Google Contacts</p></div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50/90 w-full md:max-w-3/4 mx-10 my-10 border-2 border-dashed border-gray-400 rounded-lg h-90 flex justify-center p-5">
        <div className="flex flex-col items-center">
          <div className="text-gray-100 max-md:text-[12px] max-sm:text-[10px] px-3 py-3 bg-violet-400/80 blend-overlay hover:bg-violet-500/80 rounded-md flex justify-center items-center mb-3"><Upload size={50} strokeWidth={2} /></div>
          <div className="font-bold text-gray-700 max-md:text-[16px] max-sm:text-[14px] mt-2 justify-center items-center text-xl">Drag & Drop VCF,CSV or Excel Files</div>
          <div className="text-gray-500 max-md:text-[16px] max-sm:text-[14px] flex flex-row items-center text-xl">Limit 25MB per upload files <span className="bg-gray-400/70 rounded-full h-1 w-1 inline-block ml-1 mr-[3px]"></span> Supports .vcf .csv .xlsv .xls</div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept=".vcf,.csv,.xls,.xlsx"
          />
          <button
            onClick={triggerFileInput}
            className={`${file ? "hover:from-red-500 hover:to-red-400" : "hover:from-cyan-500 hover:to-blue-500"} from-cyan-600 to-blue-600 bg-gradient-to-r rounded-full px-8 py-3 text-white font-bold shadow-lg shadow-blue-200 mt-8 hover:scale-105 transition-transform cursor-pointer flex items-center gap-2`}
          >
            {file ? 'Change File' : 'Upload Files'}
          </button>
          {file && (
            <div className="mt-4 flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 text-green-600 animate-in fade-in slide-in-from-top-2 duration-300">
                <CheckCircle2 size={18} />
                <span className="font-semibold">{file.name}</span>
              </div>
              {uploadStatus.message && (
                <div className={`text-sm ${uploadStatus.error ? 'text-red-500' : 'text-blue-500'} italic mt-2 text-center`}>
                  {uploadStatus.loading ? (
                    <p>⏳ Processing...</p>
                  ) : (
                    <div>
                      <p className="font-semibold">{uploadStatus.message}</p>
                      {uploadStatus.columns && uploadStatus.columns.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-2 justify-center max-w-sm">
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className={`w-full mx-3 my-3 bg-gray-300 rounded-lg ${tabledata.length > 0 ? "block" : "hidden"} md:max-w-3/4 max-md:max-w-full`}>
        <div className="flex flex-row justify-center text-2xl font-bold text-gray-700  p-3 items-center">
          Maping
        </div>

        {
          tabledata.map((col, index) => (
            <>
              <div className="flex  p-2 items-center bg-gray-400/20 mx-5 my-2 ">
                <div className="font-bold flex-1">{col} {index}</div>
                <div className="flex-1 border-2 border-gray-400 rounded-md"><input className="w-full p-1 " type="list" list="vcfprop" /></div>
              </div>
              {
                (index > 0) ? <hr className='hidden' /> : null
              }
            </>
          ))
        }
        <datalist id="vcfprop">
          <option value="FN" />
          <option value="N" />
          <option value="ORG" />
          <option value="TITLE" />
          <option value="TEL" />
          <option value="EMAIL" />
          <option value="ADR" />
          <option value="URL" />
          <option value="NOTE" />
          <option value="BDAY" />
          <option value="ANNIVERSARY" />
          <option value="GENDER" />
          <option value="PHOTO" />
          <option value="LOGO" />
          <option value="SOUND" />
          <option value="VERSION" />
          <option value="REV" />
          <option value="UID" />
          <option value="DTSTAMP" />
          <option value="CATEGORIES" />
          <option value="NOTE" />
          <option value="IMPP" />
          <option value="X-MS-IMADDRESS" />
          <option value="X-MS-OL-CONFTYPE" />
          <option value="X-MS-OL-CONFTYPE" />
        </datalist>
      </div>
    </section >
  );
}
