import React, { Component } from "react";
import { Link } from "@reach/router";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          there was an error with this listing
          <Link to="/">click here</Link>
          to go back to home
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
