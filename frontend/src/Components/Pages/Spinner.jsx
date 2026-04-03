import React from "react";

export default function Spinner() {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const timeoutId = window.setTimeout(() => setVisible(false), 350);
    return () => window.clearTimeout(timeoutId);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="loading-screen" aria-label="Loading">
      <div className="loading-ring"></div>
    </div>
  );
}
