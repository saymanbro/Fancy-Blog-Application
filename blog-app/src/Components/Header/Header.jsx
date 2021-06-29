import './header.css'

const Header = () => {
    return (
        <header className='header'>
             <div className="headerTitles">
                 <span className="titleSm">React & Node </span>
                 <span className="titleLg">Blog</span>
             </div>
             <img src="/assets/nature.jpg" alt="" className="headerImg " />
        </header >
    );
};

export default Header;