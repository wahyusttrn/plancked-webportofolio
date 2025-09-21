import React from 'react';

const BlinkingEdge: React.FC<{ opacity: number; display?: string }> = ({ opacity, display = 'flex' }) => {
  return (
    <section className="overflow-hidden pointer-events-none" style={{ opacity, display }}>
      <div className="min-h-screen w-56 fixed top-0 right-0 bg-gradient-to-l from-redish/55 to-sec-background/0 opacity-50 animate-ping" />
      <div className="min-h-screen w-56 fixed top-0 left-0 bg-gradient-to-r from-redish/55 to-sec-background/0 opacity-50 animate-ping" />
    </section>
  );
};

export default BlinkingEdge;
