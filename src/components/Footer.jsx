function Footer() {
  return (
    <footer className="bg-white text-blue-400 fixed bottom-0 left-0 w-full py-1">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          Site created by{" "}
          <a
            href="https://www.linkedin.com/in/tomellwood"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-red-900 transition duration-300"
          >
            Tom Ellwood
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
