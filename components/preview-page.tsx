"use client";

import * as React from "react";

interface PreviewComponentProps {
  children: React.ReactNode;
  className?: string;
}

export function PreviewComponent({
  children,
  className = "",
}: PreviewComponentProps) {
  return (
    <div data-preview className={`h-full p-8 ${className}`}>
      {children}
    </div>
  );
}

interface PreviewBlockProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

export function PreviewBlock({
  children,
  className = "",
  title,
  description,
}: PreviewBlockProps) {
  return (
    <div className={`w-full ${className}`}>
      {(title || description) && (
        <div className="mb-8 text-center">
          {title && (
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
          )}
          {description && (
            <p className="text-lg text-gray-600">{description}</p>
          )}
        </div>
      )}
      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
        {children}
      </div>
    </div>
  );
}
