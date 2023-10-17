function VisuallyHidden({ as = "span", children }) {
  const Element = as;
  return <Element className="sr-only">{children}</Element>;
}

export default VisuallyHidden;
