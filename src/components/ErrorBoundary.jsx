// src/components/ErrorBoundary.jsx
import { Component } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail, Bug, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
            showDetails: false
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ errorInfo });
        console.error('Error caught by boundary:', error, errorInfo);

        // You can log to an error reporting service here
        // this.logErrorToService(error, errorInfo);
    }

    handleReload = () => {
        window.location.reload();
    };

    handleGoHome = () => {
        window.location.href = '/';
    };

    toggleDetails = () => {
        this.setState(prev => ({ showDetails: !prev.showDetails }));
    };

    render() {
        if (this.state.hasError) {
            const { error, errorInfo, showDetails } = this.state;

            return (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="min-h-[60vh] flex items-center justify-center p-4 md:p-8"
                >
                    <div className="max-w-2xl w-full">
                        {/* Error Card */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden">
                            {/* Header Gradient */}
                            <div className="h-2 bg-gradient-to-r from-red-500 to-orange-500" />

                            <div className="p-8 md:p-10">
                                {/* Icon */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                    className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6"
                                >
                                    <AlertTriangle className="w-10 h-10 text-red-600 dark:text-red-400" />
                                </motion.div>

                                {/* Error Code Badge */}
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-900/20 rounded-full mx-auto mb-4 border border-red-200 dark:border-red-800/30">
                                    <Bug className="w-4 h-4 text-red-600 dark:text-red-400" />
                                    <span className="text-xs font-medium text-red-600 dark:text-red-400">
                                        Error {error?.status || 500}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                                    Oops! Something went wrong
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 dark:text-gray-400 text-center mb-6 max-w-md mx-auto">
                                    We're sorry, but we encountered an unexpected error. Our team has been notified and is working on a fix.
                                </p>

                                {/* Error Details Toggle */}
                                {process.env.NODE_ENV === 'development' && error && (
                                    <div className="mb-6">
                                        <button
                                            onClick={this.toggleDetails}
                                            className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors mx-auto"
                                        >
                                            <span>{showDetails ? 'Hide' : 'Show'} error details</span>
                                            <motion.div
                                                animate={{ rotate: showDetails ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <ArrowLeft className="w-4 h-4" />
                                            </motion.div>
                                        </button>

                                        {showDetails && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="mt-4 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-700 overflow-auto max-h-96"
                                            >
                                                <p className="text-sm font-mono text-red-600 dark:text-red-400 mb-2">
                                                    {error?.toString()}
                                                </p>
                                                {errorInfo?.componentStack && (
                                                    <pre className="text-xs font-mono text-gray-600 dark:text-gray-400 whitespace-pre-wrap">
                                                        {errorInfo.componentStack}
                                                    </pre>
                                                )}
                                            </motion.div>
                                        )}
                                    </div>
                                )}

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={this.handleReload}
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                                    >
                                        <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                                        Reload Page
                                    </motion.button>

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={this.handleGoHome}
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl border border-gray-200 dark:border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300 group"
                                    >
                                        <Home className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                                        Go to Homepage
                                    </motion.button>
                                </div>

                                {/* Support Link */}
                                <div className="mt-6 text-center">
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Need help?{' '}
                                        <a
                                            href="mailto:support@appglobal.com"
                                            className="inline-flex items-center gap-1 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors font-medium"
                                        >
                                            Contact Support
                                            <Mail className="w-3 h-3" />
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Additional Help Options */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                            {[
                                { label: 'Documentation', href: '/docs' },
                                { label: 'FAQ', href: '/faq' },
                                { label: 'Community', href: '/community' },
                                { label: 'Status', href: '/status' },
                            ].map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-center p-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transition-colors group"
                                >
                                    <span className="text-xs text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                        {item.label}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;