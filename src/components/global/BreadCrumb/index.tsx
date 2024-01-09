import Link from "next/link";

interface BreadcrumbProps {
  paths: { name: string; url: string, active: boolean }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ paths }) => {
  
  return (
    <nav className="text-md w-full rounded-full px-6 py-3 shadow-lg bg-white" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        {paths.map((path, index) => (
          <li key={index} className="flex items-center gap-4 pr-4">
            <Link href={path.url} className={`text-sm text-gray-500 hover:text-gray-700 ${path.active ? '' : 'cursor-not-allowed pointer-events-none'}`}>
                {path.name}
            </Link>
            {index < paths.length - 1 && (
                <div className="p-[2px] bg-red-100 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-4 h-4 text-red-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>             
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
