import PropTypes from 'prop-types';

function SidebarMenu({ link, icon, text, target, onClick }) {
    return (
        <a href={link} target={target} onClick={onClick} rel="noreferrer" title={text} className="w-full h-10 sm:pl-1 lg:pl-2 text-2xs lg:text-sm flex flex-col sm:flex-row justify-center md:justify-start sm:gap-4 items-center rounded-xl hover:text-owner-primary hover:scale-95 duration-200 cursor-pointer">
            {icon}
            <h1 className="hidden sm:block">{text}</h1>
        </a>
    )
}

SidebarMenu.propTypes = {
    link: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    text: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default SidebarMenu
