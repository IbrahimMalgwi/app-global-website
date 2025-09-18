// src/components/UI/SubsidiaryCard.jsx
export const SubsidiaryCard = ({
                                   subsidiary,
                                   isSelected,
                                   onClick
                               }) => {
    const { logo, name, subtitle } = subsidiary;

    return (
        <div
            className={`flex items-center space-x-4 p-4 rounded-xl mb-4 cursor-pointer transition-all duration-300 ${
                isSelected
                    ? "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 shadow-md scale-105"
                    : "bg-white/80 hover:bg-gray-100"
            }`}
            onClick={onClick}
        >
            <img
                src={logo}
                alt={`${name} logo`}
                className="w-10 h-10 rounded-full"
            />
            <div className="text-left">
                <h4 className="font-bold text-lg">{name}</h4>
                <p className="text-sm text-gray-500">{subtitle}</p>
            </div>
        </div>
    );
};