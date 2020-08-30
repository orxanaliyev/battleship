import React, { Component, ErrorInfo } from "react";

interface IProps {
  error: unknown;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<{}, IProps> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error: IProps["error"], errorInfo: IProps["errorInfo"]) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div className={"ui container"}>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && String(this.state.error)}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

export default ErrorBoundary;
