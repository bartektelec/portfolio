export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className='mt-48 bg-gray-100 text-gray-800 py-4 flex justify-center items-center'>
      2021 © bartektelec.com
    </footer>
  );
};

export default Footer;
