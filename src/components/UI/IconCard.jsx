// src/components/UI/IconCard.jsx
import { Card } from './Card';
import { typography } from '../../theme/typography';
import colors from '../../theme/colors';

export const IconCard = ({
                             title,
                             description,
                             icon,
                             gradient = 'from-purple-500 to-indigo-600', // Default gradient
                             blurGradient = 'from-purple-300 to-indigo-300', // Default blur gradient
                             ...props
                         }) => {
    return (
        <Card className="text-center flex flex-col items-center" {...props}>
            {/* Icon Container with Blur Effect */}
            <div className="relative flex items-center justify-center mb-8">
                <div className={`absolute w-24 h-24 bg-gradient-to-r ${blurGradient} rounded-full blur-xl opacity-40`}></div>
                <div className={`relative z-10 w-20 h-20 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                    {icon}
                </div>
            </div>

            {/* Content */}
            <h3 className={`${typography.h3} mb-6 ${colors.text.primary}`}>{title}</h3>
            <p className={`${typography.body} max-w-md mx-auto`}>
                {description}
            </p>
        </Card>
    );
};