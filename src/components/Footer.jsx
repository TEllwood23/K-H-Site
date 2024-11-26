const links = [
  {
    name: 'Portfolio',
    href: 'https://yourportfolio.com',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 21.35c-5.17 0-9.35-4.18-9.35-9.35S6.83 2.65 12 2.65 21.35 6.83 21.35 12 17.17 21.35 12 21.35z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/tomellwood',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M16.16 8.29a3.75 3.75 0 0 1 3.75 3.75v6.18h-2.93v-6.18a.82.82 0 0 0-.82-.82h-.12a.82.82 0 0 0-.82.82v6.18H12V12.04a3.75 3.75 0 0 1 3.75-3.75ZM8.68 10h2.93v8.22H8.68zm-1.47 0a1.47 1.47 0 1 1 0-2.93 1.47 1.47 0 0 1 0 2.93Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800">
      <div className="mx-auto max-w-7xl max-h-0.5 px-6 py-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center gap-x-6 md:order-2">
          {links.map((link) => (
            <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <span className="sr-only">{link.name}</span>
              <link.icon aria-hidden="true" className="w-6 h-6" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-sm md:order-1 md:mt-0">
          Built by <a href="https://linkedin.com/in/tomellwood" className="underline hover:text-gray-300">Tom Ellwood</a>
        </p>
      </div>
    </footer>
  );
}
