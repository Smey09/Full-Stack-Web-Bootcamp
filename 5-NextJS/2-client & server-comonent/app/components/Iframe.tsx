const IframeContainer = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <iframe
        src="/aboutme.html"
        width="100%"
        height="600"
        title="About Me"
        className="w-full h-full border-0"
      ></iframe>
    </div>
  );
};

export default IframeContainer;
