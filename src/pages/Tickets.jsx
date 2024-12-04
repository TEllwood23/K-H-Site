function Tickets() {
  return (
    <div className="container mx-auto px-8 h-screen overflow-hidden pt-24 lg:pt-38 pb-20 mb-20">
      <div className="flex justify-center">
        <h1 className="text-4xl pb-4 font-sub">Buy tickets for upcoming shows at <span className="text-textSecondary">Berks Nest</span></h1>
      </div>
      <iframe
          src="https://www.berksnest.com/" // Replace with the actual link
          title="Berks Nest Tickets"
          className="w-full h-full border rounded-lg">
      </iframe>
    </div>
  );
}

export default Tickets;
