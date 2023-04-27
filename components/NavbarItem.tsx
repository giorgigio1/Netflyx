import React from 'react';

interface NavbarItemProops {
    label: string;
}

const NavbarItem: React.FC<NavbarItemProops> = ({ label }) => {
    return (
        <div className="text-white cursor-pointer hover:text-gray-300 transition">
            {label}
        </div>
    )
}

export default NavbarItem;