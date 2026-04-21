import { useState, useRef } from 'react';
import { Upload, CheckCircle2, X, Pencil, ChevronDown } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Hero() {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState({ loading: false, message: '', columns: [], error: false });
  const fileInputRef = useRef(null);
  const [tabledata, setTableData] = useState([]);
  const [mappings, setMappings] = useState({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [editEnabled, setEditEnabled] = useState({});
  const [prefixes, setPrefixes] = useState({});
  const [postfixes, setPostfixes] = useState({});

  const handleGenerate = async () => {
    if (!file || Object.keys(mappings).length === 0) {
      toast.error("Please map at least one column.");
      return;
    }

    setIsGenerating(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("mappings", JSON.stringify(mappings));
    formData.append("prefixes", JSON.stringify(prefixes));
    formData.append("postfixes", JSON.stringify(postfixes));

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/convert`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to generate VCF");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = file.name.split('.')[0] + "_converted.vcf";
      document.body.appendChild(a);
      a.click();
      a.remove();

    } catch (error) {
      console.error(error);
      toast.error("Error generating the vCard file.");
    } finally {
      setIsGenerating(false);
    }
  };

  const sendToBackend = async (selectedFile) => {
    setUploadStatus({ loading: true, message: 'Uploading...', error: false });
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/upload`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data.columns);
      setUploadStatus({ loading: false, message: data.message, columns: data.columns || [], error: false });
      setTableData(data.columns || []);
      if (data.columns?.length > 0) toast.success(`Found ${data.columns.length} columns!`);
    } catch (error) {
      console.error(error);
      setUploadStatus({ loading: false, message: 'Failed to upload file.', error: true, columns: [] });
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
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
          <div className="text-center">Upload CSV or Excel files, map columns, apply transformations, and export a clean vCard file. Fast, secure, and privacy-respecting.</div>
          <div className="flex flex-row justify-evenly md:w-2/3 w-full items-center gap-1 md:mt-5">
            <div className="bg-white rounded-[3px] shadow-md py-1 px-2 flex flex-row items-center"><div><div className="bg-red-500 rounded-full w-2 h-2 mr-2"></div></div><p>.csv</p></div>
            <div className="bg-white rounded-[3px] shadow-md py-1 px-2 flex flex-row items-center"><div><div className="bg-orange-500 rounded-full w-2 h-2 mr-2"></div></div><p>.xlsx / .xls</p></div>
            <div className="bg-white rounded-[3px] shadow-md py-1 px-2 flex flex-row items-center"><div><div className="bg-violet-500 rounded-full w-2 h-2 mr-2"></div></div><p>Google Contacts</p></div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50/90 w-full md:max-w-3/4 mx-10 my-10 border-2 border-dashed border-gray-400 rounded-lg h-90 flex justify-center p-5">
        <div className="flex flex-col items-center">
          <div className="text-gray-100 max-md:text-[12px] max-sm:text-[10px] px-3 py-3 bg-violet-400/80 blend-overlay hover:bg-violet-500/80 rounded-md flex justify-center items-center mb-3"><Upload size={50} strokeWidth={2} /></div>
          <div className="font-bold text-gray-700 max-md:text-[16px] max-sm:text-[14px] mt-2 justify-center items-center text-xl">Drag & Drop CSV or Excel Files</div>
          <div className="text-gray-500 max-md:text-[16px] max-sm:text-[14px] flex flex-row items-center text-xl">Limit 25MB per upload files <span className="bg-gray-400/70 rounded-full h-1 w-1 inline-block ml-1 mr-[3px]"></span> Supports .csv .xlsx .xls</div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept=".csv,.xls,.xlsx"
          />
          <button
            onClick={triggerFileInput}
            disabled={uploadStatus.loading}
            className={`${file ? "hover:from-red-500 hover:to-red-400" : "hover:from-cyan-500 hover:to-blue-500"} ${uploadStatus.loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} from-cyan-600 to-blue-600 bg-gradient-to-r rounded-full px-8 py-3 text-white font-bold shadow-lg shadow-blue-200 mt-8 hover:scale-105 transition-transform flex items-center gap-2`}
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
                          {uploadStatus.columns.map(c => (
                            <span key={c} className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full">{c}</span>
                          ))}
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
      <div className={`w-full mx-3 my-6 rounded-2xl ${tabledata.length > 0 ? "block" : "hidden"} md:max-w-3/4 max-md:max-w-full`}>

        {/* Section header */}
        <div className="flex flex-row justify-between items-center px-6 pb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Column Mapping</h2>
            <p className="text-sm text-gray-500 mt-0.5">Map each column to a vCard field</p>
          </div>
          <span className="bg-violet-100 text-violet-700 text-xs font-bold px-3 py-1 rounded-full">
            {tabledata.length} columns
          </span>
        </div>

        {/* Column cards */}
        <div className="flex flex-col gap-3 px-4">
          {tabledata.map((col) => (
            <div key={col} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md hover:border-violet-200">

              {/* Main row */}
              <div className="flex items-center gap-3 p-3">
                {/* Column name badge */}
                <div className="flex-shrink-0 min-w-[120px] max-w-[160px]">
                  <span className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-700 font-semibold text-sm px-3 py-1.5 rounded-lg w-full truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0"></span>
                    {col}
                  </span>
                </div>

                {/* Arrow */}
                <ChevronDown className="text-gray-300 rotate-[-90deg] flex-shrink-0" size={16} />

                {/* VCF property input */}
                <div className="flex-1 relative">
                  <input
                    className="w-full px-3 py-2 text-sm font-medium text-gray-800 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-violet-400 focus:bg-white focus:ring-2 focus:ring-violet-100 transition-all placeholder:text-gray-400 placeholder:font-normal"
                    list="vcfprop"
                    value={mappings[col] || ''}
                    onChange={(e) => setMappings({ ...mappings, [col]: e.target.value })}
                    placeholder="Select VCF property..."
                  />
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <button
                    title="Add prefix / postfix"
                    onClick={() => setEditEnabled({ ...editEnabled, [col]: !editEnabled[col] })}
                    className={`p-2 rounded-lg transition-all duration-200 ${editEnabled[col]
                        ? 'bg-violet-100 text-violet-600 hover:bg-violet-200'
                        : 'bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-600'
                      }`}
                  >
                    <Pencil size={14} />
                  </button>
                  <button
                    title="Clear mapping"
                    onClick={() => setMappings({ ...mappings, [col]: '' })}
                    className="p-2 rounded-lg bg-gray-100 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all duration-200"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>

              {/* Prefix / Postfix edit panel */}
              {editEnabled[col] && (
                <div className="border-t border-gray-100 bg-gray-50 px-4 py-3 flex gap-3">
                  <div className="flex-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Prefix</label>
                    <input
                      type="text"
                      className="w-full px-3 py-1.5 text-sm border border-gray-200 rounded-lg bg-white outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all"
                      value={prefixes[col] || ''}
                      onChange={(e) => setPrefixes({ ...prefixes, [col]: e.target.value })}
                      placeholder="e.g.  +91"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Postfix</label>
                    <input
                      type="text"
                      className="w-full px-3 py-1.5 text-sm border border-gray-200 rounded-lg bg-white outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all"
                      value={postfixes[col] || ''}
                      onChange={(e) => setPostfixes({ ...postfixes, [col]: e.target.value })}
                      placeholder="e.g.  @domain.com"
                    />
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

        <datalist id="vcfprop">
          <option value="FN">Full Name</option>
          <option value="N">Name</option>
          <option value="ORG">Organization</option>
          <option value="TITLE">Title</option>
          <option value="TEL">Phone Number</option>
          <option value="TEL;TYPE=WORK">Work Phone Number</option>
          <option value="TEL;TYPE=HOME">Home Phone Number</option>
          <option value="TEL;TYPE=MOBILE">Mobile Phone Number</option>
          <option value="EMAIL">Email</option>
          <option value="EMAIL;TYPE=WORK">Work Email</option>
          <option value="EMAIL;TYPE=HOME">Home Email</option>
          <option value="ADR">Address</option>
          <option value="ADR;TYPE=WORK">Work Address</option>
          <option value="ADR;TYPE=HOME">Home Address</option>
          <option value="URL">URL</option>
          <option value="NOTE">Note</option>
          <option value="BDAY">Birthday</option>
          <option value="ANNIVERSARY">Anniversary</option>
          <option value="GENDER">Gender</option>
          <option value="PHOTO">Photo</option>
          <option value="VERSION">Version</option>
          <option value="REV">Revision</option>
          <option value="UID">UID</option>
          <option value="CATEGORIES">Categories</option>
          <option value="IMPP">IMPP</option>
        </datalist>

        {/* Generate button */}
        <div className="flex flex-col items-center gap-2 mt-8 mb-6 px-4">
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className={`w-full max-w-xs py-3 rounded-xl text-white font-bold text-sm shadow-lg transition-all duration-200 ${isGenerating
                ? 'bg-gray-300 cursor-not-allowed shadow-none'
                : 'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 hover:scale-[1.02] hover:shadow-indigo-200 active:scale-[0.98]'
              }`}
          >
            {isGenerating ? '⏳ Generating...' : '✦ Generate vCard'}
          </button>
          <p className="text-xs text-gray-400">Only mapped columns will be included in the output</p>
        </div>
      </div>
    </section>
  );
}
