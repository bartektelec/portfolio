export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className='mt-48 bg-gray-100 text-gray-800 py-4 gap-2 flex flex-col justify-center items-center'>
      <p className='text-xs'>
        This site is built with 💙 using TypeScript, Next.js, TailwindCSS and
        GSAP.
      </p>
      <p>2021 © bartektelec.com</p>
    </footer>
  );
};

export default Footer;
