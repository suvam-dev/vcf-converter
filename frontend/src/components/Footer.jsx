export default function Footer() {
  return (
    <footer>
      <div className="flex flex-row max-md:flex-col max-md:gap-0 gap-5 p-4 justify-center items-center">
        <div className="text-center text-gray-700/60 font-md text-sm">@2026 VCF Converter. All rights reserved.</div>
        <div className="text-center text-gray-700 font-md text-sm">
          {'<' + '/' + '>'}Built with ❤️ by <a className="text-blue-500 font-extrabold" href="https://github.com/suvam-dev" target="_blank" rel="noreferrer">suvam-dev</a>
        </div>
      </div>
    </footer>
  );
}
