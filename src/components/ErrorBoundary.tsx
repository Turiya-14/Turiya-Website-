import React, { type ErrorInfo, type ReactNode } from "react";
import { RotateCw, ShieldAlert } from "lucide-react";
import { logger } from "../utils/logger";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });
    logger.error("Captured React rendering failure", error, { componentStack: errorInfo.componentStack });
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div 
          className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans select-none"
          id="error-boundary-screen"
        >
          <div className="max-w-md w-full bg-white rounded-2xl border border-slate-200/80 shadow-xl p-8 space-y-6 text-center animate-in fade-in duration-300">
            {/* Visual Header */}
            <div className="mx-auto h-14 w-14 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
              <ShieldAlert className="h-7 w-7 animate-pulse" />
            </div>

            <div className="space-y-2">
              <h1 className="text-xl font-bold tracking-tight text-slate-900 font-display">
                Something went wrong
              </h1>
              <p className="text-sm text-slate-500 leading-relaxed">
                This page hit an unexpected error. Reloading usually fixes it.
              </p>
            </div>

            {/* Error Details (Collapsible for Clean SaaS look) */}
            {/* Technical details are shown only during development */}
            {import.meta.env.DEV && this.state.error && (
              <div className="text-left bg-slate-50 border border-slate-100 rounded-lg p-3.5 max-h-40 overflow-y-auto">
                <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase block mb-1">
                  Diagnostics Info
                </span>
                <p className="font-mono text-xs text-red-600 break-words leading-tight">
                  {this.state.error.name}: {this.state.error.message}
                </p>
                {this.state.errorInfo?.componentStack && (
                  <pre className="font-mono text-[9px] text-slate-500 mt-2 whitespace-pre-wrap leading-tight">
                    {this.state.errorInfo.componentStack.split("\n").slice(0, 4).join("\n")}
                  </pre>
                )}
              </div>
            )}

            {/* Control Panel */}
            <div className="pt-2">
              <button
                onClick={this.handleReload}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-primary-hover text-white py-3 text-xs font-bold shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-95"
                id="error-reload-btn"
              >
                <RotateCw className="h-3.5 w-3.5" />
                Reload Page
              </button>
            </div>

            {/* Support footer */}
            <div className="text-[10px] text-slate-400 font-medium">
              If this keeps happening, please email business@turiyainfotech.com.
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
