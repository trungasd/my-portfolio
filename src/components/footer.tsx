// src/components/Footer.tsx

const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <p className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Trung. All rights reserved.
      </p>
      <p className="text-xs text-gray-400 mt-2">
        Built with Next.js & Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;
