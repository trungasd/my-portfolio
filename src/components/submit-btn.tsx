const SubmitBtn = ({ isSending} : { isSending:boolean }) => {
    return (
      <button
      type="submit"
      disabled={isSending}
      className={`bg-white cursor-pointer border border-gray-300 text-gray-800 px-6 py-3 rounded-full text-lg font-semibold transition duration-300 shadow-md ${
        isSending ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
      }`}
      >
        {isSending ? "Sending..." : "Send Message"}
      </button>
    );
  };
  
  export default SubmitBtn;
  