"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Papa from "papaparse";
import * as XLSX from "xlsx";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud, FileSpreadsheet, FileText, CheckCircle2, X, ChevronDown, Settings2, Download } from "lucide-react";
import { toast } from "sonner";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const VCF_PROPERTIES = [
  { value: "FN", label: "Full Name (FN)" },
  { value: "N", label: "Name Components (N)" },
  { value: "ORG", label: "Organization" },
  { value: "TITLE", label: "Title / Job" },
  { value: "TEL;TYPE=CELL", label: "Mobile Phone" },
  { value: "TEL;TYPE=WORK", label: "Work Phone" },
  { value: "TEL;TYPE=HOME", label: "Home Phone" },
  { value: "EMAIL;TYPE=INTERNET", label: "Email" },
  { value: "EMAIL;TYPE=WORK", label: "Work Email" },
  { value: "ADR;TYPE=HOME", label: "Home Address" },
  { value: "ADR;TYPE=WORK", label: "Work Address" },
  { value: "URL", label: "Website URL" },
  { value: "NOTE", label: "Notes" },
  { value: "BDAY", label: "Birthday (YYYY-MM-DD)" },
];

export default function Converter() {
  const [file, setFile] = useState<File | null>(null);
  const [columns, setColumns] = useState<string[]>([]);
  const [parsedData, setParsedData] = useState<any[]>([]);
  const [mappings, setMappings] = useState<Record<string, string>>({});
  const [prefixes, setPrefixes] = useState<Record<string, string>>({});
  const [postfixes, setPostfixes] = useState<Record<string, string>>({});
  const [stats, setStats] = useState<{ total: number; success: number; empty: number } | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const selected = acceptedFiles[0];
    if (!selected) return;
    setFile(selected);
    setStats(null);
    setMappings({});

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target?.result;
      if (!data) return;

      try {
        if (selected.name.endsWith(".csv") || selected.name.endsWith(".txt")) {
          Papa.parse(data as string, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
              if (results.meta.fields) {
                setColumns(results.meta.fields);
                setParsedData(results.data);
                toast.success(`Successfully parsed ${results.data.length} rows.`);
              }
            },
            error: (err) => {
              toast.error("Error parsing CSV: " + err.message);
            }
          });
        } else if (selected.name.endsWith(".xlsx") || selected.name.endsWith(".xls")) {
          const workbook = XLSX.read(data, { type: "binary" });
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          const json: any[] = XLSX.utils.sheet_to_json(worksheet, { defval: "" });
          if (json.length > 0) {
            setColumns(Object.keys(json[0]));
            setParsedData(json);
            toast.success(`Successfully parsed ${json.length} rows.`);
          }
        } else {
          toast.error("Unsupported file format");
        }
      } catch (err) {
        console.error(err);
        toast.error("Failed to parse file. Please check the format.");
      }
    };

    if (selected.name.endsWith(".csv") || selected.name.endsWith(".txt")) {
      reader.readAsText(selected);
    } else {
      reader.readAsBinaryString(selected);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"],
      "text/plain": [".txt"],
      "application/vnd.ms-excel": [".xls"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
    },
    maxFiles: 1,
  });

  const reset = () => {
    setFile(null);
    setColumns([]);
    setParsedData([]);
    setMappings({});
    setStats(null);
  };

  const handleGenerate = () => {
    if (Object.keys(mappings).length === 0) {
      toast.error("Please map at least one column to a VCF property.");
      return;
    }

    let successCount = 0;
    let emptyCount = 0;
    let vcfString = "";

    parsedData.forEach((row) => {
      let hasData = false;
      let card = "BEGIN:VCARD\r\nVERSION:3.0\r\n";

      Object.entries(mappings).forEach(([col, vcfProp]) => {
        if (!vcfProp) return;
        const val = row[col];
        if (val !== undefined && val !== null && val !== "") {
          hasData = true;
          const pre = prefixes[col] || "";
          const post = postfixes[col] || "";
          card += `${vcfProp}:${pre}${val}${post}\r\n`;
        }
      });

      card += "END:VCARD\r\n";

      if (hasData) {
        vcfString += card;
        successCount++;
      } else {
        emptyCount++;
      }
    });

    setStats({ total: parsedData.length, success: successCount, empty: emptyCount });

    if (successCount > 0) {
      const blob = new Blob([vcfString], { type: "text/vcard;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = file ? file.name.replace(/\.[^/.]+$/, "") + "_converted.vcf" : "contacts.vcf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      toast.success("VCF generated successfully!");
    } else {
      toast.error("No valid data found to generate VCF.");
    }
  };

  return (
    <div id="converter" className="w-full">
      <div className="w-full">
        
        {!file ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full"
          >
            <div
              {...getRootProps()}
              className={`relative rounded-[24px] p-12 md:p-20 text-center transition-all duration-300 cursor-pointer bg-card soft-shadow group ${
                isDragActive ? "scale-[1.02] shadow-[0_0_50px_-12px_rgba(0,0,0,0.1)]" : "hover:-translate-y-1 hover:shadow-[0_10px_50px_-10px_rgba(0,0,0,0.08)]"
              }`}
            >
              <div className={`absolute inset-0 rounded-[24px] border-2 border-dashed pointer-events-none transition-colors duration-300 ${
                isDragActive ? "border-primary bg-primary/5" : "border-border group-hover:border-primary/40 group-hover:bg-muted/30"
              }`}></div>
              
              <input {...getInputProps()} />
              <div className="flex flex-col items-center justify-center space-y-6">
                <div className="bg-primary/10 p-4 rounded-full text-primary">
                  <UploadCloud size={48} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">Drag & Drop your file here</h3>
                  <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                    Supports CSV, Excel (XLSX, XLS), and TXT files. All processing happens securely in your browser.
                  </p>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground font-medium pt-4">
                  <span className="flex items-center gap-1.5"><FileSpreadsheet size={16} className="text-green-600" /> Excel</span>
                  <span className="flex items-center gap-1.5"><FileText size={16} className="text-blue-600" /> CSV</span>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-8"
          >
            {/* File Info Header */}
            <Card className="border-primary/20 shadow-sm bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 text-green-700 p-3 rounded-full">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">{file.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {parsedData.length} rows detected • {(file.size / 1024).toFixed(1)} KB
                    </p>
                  </div>
                </div>
                <AnimatedButton variant="outline" onClick={reset} className="text-destructive hover:text-destructive hover:bg-destructive/10 border-destructive/20">
                  <X size={16} className="mr-2" /> Replace File
                </AnimatedButton>
              </CardContent>
            </Card>

            {/* Mapping Section */}
            {columns.length > 0 && (
              <Card className="shadow-lg border-border/50">
                <CardHeader className="bg-muted/30 border-b border-border/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Map Columns to VCF Fields</CardTitle>
                      <CardDescription className="mt-1">Select the corresponding vCard property for each column you want to export.</CardDescription>
                    </div>
                    <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
                      {columns.length} Columns
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-border/50">
                    {columns.map((col) => (
                      <Accordion key={col}>
                        <AccordionItem value={col} className="border-none px-6 py-2">
                          <div className="flex flex-col md:flex-row md:items-center gap-4 w-full">
                            
                            <div className="flex-1 min-w-[200px]">
                              <span className="inline-flex items-center gap-2 bg-muted text-foreground font-semibold text-sm px-3 py-2 rounded-md w-full">
                                <span className="w-2 h-2 rounded-full bg-primary/60"></span>
                                <span className="truncate">{col}</span>
                              </span>
                            </div>

                            <div className="hidden md:flex text-muted-foreground">
                              <ChevronDown className="rotate-[-90deg]" size={16} />
                            </div>

                            <div className="flex-1">
                              <Select
                                value={mappings[col] || ""}
                                onValueChange={(val) => setMappings({ ...mappings, [col]: val })}
                              >
                                <SelectTrigger className="w-full bg-background">
                                  <SelectValue placeholder="Ignore this column..." />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="ignore" className="text-muted-foreground italic">Ignore this column...</SelectItem>
                                  {VCF_PROPERTIES.map((prop) => (
                                    <SelectItem key={prop.value} value={prop.value}>
                                      {prop.label} <span className="text-muted-foreground text-xs ml-2">({prop.value})</span>
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="flex items-center">
                              <AccordionTrigger className="p-2 hover:bg-muted rounded-md text-muted-foreground hover:no-underline [&[data-state=open]]:bg-primary/10 [&[data-state=open]]:text-primary transition-colors">
                                <Settings2 size={18} />
                              </AccordionTrigger>
                            </div>

                          </div>
                          <AccordionContent className="pt-4 pb-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted/40 p-4 rounded-lg border border-border/50">
                              <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Prefix (Optional)</label>
                                <Input 
                                  placeholder="e.g. +1 " 
                                  value={prefixes[col] || ""} 
                                  onChange={(e) => setPrefixes({ ...prefixes, [col]: e.target.value })}
                                  className="bg-background"
                                />
                              </div>
                              <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Suffix (Optional)</label>
                                <Input 
                                  placeholder="e.g. @domain.com" 
                                  value={postfixes[col] || ""} 
                                  onChange={(e) => setPostfixes({ ...postfixes, [col]: e.target.value })}
                                  className="bg-background"
                                />
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ))}
                  </div>
                </CardContent>
                <div className="p-6 bg-muted/30 border-t border-border/50 flex flex-col items-center">
                  <AnimatedButton size="lg" onClick={handleGenerate} className="w-full md:w-auto min-w-[250px] shadow-lg shadow-primary/20">
                    <Download className="mr-2 h-5 w-5" /> Generate vCard
                  </AnimatedButton>
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    Only mapped columns will be included. Processing runs 100% locally.
                  </p>

                  {/* Stats */}
                  <AnimatePresence>
                    {stats && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-6 w-full max-w-md bg-background border border-green-200 p-4 rounded-xl shadow-sm text-center"
                      >
                        <h4 className="font-bold text-green-700 flex items-center justify-center gap-2 mb-2">
                          <CheckCircle2 size={18} /> Conversion Complete
                        </h4>
                        <div className="grid grid-cols-2 gap-4 text-sm mt-3">
                          <div className="bg-muted/50 p-2 rounded-md">
                            <div className="text-2xl font-black text-foreground">{stats.success}</div>
                            <div className="text-muted-foreground font-medium">Contacts Exported</div>
                          </div>
                          <div className="bg-muted/50 p-2 rounded-md">
                            <div className="text-2xl font-black text-foreground">{stats.empty}</div>
                            <div className="text-muted-foreground font-medium">Skipped (Empty)</div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Card>
            )}
          </motion.div>
        )}

      </div>
    </div>
  );
}
