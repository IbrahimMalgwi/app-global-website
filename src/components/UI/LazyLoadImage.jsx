import { useState } from 'react';

export const LazyLoadImage = ({
                                  src,
                                  alt,
                                  className = "",
                                  placeholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjI0IiBoZWlnaHQ9IjIyNCIgdmlld0JveD0iMCAwIDIyNCAyMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMjQiIGhlaWdodD0iMjI0IiBmaWxsPSIjRTBFMEUwIi8+CjxwYXRoIGQ9Ik0xMTIgMTEyQzExMiAxMjQuMTUgMTAyLjE1IDEzNCA5MCAxMzRDNzcuODQ5NyAxMzQgNjggMTI0LjE1IDY4IDExMkM2OCA5OS44NDk3IDc3Ljg0OTcgOTAgOTAgOTBDMTAyLjE1IDkwIDExMiA5OS44NDk3IDExMiAxMTJaTTkwIDE3MEMxMjUuODIgMTcwIDE1NiAxNTcuNDI5IDE1NiAxNDBDMTU2IDEyMi41NzEgMTI1LjgyIDExMCA5MCAxMTBDNTQuMTc3OSAxMTAgMjQgMTIyLjU3MSAyNCAxNDBDMjQgMTU3LjQyOSA1NC4xNzc5IDE3MCA5MCAxNzBaIiBmaWxsPSIjOTk5OTk5Ii8+Cjwvc3ZnPg=="
                              }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    const handleError = () => {
        setHasError(true);
        setIsLoaded(true);
    };

    return (
        <div className="relative">
            {/* Placeholder */}
            {!isLoaded && (
                <img
                    src={placeholder}
                    alt="Loading..."
                    className={`${className} animate-pulse`}
                />
            )}

            {/* Actual Image */}
            <img
                src={hasError ? placeholder : src}
                alt={alt}
                className={`${className} transition-opacity duration-300 ${
                    isLoaded && !hasError ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
                }`}
                onLoad={handleLoad}
                onError={handleError}
                loading="lazy"
            />
        </div>
    );
};